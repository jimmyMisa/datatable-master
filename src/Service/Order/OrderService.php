<?php
namespace App\Service\Order;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\Order;
use App\Constant\Order\OrderSuccessMessages;
use App\Constant\Order\OrderFailureMessages;
use App\Service\Datatable\DatatableService;

class OrderService {
    private $em;
	private $cnx;
    private $datatable;

    public function __construct(EntityManagerInterface $em, DatatableService $datatable){
        $this->em = $em;
        $this->datatable = $datatable;
		$this->cnx = $this->em->getConnection();
    }

    public function listAction($data)
    {

        // Define the initial query
        $query = "(
            SELECT
                order_product.id AS id,
                client.name AS client_name,
                product.name AS product_name
            FROM
                order_product
            LEFT JOIN
                client ON client.id=order_product.client_id
            LEFT JOIN
                product ON product.id=order_product.product_id
        )";

        // Define the search fields
        $searchFields = [
            "client_name",
            "product_name"
        ];

        $where = [];
        

        $data['search_fields'] = $searchFields;
        $data['where_array'] = $where;

        $result = $this->datatable->getResult($query, $data);

        return $result;
    }

    /**
     * @param array $content
     * @return Order
     */   
    public function createAction($data): Order
    {
        $name = trim($data["name"]);
        $phone = trim($data["phone"]);


        $order = new Order();
        $order->setName($name);
        $order->setPhone($phone);

        $this->em->persist($order);
        $this->em->flush();
        return $order;
    }

    public function editAction($data): ?Order
    {
        $id = trim($data["id"]);
        $name = trim($data["name"]);
        $phone = trim($data["phone"]);

        $order = $this->em->getRepository(Order::class)->findOneBy(["id" => $id]);
        if (!$order) {
            return null;
        }

        $order->setName($name);
        $order->setPhone($phone);

        /* 
            Prerequisite: Define the save function in the repository
        */
        $this->em->getRepository(Order::class)->save($order);

        return $order;
    }

    public function getAction($data): ?array
    {
        $id = trim($data["id"]);

        $order = $this->em->getRepository(Order::class)->findOneBy(["id" => $id]);

        if (!$order) {
            return null;
        }

        $results["name"] = $order->getName();
        $results["phone"] = $order->getPhone();
        return $results;
    }

    public function removeAction($data) : bool
    {
        $id = $data["id"];

        $order = $this->em->getRepository(Order::class)->findOneBy([
            "id" => $id
        ]);
        if (!$order) {
            return false;
        }

        /* 
            Prerequisite: Define the remove function in the repository
        */
        $this->em->getRepository(Order::class)->remove($order);

        return true;
    }

    public function removeMultiple($data) : void
    {
        $ids = $data["ids"];
        
        $instances = $this->em->getRepository(Order::class)->findBy([
            "id" => $ids
        ]);
        
        foreach ($instances as $instance) {
            $this->em->remove($instance);
        }
        
        $this->em->flush();
    }

    /**
     * Update multiple order instances based on provided data.
     *
     * @param array $data The data containing updates for order instances.
     * @return Order[]|null An array of updated order instances, or null if no updates were made.
     */
    public function editMultiple($data)
    {
        $instanceUpdates = $data["instance_updates"];
    
        $ids = [];
        $instanceUpdatesIndexation = [];
    
        foreach($instanceUpdates as $instance_update){
            if(isset($instance_update["id"])){
                $ids[] = $instance_update["id"];
                $instanceUpdatesIndexation[$instance_update["id"]] = $instance_update;
            }
        }
    
        /*
        [
            {id:1, name:"a"},
            {id:2, name:"b"},
            {id:3, name:"c"},
            {id:4, name:"a"},
        ]
        */
    
        $instances = $this->em->getRepository(Order::class)->findBy([
            "id" => $ids
        ]);
    
        if (count($instances) == 0) {
            return false;
        }
    
        foreach ($instances as $instance) {
            if(isset($instanceUpdatesIndexation[$instance->getId()])){
                $updateData = $instanceUpdatesIndexation[$instance->getId()];
                /*
                    Place here the updates
                */
                if(isset($updateData["name"])){
                    $instance->setName($updateData["name"]);
                }
                if(isset($updateData["phone"])){
                    $instance->setPhone($updateData["phone"]);
                }
            }
        }
    
        $this->em->flush();
    
        return $instances;
    }
    
    
}