<?php
namespace App\Service\Client;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\Client;
use App\Constant\Client\ClientSuccessMessages;
use App\Constant\Client\ClientFailureMessages;

class ClientService {
    private $em;
	private $cnx;

    public function __construct(EntityManagerInterface $em){
        $this->em = $em;
		$this->cnx = $this->em->getConnection();
    }

    public function listAction($request){
        $result = [
            'status' => 200,
            'message' => '',
            'datas' => [],
            'page' => 1,
            'limit' => 10,
            'total' => 0,
            'totalFiltered' => 0,
        ];

        $page = $request->request->get("page") !== null ? intval($request->request->get("page")) : 1;
    	$limit = $request->request->get("limit") !== null ? intval($request->request->get("limit")) : null;

        // BASE Table
        $alias_base_table = "base_table";
        list(
            $query_params, 
            $base_table
        ) = $this->getBasetable() ;

        // WHERE
        $where_array = [] ;
        list(
            $query_params, 
            $where_array
        ) = $this->getSearchQuery($request, $alias_base_table, $query_params, $where_array);
        list(
            $query_params, 
            $where_array
        ) = $this->getFilterQuery($request, $alias_base_table, $query_params, $where_array);
        $whereSql = $this->groupAndWhere($where_array, $alias_base_table) ;

        // ORDER, LIMIT
        $orderSql = $this->getOrderQuery($request, $alias_base_table);
        $limitSql = $this->getLimitQuery($page, $limit);

        // SQLs
        $sql = "
            SELECT * 
            FROM ($base_table) AS $alias_base_table
            $whereSql
            $orderSql 
            ";

        if($limit){
            $sql .= " $limitSql";
        }

        $sql_count = "
            SELECT COUNT(base_table.id) AS total
            FROM ($base_table) AS $alias_base_table
            $whereSql
        ";

        $sql_count_all = "
            SELECT COUNT(base_table.id) AS total
            FROM ($base_table) AS $alias_base_table
        ";

        $sql_data = $this->cnx->fetchAllAssociative($sql, $query_params);
        $sql_count_data = $this->cnx->fetchAllAssociative($sql_count, $query_params);
        $sql_count_all_data = $this->cnx->fetchAllAssociative($sql_count_all, $query_params);

        // Results
        $result['datas'] = $sql_data;
        $result['page'] = $page;
        $result['limit'] = $limit;
        $result['total'] = $sql_count_all_data[0]['total'];
        $result['totalFiltered'] = $sql_count_data[0]['total'];

        return $result;
    }

    /**
     * @return []
     */
    private function getBasetable() {

        $query_params = [];

        // Select
        $table_select = "
            SELECT
                client.id AS id,
                client.name AS client_name,
                client.phone AS client_phone
        ";

        // from
        $table_from = "
            FROM
                client
        ";

        // where
        $table_where = "" ;

        // query
        $base_query = "($table_select $table_from $table_where)" ;

        return [
            $query_params, 
            $base_query
        ] ;
    }

    /**
     * @param Object $request
     * @param String $alias_base_table
     * @param [] $query_params
     * @param [] $where_array
     * @return array
     */
    private function getSearchQuery($request, $alias_base_table, $query_params, $where_array){

    	$key = $request->request->get("key") !== null ? $request->request->get("key") : "";
        if($key){
            $key = preg_replace("!\s!u", ' ', $key);
            $key = trim($key);
        }

        list(
            $query_params, 
            $search_value
        ) = $this->addParam($query_params, "%$key%") ;
        $searchArray = [];

        $searchArray[] = "$alias_base_table.client_name LIKE :$search_value";
        $searchArray[] = "$alias_base_table.client_phone LIKE :$search_value";

        if ($searchArray) {
            $where_array[] = $this->groupOr($searchArray) ;
        }

        return [$query_params, $where_array];
    }

