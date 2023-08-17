<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiClientController extends AbstractController
{
    #[Route('/api/liste-des-clients', name: 'api_list_client')]
    public function index(): Response
    {
        return $this->json([]);
    }
    #[Route('/api/creer-un-client', name: 'api_create_client')]
    public function index(): Response
    {
        return $this->json([]);
    }
    #[Route('/api/supprimer-un-client', name: 'api_remove_client')]
    public function index(): Response
    {
        return $this->json([]);
    }
    #[Route('/api/modifier-un-client', name: 'api_edit_client')]
    public function index(): Response
    {
        return $this->json([]);
    }
    #[Route('/api/detail-d-un-client', name: 'api_get_client')]
    public function index(): Response
    {
        return $this->json([]);
    }
    #[Route('/api/suppression-multiple-de-client', name: 'api_remove_multiple_client')]
    public function index(): Response
    {
        return $this->json([]);
    }
    #[Route('/api/modification-multiple-de-client', name: 'api_edit_multiple_client')]
    public function index(): Response
    {
        return $this->json([]);
    }
}
