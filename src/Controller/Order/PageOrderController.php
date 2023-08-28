<?php

namespace App\Controller\Order;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\Client\ClientMoreService;
use App\Service\Product\ProductMoreService;

class PageOrderController extends AbstractController
{
    #[Route('/liste-des-commandes', name: 'page_list_order')]
    public function index(
        ClientMoreService $clientMoreService,
        ProductMoreService $productMoreService,
    ): Response
    {
        $clients = $clientMoreService->clients();
        $products = $productMoreService->products();
        return $this->render('order/order_table.html.twig',
        [
            "client_options" => $clients,
            "product_options" => $products
        ]);
    }
}