    /**
     * @param [] $query_params
     * @param string $value
     * @return []
     */
    private function addParam($query_params, $value){
        $key = "key".bin2hex(random_bytes(5)) ;
        $query_params[$key] = $value ;
        return [$query_params, $key];
    }

    /**
     * @param [] $wheres
     * @return String
     */
    private function groupOr($wheres = []){
        if(!$wheres){
            return '';
        }
        else {
            $implode = '('.implode(" OR ", $wheres).')';
            return " $implode " ;
        }
    }

    /**
     * @param Object $request
     * @param String $alias_base_table
     * @param [] $query_params
     * @param [] $where_array
     * @return array
     */
    private function getFilterQuery($request, $alias_base_table, $query_params, $where_array){

        $name = $request->request->get("name") !== null ? ($request->request->get("name")) : [];
    	$phone = $request->request->get("phone") !== null ? $request->request->get("phone") : null;

        $filterArray = [] ;

        if ($name) {
        	list($query_params, $filter_value) = $this->addParam($query_params, $name) ;
            $filterArray[] = " $alias_base_table.client_name = :$filter_value " ;
        }

        if($phone) {
            list($query_params, $filter_value) = $this->addParam($query_params, $phone) ;
            $filterArray[] = " $alias_base_table.client_phone = :$filter_value " ;
        }

        if ($filterArray) {
            $where_array[] = $this->groupAnd($filterArray) ;
        }
        
        return [$query_params, $where_array];
    }

    /**
     * @param [] $wheres
     * @return String
     */
    private function groupAnd($wheres = []){
        if(!$wheres){
            return '';
        }
        else {
            $implode = '('.implode(" AND ", $wheres).')';
            return " $implode " ;
        }
    }

    /**
     * @param [] $wheres
     * @return String
     */
    private function groupAndWhere($wheres = []){
        if(!$wheres){
            return '';
        }
        else {
            $implode = '('.implode(" AND ", $wheres).')';
            return " WHERE $implode " ;
        }
    }

    /**
     * @param Object $request
     * @param String $alias_base_table
     * @return String
     */
    private function getOrderQuery($request, $alias_base_table){

    	$order = $request->request->get("order") !== null ? $request->request->get("order") : "ASC";
        $order_by = $request->request->get("order_by") !== null ? $request->request->get("order_by") : null;

        $query = "";

        if (
            $order_by
        ) {
           	$query = "
                ORDER BY 
                    $alias_base_table.$order_by $order
            ";
        }

        return $query;
    }

    /**
     * @param int $page
     * @param int $limit
     * @return String
     */
    private function getLimitQuery($page=1, $limit=10){
        $offset = ($page - 1) * $limit;
        $query = "
            LIMIT $offset, $limit 
        ";
        return $query;
    }

    public function createAction($contents){
        $results = ClientFailureMessages::NOT_FOUND;
        $data = [];
        if ($contents && isset($contents["query"])) {
            $data = $contents["query"];
        }
        if (
            !$data || 
            !isset($data["name"]) ||
            !isset($data["phone"])
        ) {
            return $results;
        }
        $name = $data["name"];
        $phone = $data["phone"];
        if (!$name || !$phone) {
            return $results;
        }
        $client = new Client();
        $client->setName($name);
        $client->setPhone($phone);
        $this->em->persist($client);
        $this->em->flush();
        $results = [
            "status" => 200,
            "message" => ""
        ];
        $results = ClientSuccessMessages::OK;

        return $results;
    }

    public function editAction($contents){
        $data = [];
        $results = ClientFailureMessages::NOT_FOUND;
        if ($contents && isset($contents["query"])) {
            $data = $contents["query"];
        }

        if (
            !$data || 
            !isset($data["id"]) ||
            !isset($data["name"]) ||
            !isset($data["phone"])
        ) {
            return ClientFailureMessages::REQUIRED_FIELD_NOT_DEFINED;
        }
        $id = trim($data["id"]);
        $name = trim($data["name"]);
        $phone = trim($data["phone"]);
        if (!$id || !$name || !$phone) {
            return ClientFailureMessages::REQUIRED_FIELD_NOT_DEFINED;
        }
        $client = $this->em->getRepository(Client::class)->findOneBy(["id" => $id]);
        if (!$client) {
            return ClientFailureMessages::NOT_FOUND;
        }
        $results = ClientSuccessMessages::OK;
        $client->setName($name);
        $client->setPhone($phone);
        $this->em->flush();

        return $results;
    }

