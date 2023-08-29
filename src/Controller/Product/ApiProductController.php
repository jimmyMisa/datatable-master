<?php

namespace App\Controller\Product;

use App\Service\Product\ProductService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Constant\Common\CommonFailureMessages;
use App\Constant\Common\CommonSuccessMessages;

class ApiProductController extends AbstractController
{
    #[Route('/api/liste-des-produits', name: 'api_list_product')]
    public function list(Request $request, ProductService $productService): Response
    {
        $data = json_decode($request->getContent(), true);
        $datatableData = $productService->listAction($data);
        $results = array_merge(CommonSuccessMessages::OK, $datatableData);
        return $this->json($results);
    }
    #[Route('/api/creer-un-produit', name: 'api_create_product')]
    public function create(ProductService $productService, Request $request)
    {
        $results = CommonFailureMessages::NOT_FOUND;
        $data = json_decode($request->request->get('query'), true);
        
        if (
            !isset($data["name"]) || 
            !isset($data["unit_price"]) || 
            $data["name"] === null || 
            $data["unit_price"] === null
        ) {
            $results = CommonFailureMessages::REQUIRED_FIELD;
            return $this->json($results);
        }


        $instance = $productService->createAction($data);
        if($instance){
            $results = CommonSuccessMessages::OK;
        }
        return $this->json($results);
    }
    #[Route('/api/supprimer-un-produit', name: 'api_remove_product')]
    public function remove(ProductService $productService, Request $request)
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

        $success = $productService->removeAction($data);
        if($success){
            $results = CommonSuccessMessages::OK;
        }
        return $this->json($results);
    }
    #[Route('/api/modifier-un-produit', name: 'api_edit_product')]
    public function edit(ProductService $productService, Request $request)
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
        
        $instance = $productService->editAction($data);
        if($instance){
            $results = CommonSuccessMessages::OK;
        }
        return $this->json($results);
    }
    #[Route('/api/detail-d-un-product', name: 'api_get_product')]
    public function get(ProductService $productService, Request $request)
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
        $results = $productService->getAction($data);
        return $this->json($results);
    }
    #[Route('/api/suppression-multiple-de-produit', name: 'api_remove_multiple_product')]
    public function removeMultiple(ProductService $productService, Request $request)
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
        
        $success = $productService->removeMultiple($data);
        if($success){
            $results = CommonSuccessMessages::OK;
        }
        return $this->json($results);
    }
    #[Route('/api/modification-multiple-de-produit', name: 'api_edit_multiple_product')]
    public function editMultiple(ProductService $productService, Request $request)
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
        $success = $productService->editMultiple($data);
        if($success){
            $results = CommonSuccessMessages::OK;
        }
        return $this->json($results);
    }
}
