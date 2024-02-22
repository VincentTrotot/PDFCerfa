<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Fpdf\Fpdf;
use setasign\Fpdi\Fpdi;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        $pdf = new Fpdi();

        $pagecount = $pdf->setSourceFile('files/12100_03.pdf');
        $p1 = $pdf->importPage(1);
        $p2 = $pdf->importPage(2);

        $pdf->AddPage();
        $pdf->useTemplate($p1);

        // CNI
        $pdf->SetFont('Arial', 'B', 16);
        $pdf->setXY(9.5, 15);
        $pdf->Cell(100, 10, 'X');

        // HOMME
        $pdf->SetFont('Arial', 'B', 8);
        $pdf->setXY(196, 35);
        $pdf->Cell(100, 10, 'X');

        // NOM
        // $pdf->SetFont('Arial', '', 10);
        // $pdf->setXY(19.5, 41.5);
        // $pdf->Cell(100, 10, 'T   R   O   T   O   T');
        $this->writeInBoxes($pdf, 'TROTOT', 19.5, 44);






        $pdf->AddPage();
        $pdf->useTemplate($p2);


        return new Response(
            $pdf->Output('', 'cerfa.pdf', true),
            Response::HTTP_OK,
            ['Content-Type' => 'application/pdf']
        );
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'pdf' => $pdf->Output('', 'cerfa.pdf', true),
        ]);
    }

    private function writeInBoxes(Fpdi $pdf, string $text, $x, $y)
    {
        $pdf->SetFont('Arial', '', 10);
        $pdf->setXY($x, $y);
        $chars = str_split($text);
        foreach ($chars as $index => $l) {
            $pdf->Cell(4, 5, $l);
            $pdf->SetX($pdf->GetX() + .9);
            # code...
        }
    }
}

class cerfa12100_03 extends Fpdi
{
    // private $pdf;
    private $p1;
    private $p2;

    public function __construct()
    {
        $this->setSourceFile('files/12100_03.pdf');
        $this->p1 = $this->importPage(1);
        $this->p2 = $this->importPage(2);

        $this->AddPage();
        $this->useTemplate($this->p1);
    }
}
