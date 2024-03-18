<?php

namespace App\Cerfa;

class Cerfa12100_03 extends Cerfa
{

    public function __construct(Usager $usager)
    {
        parent::__construct($usager);
        $this->pdf->setSourceFile('files/12100_03.pdf');
        $this->p1 = $this->pdf->importPage(1);
        $this->p2 = $this->pdf->importPage(2);


        $this->firstBoxX = 10.2;

        $this->pdf->AddPage();
        $this->pdf->useTemplate($this->p1);

        $this->writeUsager();
    }

    public function setCNI()
    {
        $this->cross(10.1, 17.8, true);
    }

    public function setPasseport()
    {
        $this->cross(144.6, 17.9, true);
    }

    public function setRaisonNationalite(int $i)
    {
        if ($i > 11) {
            throw new \ErrorException("Index de raison de nationalité française invalide.");
            return;
        }
        $x = 0;
        $y = 0;
        switch ($i) {
            case 1:
                $x = 95.5;
                $y = 232.8;
                break;
            case 2:
                $x = 95.5;
                $y = 240.2;
                break;
            case 3:
                $x = 95.5;
                $y = 247.8;
                break;
            case 4:
                $x = 95.5;
                $y = 255.3;
                break;
            case 5:
                $x = 193.2;
                $y = 228;
                break;
            case 6:
                $x = 193.2;
                $y = 232.2;
                break;
            case 7:
                $x = 193.2;
                $y = 236;
                break;
            case 8:
                $x = 193.2;
                $y = 240.1;
                break;
            case 9:
                $x = 193.2;
                $y = 244.2;
                break;
            case 10:
                $x = 193.2;
                $y = 251.4;
                break;
            case 11:
                $x = 193.2;
                $y = 255.4;
                break;
        }
        $this->cross($x, $y);
    }

