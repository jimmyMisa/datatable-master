<?php

namespace App\Controller\Order;

use App\Service\Order\OrderService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Constant\Common\CommonFailureMessages;
use App\Constant\Common\CommonSuccessMessages;
use App\Service\Client\ClientMoreService;
use App\Service\Product\ProductMoreService;

class ApiOrderController extends AbstractController
{
    #[Route('/api/liste-des-commandes', name: 'api_list_order')]
    public function list(Request $request, OrderService $orderService): Response
    {
        $data = json_decode($request->getContent(), true);
        $datatableData = $orderService->listAction($data);
        $results = array_merge(CommonSuccessMessages::OK, $datatableData);
        return $this->json($results);
    }
    #[Route('/api/creer-une-commande', name: 'api_create_order')]
    public function create(
        OrderService $orderService, 
        Request $request,
        ClientMoreService $clientMoreService,
        ProductMoreService $productMoreService,
    )
    {
        $results = CommonFailureMessages::NOT_FOUND;
        $data = json_decode($request->request->get('query'), true);
        
        if (
            !isset($data["client_id"]) || 
            !isset($data["product_id"]) || 
            $data["client_id"] === null || 
            $data["product_id"] === null
        ) {
            $results = CommonFailureMessages::REQUIRED_FIELD;
            return $this->json($results);
        }

        // Retrieve the client by ID from the repository
        $client = $clientMoreService->find($data["client_id"]);
        $product = $productMoreService->find($data["product_id"]);

        $data = [
            "client" => $client,
            "product" => $product
        ];


        $instance = $orderService->createAction($data);
        if($instance){
            $results = CommonSuccessMessages::OK;
        }
        return $this->json($results);
    }
    #[Route('/api/supprimer-une-commande', name: 'api_remove_order')]
    public function remove(OrderService $orderService, Request $request)
    {
        $results = CommonFailureMessages::NOT_FOUND;

        $data = json_decode($request->request->get('query'), true);
        $id = null;

        if ($data && isset($data["id"])) {
            $id = $data["id"];
        }

        if (!$id) {
            $results = CommonFailureMessages::REQUIRED_FIELD;
            return $this->json($results);
        }

        $success = $orderService->removeAction($data);
        if($success){
            $results = CommonSuccessMessages::OK;
        }
        return $this->json($results);
    }
    #[Route('/api/modifier-une-commande', name: 'api_edit_order')]
    public function edit(
        OrderService $orderService, 
        Request $request,
        ClientMoreService $clientMoreService,
        ProductMoreService $productMoreService
    )
    {
        $results = CommonFailureMessages::NOT_FOUND;

        $data = json_decode($request->request->get('query'), true);
        $id = null;

        if ($data && isset($data["id"])) {
            $id = $data["id"];
        }

        if (!$id) {
            $results = CommonFailureMessages::REQUIRED_FIELD;
            return $this->json($results);
        }

        $client = $clientMoreService->find($data["client_id"]);
        $product = $productMoreService->find($data["product_id"]);

        $data["client"] = $client;
        $data["product"] = $product;
        
        $instance = $orderService->editAction($data);
        if($instance){
            $results = CommonSuccessMessages::OK;
        }
        return $this->json($results);
    }
    #[Route('/api/detail-d-une-commande', name: 'api_get_order')]
    public function get(OrderService $orderService, Request $request)
    {
        $results = CommonFailureMessages::NOT_FOUND;
        $data = json_decode($request->request->get('query'), true);
        $id = null;

        if ($data && isset($data["id"])) {
            $id = $data["id"];
        }

        if (!$id) {
            $results = CommonFailureMessages::REQUIRED_FIELD;
            return $this->json($results);
        }
        $results = $orderService->getAction($data);
        return $this->json($results);
    }
    #[Route('/api/suppression-multiple-de-commandes', name: 'api_remove_multiple_order')]
    public function removeMultiple(OrderService $orderService, Request $request)
    {
        $results = CommonFailureMessages::NOT_FOUND;
        $data = json_decode($request->request->get('query'), true);
        if (
            !isset($data["ids"]) || 
            is_array($data["ids"])
        ) {
            $results = CommonFailureMessages::REQUIRED_FIELD;
            return $this->json($results);
        }
        
        $success = $orderService->removeMultiple($data);
        if($success){
            $results = CommonSuccessMessages::OK;
        }
        return $this->json($results);
    }
    #[Route('/api/modification-multiple-de-commandes', name: 'api_edit_multiple_order')]
    public function editMultiple(OrderService $orderService, Request $request)
    {
        $results = CommonFailureMessages::NOT_FOUND;

        $data = json_decode($request->request->get('query'), true);
        if (
            !isset($data["instance_updates"]) || 
            is_array($data["instance_updates"])
        ){
            $results = CommonFailureMessages::REQUIRED_FIELD;
            return $this->json($results);
        }
        $success = $orderService->editMultiple($data);
        if($success){
            $results = CommonSuccessMessages::OK;
        }
        return $this->json($results);
    }
}
