<?php

namespace App\Controller\Order;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageOrderController extends AbstractController
{
    #[Route('/liste-des-commandes', name: 'page_list_order')]
    public function index(): Response
    {
        return $this->render('order/order_table.html.twig');
    }
}
