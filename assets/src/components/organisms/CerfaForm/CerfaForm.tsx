import React from "react";

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
import globals from "../../../styles/modules/globals.module.css";
import { useCerfaFormStore } from "../../../hooks/useCerfaFormStore";
import { Tuteur } from "../../molecules/Tuteur/Tuteur";
import { Error } from "../../atoms/Error/Error";

export function CerfaForm({}) {
    const { cni, passeport, isMajeur, sexe } = useCerfaFormStore();

    const { state: adresse2, toggleState: handleAdresse2 } = useToggle();
    const { state: tutelle, toggleState: handleTutelle } = useToggle();

    const {
        data: pdf,
        handleSubmit,
        loading,
        error,
        resetData,
        resetError,
    } = useFetch("/api/cerfa");

    const title = getTitle(cni, passeport);
    useTitle({ title: title, deps: [cni, passeport] });

    return (
        <div className={styles.cerfaForm}>
            <h3>{title}</h3>
            <form onSubmit={handleSubmit}>
                <TypeDemande />
                <hr />
                <Personne />
                <hr />
                <div className={globals.flex}>
                    <Adresse count="0" className={globals.flexGrow} />
                    {!isMajeur && adresse2 && (
                        <Adresse count="1" className={globals.flexGrow} />
                    )}
                </div>
                {!isMajeur && (
                    <Checkbox
                        id="adresse2"
                        checked={adresse2}
                        onChange={handleAdresse2}
                        label="Ajouter une adresse"
                    />
                )}
                <hr />
                <div className={globals.flex}>
                    <Parent count="0" className={globals.flexGrow} />
                    <Parent count="1" className={globals.flexGrow} />
                </div>

                <hr />
                <RaisonNationalite sexe={sexe} isMajeur={isMajeur} />
                {isMajeur ? (
                    <Tutelle id="" checked={tutelle} onChange={handleTutelle} />
                ) : (
                    <Tuteur isAdresse2={adresse2}></Tuteur>
                )}

                <Button disabled={loading}>Valider la demande</Button>
            </form>
            <PDF pdf={pdf} erasePdf={resetData} />
            <Error error={error} resetError={resetError} />
        </div>
    );
}

const getTitle = (cni: boolean, passeport: boolean) => {
    let title = "Demande de ";
    if (cni && passeport) {
        title += "carte nationale d'identité et de passeport";
    } else if (cni) {
        title += "carte nationale d'identité";
    } else if (passeport) {
        title += "passeport";
    } else {
        title = "Choisissez un type de demande";
    }
    return title;
};