    public function setSituationTuteur(int $i)
    {
        if ($i > 2) {
            throw new \ErrorException("Index de situation du tuteur invalide.");
            return;
        }
        $x = 131.3;
        $y = 0;
        switch ($i) {
            case 1:
                $y = 274.4;
                break;
            case 2:
                $y = 278.8;
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

        $x = strtoupper($sexe) == 'M' ? 196 : 176.5;

        $this->cross($x, 38.4);
    }

    private function writeNom()
    {
        $nom = $this->usager->getNom();
        if ($nom == '') return;

        $this->writeInBoxes($nom, 19.5, 44, 37, 2, true);
    }

    private function writeNomDUsage()
    {
        $nom = $this->usager->getNomDUsage();
        if ($nom == '') return;
        $origine = $this->usager->getOrigineNomDUsage();
        $mot = $this->usager->getMotAvantNomDUsage();

        // Nom d'usage
        $this->writeInBoxes($nom, 34.5, 57.7, 34);

        // Origine du nom d'usage
        $x = 0;
        switch ($origine) {
            case 'pere':
                $x = 83.5;
                break;
            case 'mere':
                $x = 106.2;
                break;
            case 'epoux':
                $x = 135.6;
                break;
            case 'epouse':
                $x = 166.2;
                break;
        }
        $this->cross($x, 70);

        // Faire apparaitre un mot avant le nom d'usage ?
        $x = $mot !== '' ? 98 : 112;
        $this->pdf->setXY($x, 74.4);
        $this->pdf->Cell(3.5, 3.5, 'X');

        // Si oui, lequel ?
        if (!($mot !== '')) {
            return;
        }

        switch ($mot) {
            case 'epoux(se)':
                $x = 160;
                break;

            case 'veuf(ve)':
                $x = 179.7;
                break;
        }

        $this->cross($x, 74.8);
    }

    private function writePrenoms()
    {
        $prenoms = $this->usager->getPrenoms();
        if ($prenoms == '') return;

        $this->writeInBoxes($prenoms, 24.8, 79.5, 36);
    }

    private function writeTaille()
    {
        $taille = $this->usager->getTaille();
        if ($taille == 0) return;
        if ($taille < 100) {
            $taille = "0" + (string)$taille;
        }

        $this->writeInBoxes($taille, 19.5, 90.8, 3, 1);
    }

    private function writeDateNaissance()
    {
        $date = $this->usager->getDateNaissance();
        if ($date === NULL) return;

        $jour = $date->format('d');
        $mois = $date->format('m');
        $annee = $date->format('Y');

        $this->writeInBoxes($jour, 63.6, 90.8, 2, 1);
        $this->writeInBoxes($mois, 78.3, 90.8, 2, 1);
        $this->writeInBoxes($annee, 93, 90.8, 4, 1);
    }

    private function writeVilleNaissance()
    {
        $ville = $this->usager->getVilleNaissance();
        if ($ville == '') return;

        $this->writeInBoxes($ville, 122.4, 90.8, 16);
    }

    private function writeDepartementNaissance()
    {
        $departement = (string) $this->usager->getDepartementNaissance();
        if ($departement == "0") return;
        if (strlen($departement) == 1) {
            $departement = "0" . $departement;
            $this->writeInBoxes($departement, 58.7, 102.5);
        } elseif (strlen($departement) == 2) {
            $this->writeInBoxes($departement, 58.7, 102.5);
        } elseif (strlen($departement) == 3) {
            $this->writeInBoxes($departement, 54, 102.5);
        }
    }

    private function writePaysNaissance()
    {
        $pays = $this->usager->getPaysNaissance();
        if ($pays == '') return;

        $this->writeInBoxes($pays, 92.6, 102.5, 22, 1);
    }

    private function writeAdresse()
    {
        $adresses = $this->usager->getAdresses();
        if (empty($adresses)) {
            return;
        }

        $adresse = $adresses[0];
        $this->writeInBoxes($adresse->getLigne1(), 24.8, 114.3, 36, 1);
        $this->writeInBoxes($adresse->getLigne2(), 10, 119.8, 39, 1);
        $this->writeInBoxes($adresse->getCodePostal(), 29.7, 125.9, 5, 1);
        $this->writeInBoxes($adresse->getVille(), 73.6, 125.9, 26);
    }

    private function writeTelephone()
    {
        $telephone = $this->usager->getTelephone();
        if ($telephone == '') return;

        $this->writeInBoxes($telephone, 29.7, 137.3, 10, 1);
    }

    private function writeCouleurDesYeux()
    {
        $couleur = $this->usager->getCouleurYeux();
        if ($couleur == '') return;

        $this->writeInBoxes($couleur, 132.3, 137.3, 14, 1);
    }

    private function writeParents()
    {
        foreach ($this->usager->getParents() as $index => $parent) {
            if ($index > 1) return;

            // Sexe
            if ($parent->getSexe() != '') {
                $x = $parent->getSexe() == strtoupper('M') ? 21.8 : 42.5;
                $y = $index == 0 ? 144.3 : 184.3;
                $this->cross($x, $y);
            }

            // Nom
            $nom = $parent->getNom();
            $y = $index == 0 ? 148.7 : 189.5;
            $this->writeInBoxes($nom, 34.4, $y, 34);

            // Prénoms
            $prenoms = $parent->getPrenoms();
            $y = $index == 0 ? 160.5 : 200.9;
            $this->writeInBoxes($prenoms, 39.5, $y, 33);

            // Date de naissance
            $date = $parent->getDateNaissance();
            if ($date !== null) {
                $jour = $date->format('d');
                $mois = $date->format('m');
                $annee = $date->format('Y');
                $y = $index == 0 ? 172 : 212.7;
                $this->writeInBoxes($jour, 25, $y, 2, 1);
                $this->writeInBoxes($mois, 39.4, $y, 2, 1);
                $this->writeInBoxes($annee, 54.1, $y, 4, 1);
            }

            // Lieu de naissance
            $lieu = $parent->getVilleNaissance();
            $y = $index == 0 ? 172 : 212.7;
            $this->writeInBoxes($lieu, 78.2, $y, 25);

            // Nationalité
            $nationalite = $parent->getNationalite();
            $y = $index == 0 ? 177.8 : 218.4;
            $this->writeInBoxes($nationalite, 73.6, $y, 26);
        }
    }
}
