<?php

namespace App\Cerfa;

use App\Cerfa\parents;

class Usager extends Personne
{

    private string $nomDUsage;
    private string $origineNomDUsage;
    private string $motAvantNomDUsage;
    private int $taille;
    private int $departementNaissance;
    private string $paysNaissance;
    private array $adresses;
    private string $telephone;
    private string $couleurYeux;

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

        $this->parents = array();
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

    public function getParent(int $index)
    {
        return ($index - 1 <= count($this->parents)) ? $this->parents[$index - 1] : new Personne();
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
}
