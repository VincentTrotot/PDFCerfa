<?php

namespace App\Cerfa;

class Cerfa12101_03 extends Cerfa
{
    public function __construct(Usager $usager)
    {
        parent::__construct($usager);
        $this->pdf->setSourceFile('files/12101_03.pdf');
        $this->p1 = $this->pdf->importPage(1);
        $this->p2 = $this->pdf->importPage(2);

        $this->firstBoxX = 11.2;

        $this->pdf->AddPage();
        $this->pdf->useTemplate($this->p1);

        $this->writeUsager();
    }

    public function setCNI()
    {
        $this->cross(10.9, 17.9, true);
    }

    public function setPasseport()
    {
        $this->cross(144.6, 17.9, true);
    }

    public function setRaisonNationalite(int $i)
    {
        if ($i > 7) {
            throw new \ErrorException("Index de raison de nationalité française invalide.");
            return;
        }
        $x = 0;
        $y = 0;
        switch ($i) {
            case 1:
                $x = 95.5;
                $y = 250.8;
                break;
            case 2:
                $x = 95.5;
                $y = 257.7;
                break;
            case 3:
                $x = 95.5;
                $y = 264.2;
                break;
            case 4:
                $x = 193.2;
                $y = 247;
                break;
            case 5:
                $x = 193.2;
                $y = 253.8;
                break;
            case 6:
                $x = 193.2;
                $y = 260.2;
                break;
            case 7:
                $x = 193.2;
                $y = 264;
                break;
        }
        $this->cross($x, $y);
    }

    private function writeUsager()
    {
        $this->writeSexe();
        $this->writeNom();
        $this->writeNomDUsage();
        $this->writePrenoms();
        $this->writeTaille();
        $this->writeDateNaissance();
        $this->writeVilleNaissance();
        $this->writeDepartementNaissance();
        $this->writePaysNaissance();
        $this->writeAdresse();
        $this->writeTelephone();
        $this->writeCouleurDesYeux();

        $this->writeParents();
    }

    private function writeSexe()
    {
        $sexe = $this->usager->getSexe();
        if ($sexe == '') return;

        $x = strtoupper($sexe) == 'M' ? 171.7 : 147.2;

        $this->cross($x, 45.8);
    }

    private function writeNom()
    {
        $nom = $this->usager->getNom();
        if ($nom == '') return;

        $this->writeInBoxes($nom, 20.7, 51, 37, 2, true);
    }

    private function writeNomDUsage()
    {
        $nom = $this->usager->getNomDUsage();
        if ($nom == '') return;
        $origine = $this->usager->getOrigineNomDUsage();
        $mot = $this->usager->getMotAvantNomDUsage();

        // Nom d'usage
        $this->writeInBoxes($nom, 30.6, 64.8, 34);

        // Origine du nom d'usage
        $x = 0;
        switch ($origine) {
            case 'pere':
                $x = 96.1;
                break;
            case 'mere':
                $x = 72.5;
                break;
        }
        $this->cross($x, 77.2);
    }

    private function writePrenoms()
    {
        $prenoms = $this->usager->getPrenoms();
        if ($prenoms == '') return;

        $this->writeInBoxes($prenoms, 25.8, 81.6, 36);
    }

    private function writeTaille()
    {
        $taille = $this->usager->getTaille();
        if ($taille == 0) return;
        if ($taille < 100) {
            $taille = "0" . (string)$taille;
        }

        $this->writeInBoxes($taille, 20.3, 93, 3, 1);
    }

    private function writeDateNaissance()
    {
        $date = $this->usager->getDateNaissance();
        if ($date === null) return;

        $jour = $date->format('d');
        $mois = $date->format('m');
        $annee = $date->format('Y');

        $this->writeInBoxes($jour, 64, 93, 2, 1);
        $this->writeInBoxes($mois, 78.9, 93, 2, 1);
        $this->writeInBoxes($annee, 93.5, 93, 4, 1);
    }

    private function writeVilleNaissance()
    {
        $ville = $this->usager->getVilleNaissance();
        if ($ville == '') return;

        $this->writeInBoxes($ville, 123, 93, 16);
    }

    private function writeDepartementNaissance()
    {
        $departement = (string) $this->usager->getDepartementNaissance();
        if ($departement == "0") return;
        if (strlen($departement) == 1) {
            $departement = "0" . $departement;
            $this->writeInBoxes($departement, 59.2, 105);
        } elseif (strlen($departement) == 2) {
            $this->writeInBoxes($departement, 59.2, 105);
        } elseif (strlen($departement) == 3) {
            $this->writeInBoxes($departement, 54.5, 105);
        }
    }

