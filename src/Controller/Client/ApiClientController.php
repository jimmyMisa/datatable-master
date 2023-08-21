<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\Client\ClientService;

class ApiClientController extends AbstractController
{
    #[Route('/api/liste-des-clients', name: 'api_list_client')]
    public function list(ClientService $clientService): Response
    {
        $clients = $clientService->listAction($request);
        return $this->json($clients);
    }
    #[Route('/api/creer-un-client', name: 'api_create_client')]
    public function create(ClientService $clientService, Request $request): Response
    {
        $contents = json_decode($request->getContent(), true);
        $results = $clientService->createAction($contents);
        return $this->json($results);
    }
    #[Route('/api/supprimer-un-client', name: 'api_remove_client')]
    public function remove(ClientService $clientService, Request $request): Response
    {
        $contents = json_decode($request->getContent(), true);
        $results = $clientService->removeAction($contents);
        return $this->json($results);
    }
    #[Route('/api/modifier-un-client', name: 'api_edit_client')]
    public function edit(ClientService $clientService, Request $request): Response
    {
        $contents = json_decode($request->getContent(), true);
        $results = $clientService->editAction($contents);
        return $this->json($results);
    }
    #[Route('/api/detail-d-un-client', name: 'api_get_client')]
    public function get(ClientService $clientService, Request $request): Response
    {
        $contents = json_decode($request->getContent(), true);
        $results = $clientService->getAction($contents);
        return $this->json($results);
    }
    #[Route('/api/suppression-multiple-de-client', name: 'api_remove_multiple_client')]
    public function removeMultiple(ClientService $clientService, Request $request): Response
    {
        $contents = json_decode($request->getContent(), true);
        $results = $clientService->removeMultiple($contents);
        return $this->json($results);
    }
    #[Route('/api/modification-multiple-de-client', name: 'api_edit_multiple_client')]
    public function editMultiple(ClientService $clientService, Request $request): Response
    {
        $contents = json_decode($request->getContent(), true);
        $results = $clientService->editMultiple($contents);
        return $this->json($results);
    }
}
