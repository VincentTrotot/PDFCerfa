<?php

namespace App\Cerfa;

class Usager extends Personne
{

    private string|null $nomDUsage;
    private string|null $origineNomDUsage;
    private string|null $motAvantNomDUsage;
    private int|null $taille;
    private string|null $departementNaissance;
    private string|null $paysNaissance;
    private array|null $adresses;
    private string|null $telephone;
    private string|null $couleurYeux;
    private string|null $identiteTuteur;
    private string|null $qualiteTuteur;
    private string|null $adresseLigne1Tuteur;
    private string|null $adresseLigne2Tuteur;
    private \DateTime|string|null $dateNaissanceTuteur;

    private array $parents;

    public function __construct()
    {
        $this->nomDUsage = '';
        $this->origineNomDUsage = '';
        $this->motAvantNomDUsage = '';
        $this->taille = 0;
        $this->departementNaissance = 0;
        $this->paysNaissance = '';
        $this->adresses = array();
        $this->telephone = '';
        $this->couleurYeux = '';
        $this->identiteTuteur = '';
        $this->qualiteTuteur = '';
        $this->adresseLigne1Tuteur = '';
        $this->adresseLigne2Tuteur = '';
        $this->dateNaissanceTuteur = '';

        $this->parents = array();
    }



    public function setFromApiData($data)
    {
        $usager = $data['usager'];
        $this->setSexe(isset($usager['sexe']) ? $usager['sexe'] : '');
        $this->setNom(isset($usager['nom']) ? $this->capitalizeFirstLetter($usager['nom']) : '');
        $this->setNomDUsage(isset($usager['nomDUsage']) ? $usager['nomDUsage'] : '');
        $this->setOrigineNomDUsage(isset($usager['origineNomDUsage']) ? $usager['origineNomDUsage'] : '');
        $motAvantNomDUsage = '';
        if (isset($usager['motAvantNomDUsage']) && $usager['motAvantNomDUsage'] !== 'Aucun') {
            $motAvantNomDUsage = $usager['motAvantNomDUsage'];
        }
        $this->setMotAvantNomDUsage($motAvantNomDUsage);

        $this->setPrenoms(isset($usager['prenoms']) ? $this->capitalizeFirstLetter($usager['prenoms']) : '');
        $this->setTaille(isset($usager['taille']) ? (int)$usager['taille'] : '');
        $this->setDateNaissance(isset($usager['dateNaissance']) ? $usager['dateNaissance'] : '');
        $this->setVilleNaissance(isset($usager['villeNaissance']) ? $usager['villeNaissance'] : '');
        $this->setDepartementNaissance(isset($usager['departementNaissance']) ? $usager['departementNaissance'] : '');
        $this->setPaysNaissance(isset($usager['paysNaissance']) ? $usager['paysNaissance'] : '');

        $adresse1 = new Adresse();
        $_adresse1 = $usager['adresses'][0];
        $adresse1->setLigne1(isset($_adresse1['ligne1']) ? $_adresse1['ligne1'] : '');
        $adresse1->setLigne2(isset($_adresse1['ligne2']) ? $_adresse1['ligne2'] : '');
        $adresse1->setCodePostal(isset($_adresse1['codePostal']) ? $_adresse1['codePostal'] : '');
        $adresse1->setVille(isset($_adresse1['ville']) ? $_adresse1['ville'] : '');
        $this->addAdresse($adresse1);

        if (isset($data['adresse2']) && $data['adresse2'] == "on") {
            $adresse2 = new Adresse();
            $_adresse2 = $usager['adresses'][1];
            $adresse2->setLigne1(isset($_adresse2['ligne1']) ? $_adresse2['ligne1'] : '');
            $adresse2->setLigne2(isset($_adresse2['ligne2']) ? $_adresse2['ligne2'] : '');
            $adresse2->setCodePostal(isset($_adresse2['codePostal']) ? $_adresse2['codePostal'] : '');
            $adresse2->setVille(isset($_adresse2['ville']) ? $_adresse2['ville'] : '');
            $this->addAdresse($adresse2);
        }

        $this->setTelephone(isset($usager['telephone']) ? $usager['telephone'] : '');
        $this->setCouleurYeux(isset($usager['couleurYeux']) ? $usager['couleurYeux'] : '');


        $parent1 = new Personne();
        $_parent1 = $usager['parents'][0];
        $parent1->setSexe(isset($_parent1['sexe']) ? $_parent1['sexe'] : '');
        $parent1->setNom(isset($_parent1['nom']) ? $_parent1['nom'] : '');
        $parent1->setPrenoms(isset($_parent1['prenoms']) ? $_parent1['prenoms'] : '');
        $parent1->setDateNaissance(isset($_parent1['dateNaissance']) ? $_parent1['dateNaissance'] : '');
        $parent1->setVilleNaissance(isset($_parent1['villeNaissance']) ? $_parent1['villeNaissance'] : '');
        $parent1->setNationalite(isset($_parent1['nationalite']) ? $_parent1['nationalite'] : '');

        $parent2 = new Personne();
        $_parent2 = $usager['parents'][1];
        $parent2->setSexe(isset($_parent2['sexe']) ? $_parent2['sexe'] : '');
        $parent2->setNom(isset($_parent2['nom']) ? $_parent2['nom'] : '');
        $parent2->setPrenoms(isset($_parent2['prenoms']) ? $_parent2['prenoms'] : '');
        $parent2->setDateNaissance(isset($_parent2['dateNaissance']) ? $_parent2['dateNaissance'] : '');
        $parent2->setVilleNaissance(isset($_parent2['villeNaissance']) ? $_parent2['villeNaissance'] : '');
        $parent2->setNationalite(isset($_parent2['nationalite']) ? $_parent2['nationalite'] : '');

        $this->addParent($parent1);
        $this->addParent($parent2);

        if (isset($data['representant_legal'])) {
            if ($data['representant_legal'] == "parent1") {
                $this->setIdentiteTuteur($this->capitalizeFirstLetter($this->getParent(1)->getNom() . ' ' . $this->getParent(1)->getPrenoms()));
                $this->setDateNaissanceTuteur($this->getParent(1)->getDateNaissance());
                $this->setQualiteTuteur($this->getParent(1)->getSexe());
            } elseif ($data['representant_legal'] == "parent2") {
                $this->setIdentiteTuteur($this->getParent(2)->getNom() . ' ' . $this->getParent(2)->getPrenoms());
                $this->setDateNaissanceTuteur($this->getParent(2)->getDateNaissance());
                $this->setQualiteTuteur($this->getParent(2)->getSexe());
            } else {
                $this->setQualiteTuteur($data['representant_legal']);

                $this->setIdentiteTuteur($data['usager']['tuteur']['nom'] . ' ' . $data['usager']['tuteur']['prenoms']);
                $this->setDateNaissanceTuteur(new \DateTime($data['usager']['tuteur']['dateNaissance']));
            }

            if (isset($data['representant_legal_adresse'])) {
                if ($data['representant_legal_adresse'] == "adresse1") {
                    $this->setAdresseLigne1Tuteur($this->getAdresses()[0]->getLigne1() . ' - ' . $this->getAdresses()[0]->getLigne2());
                    $this->setAdresseLigne2Tuteur($this->getAdresses()[0]->getCodePostal() . ' ' . $this->getAdresses()[0]->getVille());
                } elseif ($data['representant_legal_adresse'] == "adresse2") {
                    $this->setAdresseLigne1Tuteur($this->getAdresses()[1]->getLigne1() . ' - ' . $this->getAdresses()[1]->getLigne2());
                    $this->setAdresseLigne2Tuteur($this->getAdresses()[1]->getCodePostal() . ' ' . $this->getAdresses()[1]->getVille());
                } elseif ($data['representant_legal_adresse'] == "adresseAutre") {
                    $this->setAdresseLigne1Tuteur($data['usager']['adresses']['tuteur']['ligne1']);
                    $this->setAdresseLigne2Tuteur($data['usager']['adresses']['tuteur']['codePostal'] . ' ' . $data['usager']['adresses']['tuteur']['ville']);
                }
            }
        }
    }

