<?php

namespace App\Controller\Client;

use App\Service\Client\ClientService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Constant\Client\ClientFailureMessages;
use App\Constant\Client\ClientSuccessMessages;

class ApiClientController extends AbstractController
{
    #[Route('/api/liste-des-clients', name: 'api_list_client')]
    public function list(Request $request, ClientService $clientService): Response
    {
        $data = json_decode($request->getContent(), true);
        $datatableData = $clientService->listAction($data);
        $results = array_merge(ClientSuccessMessages::OK, $datatableData);
        return $this->json($results);
    }
    #[Route('/api/creer-un-client', name: 'api_create_client')]
    public function create(ClientService $clientService, Request $request): Response
    {
        $results = ClientFailureMessages::NOT_FOUND;
        $data = json_decode($request->request->get('query'), true);
        
        if (
            !isset($data["name"]) || 
            !isset($data["phone"]) || 
            $data["name"] === null || 
            $data["phone"] === null
        ) {
            return ClientFailureMessages::REQUIRED_FIELD;
        }

        $instance = $clientService->createAction($data);
        if($instance){
            $results = ClientSuccessMessages::OK;
        }
        return $this->json($results);
    }
    #[Route('/api/supprimer-un-client', name: 'api_remove_client')]
    public function remove(ClientService $clientService, Request $request): Response
    {
        $results = ClientFailureMessages::NOT_FOUND;

        $data = json_decode($request->request->get('query'), true);
        $id = null;

        if ($data && isset($data["id"])) {
            $id = $data["id"];
        }

        if (!$id) {
            return CommonFailureMessages::REQUIRED_FIELD;
        }

        $success = $clientService->removeAction($data);
        if($success){
            $results = ClientSuccessMessages::OK;
        }
        return $this->json($results);
    }
    #[Route('/api/modifier-un-client', name: 'api_edit_client')]
    public function edit(ClientService $clientService, Request $request): Response
    {
        $results = ClientFailureMessages::NOT_FOUND;

        $data = json_decode($request->request->get('query'), true);
        $id = null;

        if ($data && isset($data["id"])) {
            $id = $data["id"];
        }

        if (!$id) {
            return CommonFailureMessages::REQUIRED_FIELD;
        }
        
        $instance = $clientService->editAction($data);
        if($instance){
            $results = ClientSuccessMessages::OK;
        }
        return $this->json($results);
    }
    #[Route('/api/detail-d-un-client', name: 'api_get_client')]
    public function get(ClientService $clientService, Request $request): Response
    {
        $results = ClientFailureMessages::NOT_FOUND;
        $data = json_decode($request->request->get('query'), true);
        $id = null;

        if ($data && isset($data["id"])) {
            $id = $data["id"];
        }

        if (!$id) {
            return CommonFailureMessages::REQUIRED_FIELD;
        }
        $results = $clientService->getAction($data);
        return $this->json($results);
    }
    #[Route('/api/suppression-multiple-de-client', name: 'api_remove_multiple_client')]
    public function removeMultiple(ClientService $clientService, Request $request): Response
    {
        $results = ClientFailureMessages::NOT_FOUND;
        $data = json_decode($request->request->get('query'), true);
        if (
            !isset($data["ids"]) || 
            is_array($data["ids"])
        ) {
            return CommonFailureMessages::REQUIRED_FIELD;
        }
        
        $success = $clientService->removeMultiple($data);
        if($success){
            $results = ClientSuccessMessages::OK;
        }
        return $this->json($results);
    }
    #[Route('/api/modification-multiple-de-client', name: 'api_edit_multiple_client')]
    public function editMultiple(ClientService $clientService, Request $request): Response
    {
        $results = ClientFailureMessages::NOT_FOUND;

        $data = json_decode($request->request->get('query'), true);
        if (
            !isset($data["instance_updates"]) || 
            is_array($data["instance_updates"])
        ){
            return CommonFailureMessages::REQUIRED_FIELD;
        }
        $success = $clientService->editMultiple($data);
        if($success){
            $results = ClientSuccessMessages::OK;
        }
        return $this->json($results);
    }
}
