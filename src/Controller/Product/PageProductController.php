<?php

namespace App\Controller\Product;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageProductController extends AbstractController
{
    #[Route('/liste-des-produits', name: 'page_list_product')]
    public function index(): Response
    {
        return $this->render('product/product_table.html.twig');
    }
}
