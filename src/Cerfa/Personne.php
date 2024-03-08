<?php

namespace App\Cerfa;

use DateTime;

class Personne
{
    protected string $sexe;
    protected string $nom;
    protected string $prenoms;
    protected \DateTime|string|null $dateNaissance;
    protected string $villeNaissance;
    protected string $nationalite;

    public function __construct()
    {
        $this->sexe = '';
        $this->nom = '';
        $this->prenoms = '';
        $this->dateNaissance = NULL;
        $this->villeNaissance = '';
        $this->nationalite = '';
    }

    /**
     * Get the value of sexe
     */
    public function getSexe()
    {
        return $this->sexe;
    }

    /**
     * Set the value of sexe
     *
     * @return  self
     */
    public function setSexe($sexe)
    {
        $this->sexe = $sexe;

        return $this;
    }

    /**
     * Get the value of nom
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set the value of nom
     *
     * @return  self
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get the value of prenoms
     */
    public function getPrenoms()
    {
        return $this->prenoms;
    }

    /**
     * Set the value of prenoms
     *
     * @return  self
     */
    public function setPrenoms($prenoms)
    {
        $this->prenoms = $prenoms;

        return $this;
    }

    /**
     * Get the value of dateNaissance
     */
    public function getDateNaissance()
    {
        return $this->dateNaissance;
    }

    /**
     * Set the value of dateNaissance
     *
     * @return  self
     */
    public function setDateNaissance($dateNaissance)
    {
        if ($dateNaissance === '') {
            $dateNaissance = null;
        }
        if (is_string($dateNaissance)) {
            $dateNaissance = new \DateTime($dateNaissance);
        }

        $this->dateNaissance = $dateNaissance;

        return $this;
    }

    /**
     * Get the value of villeNaissance
     */
    public function getVilleNaissance()
    {
        return $this->villeNaissance;
    }

    /**
     * Set the value of villeNaissance
     *
     * @return  self
     */
    public function setVilleNaissance($villeNaissance)
    {
        $this->villeNaissance = $villeNaissance;

        return $this;
    }

    /**
     * Get the value of nationalite
     */
    public function getNationalite()
    {
        return $this->nationalite;
    }

    /**
     * Set the value of nationalite
     *
     * @return  self
     */
    public function setNationalite($nationalite)
    {
        $this->nationalite = $nationalite;

        return $this;
    }
}