    /**
     * Get the value of nomDUsage
     */
    public function getNomDUsage()
    {
        return $this->nomDUsage;
    }

    /**
     * Set the value of nomDUsage
     *
     * @return  self
     */
    public function setNomDUsage($nomDUsage)
    {
        $this->nomDUsage = $nomDUsage;

        return $this;
    }

    /**
     * Get the value of origineNomDUsage
     */
    public function getOrigineNomDUsage()
    {
        return $this->origineNomDUsage;
    }

    /**
     * Set the value of origineNomDUsage
     *
     * @return  self
     */
    public function setOrigineNomDUsage($origineNomDUsage)
    {
        $this->origineNomDUsage = $origineNomDUsage;

        return $this;
    }



    /**
     * Get the value of taille
     */
    public function getTaille()
    {
        return $this->taille;
    }

    /**
     * Set the value of taille
     *
     * @return  self
     */
    public function setTaille($taille)
    {
        $this->taille = $taille;

        return $this;
    }



    /**
     * Get the value of departementNaissance
     */
    public function getDepartementNaissance()
    {
        return $this->departementNaissance;
    }

    /**
     * Set the value of departementNaissance
     *
     * @return  self
     */
    public function setDepartementNaissance($departementNaissance)
    {
        $this->departementNaissance = $departementNaissance;

        return $this;
    }

    /**
     * Get the value of telephone
     */
    public function getTelephone()
    {
        return $this->telephone;
    }