    public function getAction($contents){
        $data = [];
        $results = ClientFailureMessages::NOT_FOUND;
        if ($contents && isset($contents["query"])) {
            $data = $contents["query"];
        }

        if (
            !$data || 
            !isset($data["id"])
        ) {
            return ClientFailureMessages::REQUIRED_FIELD_NOT_DEFINED;
        }
        $id = trim($data["id"]);
        $client = $this->em->getRepository(Client::class)->findOneBy(["id" => $id]);

        $results = ClientSuccessMessages::OK;
        $results["name"] = $client->getName();
        $results["phone"] = $client->getPhone();
        return $results;
    }

    public function removeAction($contents){
        $data = [];
        $client_id = null;
        $results = ClientFailureMessages::NOT_FOUND;
        
        if ($contents && isset($contents["query"])) {
            $data = $contents["query"];
        }
        if ($data && isset($data["id"])) {
            $client_id = $data["id"];
        }
        if (!$client_id) {
            return ClientFailureMessages::REQUIRED_FIELD_NOT_DEFINED;
        }
        $client = $this->em->getRepository(Client::class)->findOneBy([
            "id" => $client_id
        ]);
        if (!$client) {
            return $results;
        }
        $results = ClientSuccessMessages::OK;
        
        $this->em->remove($client);
        $this->em->flush();

        return $results;
    }

    public function removeMultiple($contents){
        $data = [];
        $client_ids = [];
        $results = ClientFailureMessages::NOT_FOUND;
        
        if ($contents && isset($contents["query"])) {
            $data = $contents["query"];
        }
        if ($data && isset($data["ids"]) && is_array($data["ids"])) {
            $client_ids = $data["ids"];
        }
        if (count($client_ids) == 0) {
            return ClientFailureMessages::NOT_FOUND;
        }
        
        $clients = $this->em->getRepository(Client::class)->findBy([
            "id" => $client_ids
        ]);
        
        if (count($client_ids) == 0) {
            return $results;
        }
        foreach ($clients as $client) {
            $this->em->remove($client);
        }
        
        $this->em->flush();

        $results = ClientSuccessMessages::OK;
        return $results;
    }

    public function editMultiple($contents){
        $data = [];
        $client_updates = [];
        $results = ClientFailureMessages::NOT_FOUND;
        $client_updates_indexation = [];
        $client_ids = [];

        if ($contents && isset($contents["query"])) {
            $data = $contents["query"];
        }

        if ($data && isset($data["updates"]) && is_array($data["updates"])) {
            $client_updates = $data["updates"];
        }

        if (count($client_updates) == 0) {
            return ClientFailureMessages::REQUIRED_FIELD_NOT_DEFINED;
        }

        foreach($client_updates as $client_update){
            if(isset($client_update["id"])){
                $client_ids[] = $client_update["id"];
                $client_updates_indexation[$client_update["id"]] = $client_update;
            }
        }

        $clients = $this->em->getRepository(Client::class)->findBy([
            "id" => $client_ids
        ]);

        if (count($clients) == 0) {
            return $results;
        }

        $results = ClientSuccessMessages::OK;

        foreach ($clients as $client) {
            if(isset($client_updates_indexation[$client->getId()])){
                $updateData = $client_updates_indexation[$client->getId()];
                if(isset($updateData["name"])){
                    $client->setName($updateData["name"]);
                }
                if(isset($updateData["phone"])){
                    $client->setPhone($updateData["phone"]);
                }
            }
        }

        $this->em->flush();

        return $results;
    }
}