<?php

namespace App\Cerfa;

use setasign\Fpdi\Fpdi;


class Cerfa
{
    protected Fpdi $pdf;
    protected $p1;
    protected $p2;
    protected $usager;
    protected $firstBoxX;

    public function __construct(Usager $usager)
    {
        $this->usager = $usager;
        $this->pdf = new Fpdi();
        $this->pdf->SetAutoPageBreak(false, 0);
        $this->firstBoxX = 0;
    }

    public function Output($dest = '', $name = '', $isUTF8 = false)
    {
        return $this->pdf->Output($dest, $name, $isUTF8);
    }

    protected function writeInBoxes(
        string $text,
        $x,
        $y,
        $totalCase = 39,
        int $nbLignes = 2,
        bool $largeGap = false,
        float $spacing = 1.07
    ) {
        $texts = explode(' ', $text);
        $this->pdf->SetFont('Arial', 'B', 10);
        $this->pdf->setXY($x, $y);

        $remainingCases = $totalCase;
        $currentLine = 1;
        foreach ($texts as $index => $word) {
            if ($remainingCases < strlen($texts[$index])) {
                if ($nbLignes - $currentLine > 0) {
                    $gap = $largeGap ? 8 : 6;
                    $this->pdf->SetY($this->pdf->GetY() + $gap);
                    $this->pdf->SetX($this->firstBoxX);
                    $currentLine++;
                    $remainingCases = 39;
                } else return;
            }
            $chars = mb_str_split(mb_strtoupper($word));
            foreach ($chars as $index => $l) {
                $l = mb_convert_encoding($l, 'ISO-8859-1', 'UTF-8');
                $this->pdf->Cell(3.8, 4.9, $l, 0, 0, 'C');
                $this->pdf->SetX($this->pdf->GetX() + $spacing);
                $remainingCases--;
            }
            $this->pdf->Cell(3.8, 4.9, ' ', 0, 0, 'C');
            $this->pdf->SetX($this->pdf->GetX() + $spacing);
            $remainingCases--;
        }
    }

    protected function writeText(
        string $text,
        $x,
        $y,
    ) {
        $text = mb_convert_encoding($text, 'ISO-8859-1', 'UTF-8');

        $this->pdf->SetFont('Arial', 'B', 10);
        $this->pdf->setXY($x, $y);

        $this->pdf->Cell(3.8, 4.9, $text, 0, 0, 'C');
    }

    protected function cross($x, $y, $big = false)
    {
        $size = $big ? 11 : 8;
        $w = $big ? 4.3 : 3.5;
        $this->pdf->SetFont('Arial', 'B', $size);
        $this->pdf->setXY($x, $y);
        $this->pdf->Cell($w, $w, 'X', 0, '', 'C');
    }

    public function addSecondPage()
    {
        $this->pdf->AddPage();
        $this->pdf->useTemplate($this->p2);

        $this->pdf->SetFont('Arial', 'B', 10);

        // Nom
        $this->writeText($this->usager->getNom(), 34, 105.5);

        // Prénom
        $this->writeText($this->usager->getPrenoms(), 48, 115);

        // Date de naissance 
        $date = $this->usager->getDateNaissance();
        $jour = $date->format('d');
        $mois = $date->format('m');
        $annee = $date->format('Y');
        $this->writeInBoxes($jour, 46.5, 125, 2, 1, false, -0.1);
        $this->writeInBoxes($mois, 56.9, 125, 2, 1, false, -0.1);
        $this->writeInBoxes($annee, 66.8, 125, 4, 1, false, -0.1);
    }

    /**
     * Get the value of pdf
     */
    public function getPdf()
    {
        return $this->pdf;
    }

    /**
     * Set the value of pdf
     *
     * @return  self
     */
    public function setPdf($pdf)
    {
        $this->pdf = $pdf;

        return $this;
    }
}
