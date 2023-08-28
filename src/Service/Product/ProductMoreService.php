<?php
namespace App\Service\Product;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\Product;

class ProductMoreService {
    private $em;

    public function __construct(EntityManagerInterface $em){
        $this->em = $em;
    }

    public function products()
    {
        $results = [];
        $products = $this->em->getRepository(Product::class)->findAll();
        foreach($products as $product){
            $results[] = [
                "value" => $product->getId(),
                "content" => $product->getName()
            ];
        }
        return $results;
    }

    public function find($id): ?Product 
    {
        $item = $this->em->getRepository(Product::class)->findOneBy(["id" => $id]);
        return $item;
    }
}