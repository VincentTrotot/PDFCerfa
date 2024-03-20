import React from "react";

import { useState } from "react";

import { useDemande } from "../../../hooks/useDemande";
import { useToggle } from "../../../hooks/useToggle";
import { useTitle } from "../../../hooks/useTitle";

import { Checkbox } from "../../atoms/Checkbox/Checkbox";
import { PDF } from "../../atoms/PDF/PDF";

import { TypeDemande } from "../../molecules/TypeDemande/TypeDemande";
import { Adresse } from "../../molecules/Adresse/Adresse";
import { Parent } from "../../molecules/Parent/Parent";
import { RaisonNationalite } from "../../molecules/RaisonNationalite/RaisonNationalite";
import { Tutelle } from "../../molecules/Tutelle/Tutelle";

import { Personne } from "../Personne/Personne";
import { useFetch } from "../../../hooks/useFetch";
import { Button } from "../../atoms/Button/Button";

import styles from "./CerfaForm.module.css";

export function CerfaForm({}) {
    const [sexe, setSexe] = useState<"M" | "F">("M");

    const { demande, setType, setMajeur } = useDemande();
    const { state: adresse2, toggleState: handleAdresse2 } = useToggle();
    const { state: tutelle, toggleState: handleTutelle } = useToggle();
    const {
        data: pdf,
        handleSubmit,
        loading,
        eraseData,
    } = useFetch("/api/cerfa");

    const title = `Demande de ${
        demande.type == "cni" ? "carte nationale d'identité" : "passeport"
    }`;
    useTitle({ title: title, deps: [demande.type] });

    return (
        <div className={styles.cerfaForm}>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <TypeDemande
                    demande={demande}
                    setType={setType}
                    setMajeur={setMajeur}
                />
                <hr />
                <Personne demande={demande} setSexe={setSexe} />
                <hr />
                <Adresse count="0" />
                {!demande.isMajeur && (
                    <>
                        <hr />
                        <Checkbox
                            id="adresse2"
                            checked={adresse2}
                            onChange={handleAdresse2}
                            label="Ajouter une adresse"
                        />
                        {adresse2 && <Adresse count="1" />}
                    </>
                )}
                <hr />
                <Parent count="0" />
                <hr />
                <Parent count="1" />
                <hr />
                <RaisonNationalite sexe={sexe} isMajeur={demande.isMajeur} />
                <Tutelle
                    id=""
                    isMajeur={demande.isMajeur}
                    checked={tutelle}
                    onChange={handleTutelle}
                />
                <Button disabled={loading}>Valider la demande</Button>
            </form>
            <PDF pdf={pdf} erasePdf={eraseData} />
        </div>
    );
}
