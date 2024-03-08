import React, { FormEvent, useState } from "react";
import ReactDOM from "react-dom/client";
import { TypeDemande, useDemande } from "./components/TypeDemande";
import { Personne } from "./components/Personne";
import { Adresse } from "./components/Adresse";
import { Parent } from "./components/Parent";
import { Tutelle } from "./components/Tutelle";
import axios from "axios";

import "./styles/app.css";
import { RaisonNationalite } from "./components/RaisonNationalite";

function CerfaForm({}) {
    const { demande, setType, setMajeur } = useDemande();
    const [sexe, setSexe] = useState("M" as "M" | "F");
    const [adresse2, setAdresse2] = useState(false);
    const [tutelle, setTutelle] = useState(false);
    const [pdf, setPdf] = useState("");

    const handleTutelle = () => {
        setTutelle(!tutelle);
    };

    const handleAdresse2 = () => {
        setAdresse2(!adresse2);
    };

    const handleSexe = (sexe: "M" | "F") => {
        setSexe(sexe);
    };

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
        <>
            <h1>
                Demande de{" "}
                {demande.type == "cni"
                    ? "carte nationale d'identité"
                    : "passeport"}
            </h1>
            <form onSubmit={handleSubmit}>
                <TypeDemande
                    demande={demande}
                    setType={setType}
                    setMajeur={setMajeur}
                />
                <hr />
                <Personne demande={demande} setSexe={handleSexe} />
                <hr />
                <Adresse count="0" />
                {!demande.isMajeur && (
                    <p>
                        <label htmlFor="adresse2">
                            <input
                                type="checkbox"
                                name="adresse2"
                                id="adresse2"
                                checked={adresse2}
                                onChange={handleAdresse2}
                            />
                            Ajouter une adresse
                        </label>
                    </p>
                )}
                {!demande.isMajeur && adresse2 && <Adresse count="1" />}
                <hr />
                <Parent count="0" />
                <Parent count="1" />
                <RaisonNationalite sexe={sexe} isMajeur={demande.isMajeur} />
                {demande.isMajeur && (
                    <p>
                        <label htmlFor="isTutelle">
                            <input
                                type="checkbox"
                                name="isTutelle"
                                id="isTutelle"
                                checked={tutelle}
                                onChange={handleTutelle}
                            />
                            Le demandeur est un majeur en tutelle
                        </label>
                    </p>
                )}
                {demande.isMajeur && tutelle && <Tutelle />}
                <input type="submit" value="Valider" />
            </form>
            {pdf !== "" && (
                <>
                    <object
                        data={"data:application/pdf;base64," + pdf}
                        type="application/pdf"
                        width="100%"
                        style={{ aspectRatio: "210/297" }}
                    ></object>
                    <p>
                        <a
                            href={"data:application/pdf;base64," + pdf}
                            target="_blank"
                        >
                            Voir le PDF
                        </a>
                    </p>
                    <p>
                        <a
                            href={"data:application/pdf;base64," + pdf}
                            download="cerfa.pdf"
                        >
                            Télécharger le PDF
                        </a>
                    </p>
                </>
            )}
        </>
    );
}

const form = document.getElementById("react-form");
if (form) {
    ReactDOM.createRoot(form).render(
        <React.StrictMode>
            <CerfaForm />
        </React.StrictMode>
    );
}

function dataToObject(string: { [key: string]: FormDataEntryValue }) {
    const result = {} as { [key: string]: any };

    for (const key in string) {
        const parts = key.split("[").map((part) => part.replace("]", ""));
        let temp = result;

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];

            if (!temp[part]) {
                if (i === parts.length - 1) {
                    temp[part] = string[key];
                } else {
                    temp[part] = {};
                }
            }

            temp = temp[part];
        }
    }

    return result;
}