    private function writePaysNaissance()
    {
        $pays = $this->usager->getPaysNaissance();
        if ($pays == '') return;

        $this->writeInBoxes($pays, 93.2, 105, 22, 1);
    }

    private function writeAdresse()
    {
        $adresses = $this->usager->getAdresses();
        if (empty($adresses)) {
            return;
        }

        foreach ($adresses as $index => $adresse) {
            $x = 25.4;
            $y = $index == 0 ? 116.5 : 149.5;
            $this->writeInBoxes($adresse->getLigne1(), $x, $y, 36, 1);

            $x = 11.2;
            $y = $index == 0 ? 122 : 155.2;
            $this->writeInBoxes($adresse->getLigne2(), $x, $y, 39, 1);

            $x = 29.7;
            $y = $index == 0 ? 128 : 161;
            $this->writeInBoxes($adresse->getCodePostal(), $x, $y, 5, 1);

            $x = 74;
            $y = $index == 0 ? 128 : 161;
            $this->writeInBoxes($adresse->getVille(), $x, $y, 26);
        }
    }

    private function writeTelephone()
    {
        $telephone = $this->usager->getTelephone();
        if ($telephone == '') return;

        $this->writeInBoxes($telephone, 30, 139, 10, 1);
    }

    private function writeCouleurDesYeux()
    {
        $couleur = $this->usager->getCouleurYeux();
        if ($couleur == '') return;

        $this->writeInBoxes($couleur, 132.3, 139, 14, 1);
    }

    private function writeParents()
    {
        foreach ($this->usager->getParents() as $index => $parent) {
            if ($index > 1) return;

            // Sexe
            if ($parent->getSexe() != '') {
                $x = $parent->getSexe() == strtoupper('M') ? 22.3 : 43.4;
                $y = $index == 0 ? 174.3 : 209.3;
                $this->cross($x, $y);
            }

            // Nom
            $nom = $parent->getNom();
            $y = $index == 0 ? 179.5 : 214.8;
            $this->writeInBoxes($nom, 35.2, $y, 34);

            // Prénoms
            $prenoms = $parent->getPrenoms();
            $y = $index == 0 ? 190.5 : 225.9;
            $this->writeInBoxes($prenoms, 40.4, $y, 33);

            // Date de naissance
            $date = $parent->getDateNaissance();
            if ($date !== null) {
                $jour = $date->format('d');
                $mois = $date->format('m');
                $annee = $date->format('Y');
                $y = $index == 0 ? 196.4 : 231.7;
                $this->writeInBoxes($jour, 25, $y, 2, 1);
                $this->writeInBoxes($mois, 39.4, $y, 2, 1);
                $this->writeInBoxes($annee, 54.1, $y, 4, 1);
            }

            // Lieu de naissance
            $lieu = $parent->getVilleNaissance();
            $y = $index == 0 ? 196.5 : 231.7;
            $this->writeInBoxes($lieu, 79, $y, 25);

            // Nationalité
            $nationalite = $parent->getNationalite();
            $y = $index == 0 ? 202.5 : 237.9;
            $this->writeInBoxes($nationalite, 74, $y, 26);
        }
    }

    public function addSecondPage()
    {
        parent::addSecondPage();
        $this->writeText($this->usager->getIdentiteTuteur(), 32, 163.5, 'L');
        if ($this->usager->getDateNaissanceTuteur() !== "" && $this->usager->getDateNaissanceTuteur() !== null) {

            $this->writeText($this->usager->getDateNaissanceTuteur()->format('d/m/Y'), 23, 180, 'L');
        }
        $this->writeText($this->usager->getAdresseLigne1Tuteur(), 23, 186.3, 'L');
        $this->writeText($this->usager->getAdresseLigne2Tuteur(), 23, 191.8, 'L');
        $this->writeText($this->usager->getNom(), 142, 155.5, 'L');
        $this->writeText($this->usager->getPrenoms(), 147.7, 161.5, 'L');

        switch ($this->usager->getQualiteTuteur()) {
            case 'F':
                $this->cross(50.7, 169.4);
                break;
            case 'M':
                $this->cross(65.5, 169.4);
                break;
            case 'tuteur':
                $this->cross(82.7, 169.4);
                break;
            case 'autre':
                $this->cross(70.3, 174.2);
                break;
        }

        $this->cross(98.5, 156);
    }
}
