<?php

namespace App\Controller;

use App\Cerfa\Adresse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Cerfa\Cerfa12100_03;
use App\Cerfa\Cerfa12101_03;
use App\Cerfa\Personne;
use App\Cerfa\Usager;
use DateTime;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {

        // Exemple de data
        $usager = new Usager();
        $usager->setSexe('f');
        $usager->setNom('Dupond');
        $usager->setNomDUsage('Dupont');
        $usager->setOrigineNomDUsage('epouse');
        $usager->setMotAvantNomDUsage('époux(se)');

        $usager->setPrenoms('Marie-Christine');
        $usager->setTaille(167);
        $usager->setDateNaissance((new DateTime())->setDate((int)'1980', (int)'11', (int)'18'));
        $usager->setVilleNaissance('Marseille');
        $usager->setDepartementNaissance(13);
        $usager->setPaysNaissance('France');

        $adresse1 = new Adresse();
        $adresse1->setLigne1('48 rue des accacias');
        $adresse1->setLigne2('Résidence croissant');
        $adresse1->setCodePostal(13140);
        $adresse1->setVille('Miramas');
        $usager->addAdresse($adresse1);

        $usager->setTelephone('9901020304');
        $usager->setCouleurYeux('Violets');

        $parent1 = new Personne();
        $parent1->setSexe('F');
        $parent1->setNom('Dulac');
        $parent1->setPrenoms('Mariane');
        $parent1->setDateNaissance((new DateTime())->setDate((int)'1956', (int)'03', (int)'01'));
        $parent1->setVilleNaissance('Algrange');
        $parent1->setNationalite('Française');

        $parent2 = new Personne();
        $parent2->setSexe('M');
        $parent2->setNom('Dupond');
        $parent2->setPrenoms('Jean Gilbert');
        $parent2->setDateNaissance((new DateTime())->setDate((int)'1955', (int)'07', (int)'12'));
        $parent2->setVilleNaissance('Strasbourg');
        $parent2->setNationalite('Française');

        $usager->addParent($parent1);
        $usager->addParent($parent2);

        $pdf = new Cerfa12100_03($usager);
        // $pdf = new Cerfa12101_03($usager);
        $pdf->setPasseport();
        $pdf->setRaisonNationalite(1);

        $pdf->addSecondPage();


        return new Response(
            $pdf->Output('', 'cerfa.pdf', true),
            Response::HTTP_OK,
            ['Content-Type' => 'application/pdf', 'charset' => 'utf-8']
        );
    }
}
