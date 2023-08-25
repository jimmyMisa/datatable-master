<?php
namespace App\Service\Product;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\Product;
use App\Service\Datatable\DatatableService;

class ProductService {
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
                product.id AS id,
                product.name AS product_name,
                product.unit_price AS product_unit_price
            FROM
                product
        )";

        // Define the search fields
        $searchFields = [
            "product_name",
            "product_unit_price"
        ];
        

        $data['search_fields'] = $searchFields;

        $result = $this->datatable->getResult($query, $data);

        return $result;
    }

    /**
     * @param array $content
     * @return Product
     */   
    public function createAction($data): Product
    {
        $name = trim($data["name"]);
        $unit_price = trim($data["unit_price"]);


        $product = new Product();
        $product->setName($name);
        $product->setUnitPrice($unit_price);

        $this->em->persist($product);
        $this->em->flush();
        return $product;
    }

    public function editAction($data): ?Product
    {
        $id = trim($data["id"]);
        $name = trim($data["name"]);
        $unit_price = trim($data["unit_price"]);

        $product = $this->em->getRepository(Product::class)->findOneBy(["id" => $id]);
        if (!$product) {
            return null;
        }

        $product->setName($name);
        $product->setUnitPrice($unit_price);

        /* 
            Prerequisite: Define the save function in the repository
        */
        $this->em->getRepository(Product::class)->save($product);

        return $product;
    }

    public function getAction($data): ?array
    {
        $id = trim($data["id"]);

        $product = $this->em->getRepository(Product::class)->findOneBy(["id" => $id]);

        if (!$product) {
            return null;
        }

        $results["name"] = $product->getName();
        $results["unit_price"] = $product->getPhone();
        return $results;
    }

    public function removeAction($data) : bool
    {
        $id = $data["id"];

        $product = $this->em->getRepository(Product::class)->findOneBy([
            "id" => $id
        ]);
        if (!$product) {
            return false;
        }

        /* 
            Prerequisite: Define the remove function in the repository
        */
        $this->em->getRepository(Product::class)->remove($product);

        return true;
    }

    public function removeMultiple($data) : void
    {
        $ids = $data["ids"];
        
        $instances = $this->em->getRepository(Product::class)->findBy([
            "id" => $ids
        ]);
        
        foreach ($instances as $instance) {
            $this->em->remove($instance);
        }
        
        $this->em->flush();
    }

    /**
     * Update multiple product instances based on provided data.
     *
     * @param array $data The data containing updates for product instances.
     * @return Product[]|null An array of updated product instances, or null if no updates were made.
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
    
        $instances = $this->em->getRepository(Product::class)->findBy([
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
                if(isset($updateData["unit_price"])){
                    $instance->setUnitPrice($updateData["unit_price"]);
                }
            }
        }
    
        $this->em->flush();
    
        return $instances;
    }
    
    
}