    /**
     * Set the value of telephone
     *
     * @return  self
     */
    public function setTelephone($telephone)
    {
        $this->telephone = $telephone;

        return $this;
    }

    /**
     * Get the value of couleurYeux
     */
    public function getCouleurYeux()
    {
        return $this->couleurYeux;
    }

    /**
     * Set the value of couleurYeux
     *
     * @return  self
     */
    public function setCouleurYeux($couleurYeux)
    {
        $this->couleurYeux = $couleurYeux;

        return $this;
    }

    /**
     * Get the value of paysNaissance
     */
    public function getPaysNaissance()
    {
        return $this->paysNaissance;
    }

    /**
     * Set the value of paysNaissance
     *
     * @return  self
     */
    public function setPaysNaissance($paysNaissance)
    {
        $this->paysNaissance = $paysNaissance;

        return $this;
    }

    /**
     * Get the value of parents
     */
    public function getParents()
    {
        return $this->parents;
    }

    /**
     * Set the value of parents
     *
     * @return  self
     */
    public function addParent($parent)
    {
        array_push($this->parents, $parent);

        return $this;
    }

    public function getParent(int $index): Personne
    {
        return ($index - 1 <= count($this->parents)) ? $this->parents[$index - 1] : new Personne();
    }

    public function setParents($parents)
    {
        $this->parents = $parents;

        return $this;
    }

    /**
     * Get the value of motAvantNomDUsage
     */
    public function getMotAvantNomDUsage()
    {
        return $this->motAvantNomDUsage;
    }

    /**
     * Set the value of motAvantNomDUsage
     *
     * @return  self
     */
    public function setMotAvantNomDUsage($motAvantNomDUsage)
    {
        $this->motAvantNomDUsage = $motAvantNomDUsage;

        return $this;
    }

    /**
     * Get the value of adresses
     */
    public function getAdresses()
    {
        return $this->adresses;
    }

    /**
     * Set the value of adresses
     *
     * @return  self
     */
    public function addAdresse($adresse)
    {
        array_push($this->adresses, $adresse);

        return $this;
    }

    public function setAdresses(array $adresses)
    {
        $this->adresses = $adresses;

        return $this;
    }

    /**
     * Get the value of identiteTuteur
     */
    public function getIdentiteTuteur()
    {
        return $this->identiteTuteur;
    }

    /**
     * Set the value of identiteTuteur
     *
     * @return  self
     */
    public function setIdentiteTuteur($identiteTuteur)
    {
        $this->identiteTuteur = $identiteTuteur;

        return $this;
    }

    /**
     * Get the value of qualiteTuteur
     */
    public function getQualiteTuteur()
    {
        return $this->qualiteTuteur;
    }

    /**
     * Set the value of qualiteTuteur
     *
     * @return  self
     */
    public function setQualiteTuteur($qualiteTuteur)
    {
        $this->qualiteTuteur = $qualiteTuteur;

        return $this;
    }

    /**
     * Get the value of adresseLigne1Tuteur
     */
    public function getAdresseLigne1Tuteur()
    {
        return $this->adresseLigne1Tuteur;
    }

    /**
     * Set the value of adresseLigne1Tuteur
     *
     * @return  self
     */
    public function setAdresseLigne1Tuteur($adresseLigne1Tuteur)
    {
        $this->adresseLigne1Tuteur = $adresseLigne1Tuteur;

        return $this;
    }

    /**
     * Get the value of adresseLigne2Tuteur
     */
    public function getAdresseLigne2Tuteur()
    {
        return $this->adresseLigne2Tuteur;
    }

    /**
     * Set the value of adresseLigne2Tuteur
     *
     * @return  self
     */
    public function setAdresseLigne2Tuteur($adresseLigne2Tuteur)
    {
        $this->adresseLigne2Tuteur = $adresseLigne2Tuteur;

        return $this;
    }

    /**
     * Get the value of dateNaissanceTuteur
     */
    public function getDateNaissanceTuteur()
    {
        return $this->dateNaissanceTuteur;
    }

    /**
     * Set the value of dateNaissanceTuteur
     *
     * @return  self
     */
    public function setDateNaissanceTuteur($dateNaissanceTuteur)
    {
        $this->dateNaissanceTuteur = $dateNaissanceTuteur;

        return $this;
    }

    private function capitalizeFirstLetter($string)
    {
        // Capitalisation de chaque mot après séparation par espace
        $words = preg_split('/\s/', $string);
        $capitalizedWords = array_map('ucwords', $words);
        $capitalizedString = implode(' ', $capitalizedWords);

        // Capitalisation de chaque mot après séparation par tiret
        $words = preg_split('/-/', $string);
        $capitalizedWords = array_map('ucwords', $words);
        $capitalizedString = implode('-', $capitalizedWords);

        return $capitalizedString;
    }
}
