<?php
namespace App\Service\Client;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\Client;

class ClientMoreService {
    private $em;

    public function __construct(EntityManagerInterface $em){
        $this->em = $em;
    }

    public function clients()
    {
        $results = [];
        $clients = $this->em->getRepository(Client::class)->findAll();
        foreach($clients as $client){
            $results[] = [
                "value" => $client->getId(),
                "content" => $client->getName()
            ];
        }
        return $results;
    }

    public function find($id): ?Client 
    {
        $item = $this->em->getRepository(Client::class)->findOneBy(["id" => $id]);
        return $item;
    }
}