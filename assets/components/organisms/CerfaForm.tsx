import React from "react";
import axios from "axios";

import { FormEvent, useState } from "react";

import { dataToObject } from "../../utils/dataToObject";
import { useDemande } from "../../hooks/useDemande";
import { useToggle } from "../../hooks/useToggle";
import { useTitle } from "../../hooks/useTitle";

import { Checkbox } from "../atoms/Checkbox";
import { PDF } from "../atoms/PDF";

import { TypeDemande } from "../molecules/TypeDemande";
import { Adresse } from "../molecules/Adresse";
import { Parent } from "../molecules/Parent";
import { RaisonNationalite } from "../molecules/RaisonNationalite";
import { Tutelle } from "../molecules/Tutelle";

import { Personne } from "./Personne";

export function CerfaForm({}) {
    const [sexe, setSexe] = useState<"M" | "F">("M");
    const [pdf, setPdf] = useState("");

    const { demande, setType, setMajeur } = useDemande();
    const { state: adresse2, toggleState: handleAdresse2 } = useToggle();
    const { state: tutelle, toggleState: handleTutelle } = useToggle();

    const title = `Demande de ${
        demande.type == "cni" ? "carte nationale d'identité" : "passeport"
    }`;
    useTitle({ title: title, deps: [demande.type] });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!(e.target instanceof HTMLFormElement)) {
            return;
        }
        const values = new FormData(e.target);
        let data = {} as { [key: string]: FormDataEntryValue };
        values.forEach((v, k) => {
            data[k] = v;
        });

        const response = await axios.post("/api/cerfa", dataToObject(data));
        if (response.status == 200) {
            setPdf(response.data);
        }
    };

    return (
        <div className="container">
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
                    </>
                )}
                {!demande.isMajeur && adresse2 && <Adresse count="1" />}
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
                <div className="d-grid gap-2">
                    <input
                        type="submit"
                        value="Valider la demande"
                        className="btn btn-primary"
                    />
                </div>
            </form>

            <PDF pdf={pdf} />
        </div>
    );
}
