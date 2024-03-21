<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Cerfa\Cerfa12100_03;
use App\Cerfa\Cerfa12101_03;
use App\Cerfa\Usager;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    #[Route('/api/cerfa', name: 'api_cerfa')]
    public function apiCerfa(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        $usager = new Usager();
        $usager->setFromApiData($data);

        $pdf = $data['isMajeur'] == "1" ? new Cerfa12100_03($usager) : new Cerfa12101_03($usager);

        if ($data['type_demande_cni']) $pdf->setCNI();
        if ($data['type_demande_passeport']) $pdf->setPasseport();

        $pdf->setRaisonNationalite($data['raisonNationalite']);

        if ($pdf instanceof Cerfa12100_03 && isset($data['tutelle'])) {
            $pdf->setSituationTuteur((int)$data['tutelle']);
        }

        $pdf->addSecondPage();

        $pdf = base64_encode($pdf->Output('S', 'cerfa.pdf', true));


        return new JsonResponse($pdf);
    }
}
