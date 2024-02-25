<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Cerfa\Cerfa12100_03;
use App\Cerfa\Cerfa12101_03;
use App\Cerfa\Usager;
use App\Form\UsagerType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(Request $request, SessionInterface $session): Response
    {
        $usager = new Usager();
        $form = $this->createForm(UsagerType::class, $usager, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $usager = $form->getData();
            $usager->addParent($form['parent1']->getData());
            $usager->addParent($form['parent2']->getData());
            $usager->addAdresse($form['adresse']->getData());




            $pdf = new Cerfa12100_03($usager);
            $pdf->setPasseport();
            $pdf->setRaisonNationalite(1);

            $pdf->addSecondPage();

            $session->set('usager', serialize($usager));


            return $this->redirectToRoute('app_cerfa');
        }

        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'form' => $form->createView(),
        ]);
    }

    #[Route('/cerfa', name: 'app_cerfa')]
    public function cerfa(SessionInterface $session): Response
    {
        $usager = unserialize(
            $session->get('usager')
        );
        //$pdf = $request->query->get('pdf');
        $pdf = new Cerfa12100_03($usager);
        $pdf->setPasseport();
        $pdf->setRaisonNationalite(1);

        $pdf->addSecondPage();
        $pdf = base64_encode($pdf->Output('S', 'cerfa.pdf', true));

        $session->remove('usager');


        return $this->render('home/usager.html.twig', [
            'controller_name' => 'HomeController',
            'usager' => $usager,
            'pdf' => $pdf
        ]);

        // return new Response(
        //     $pdf->Output('', 'cerfa.pdf', true),
        //     Response::HTTP_OK,
        //     ['Content-Type' => 'application/pdf', 'charset' => 'utf-8']
        // );
    }
}
