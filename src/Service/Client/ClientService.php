<?php
namespace App\Service\Client;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\Client;

class ClientService {
    private $em;
    public function __construct(EntityManagerInterface $em){
        $this->em = $em;
    }

    public function listAction(){
    }
    public function createAction(){
    }
    public function editAction(){
    }
    public function getAction(){
    }
    public function removeAction(){
    }
    public function removeMultiple(){
    }
    public function editMultiple(){
    }
}