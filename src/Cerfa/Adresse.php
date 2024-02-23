<?php

namespace App\Cerfa;

class Adresse
{
    private string $ligne1;
    private string $ligne2;
    private string $codePostal;
    private string $ville;

    public function __construct()
    {
        $this->ligne1 = '';
        $this->ligne2 = '';
        $this->codePostal = 0;
        $this->ville = '';
    }

    /**
     * Get the value of ligne1
     */
    public function getLigne1()
    {
        return $this->ligne1;
    }

    /**
     * Set the value of ligne1
     *
     * @return  self
     */
    public function setLigne1($ligne1)
    {
        $this->ligne1 = $ligne1;

        return $this;
    }

    /**
     * Get the value of ligne2
     */
    public function getLigne2()
    {
        return $this->ligne2;
    }

    /**
     * Set the value of ligne2
     *
     * @return  self
     */
    public function setLigne2($ligne2)
    {
        $this->ligne2 = $ligne2;

        return $this;
    }

    /**
     * Get the value of codePostal
     */
    public function getCodePostal()
    {
        return $this->codePostal;
    }

    /**
     * Set the value of codePostal
     *
     * @return  self
     */
    public function setCodePostal($codePostal)
    {
        $this->codePostal = $codePostal;

        return $this;
    }

    /**
     * Get the value of ville
     */
    public function getVille()
    {
        return $this->ville;
    }

    /**
     * Set the value of ville
     *
     * @return  self
     */
    public function setVille($ville)
    {
        $this->ville = $ville;

        return $this;
    }
}
