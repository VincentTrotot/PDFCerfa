import React, { FormEvent, useState } from "react";
import ReactDOM from "react-dom/client";
import { TypeDemande, useDemande } from "./components/TypeDemande";
import { Personne } from "./components/Personne";
import { Adresse } from "./components/Adresse";
import { Parent } from "./components/Parent";

function CerfaForm({}) {
    const { demande, setType, setMajeur } = useDemande();
    const [adresse2, setAdresse2] = useState(false);

    const handleAdresse2 = () => {
        setAdresse2(!adresse2);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!(e.target instanceof HTMLFormElement)) {
            return;
        }
        const values = new FormData(e.target);
        let data = {} as { [key: string]: FormDataEntryValue };
        values.forEach((v, k) => {
            if (v) {
                data[k] = v;
            }
        });
        console.table(data);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TypeDemande
                    demande={demande}
                    setType={setType}
                    setMajeur={setMajeur}
                />
                <hr />
                <Personne demande={demande} />
                <hr />
                <Adresse count="0" />
                {!demande.isMajeur && (
                    <p>
                        <label htmlFor="">
                            Ajouter une adresse &nbsp;
                            <input
                                type="checkbox"
                                name="adresse2"
                                id="adresse2"
                                checked={adresse2}
                                onChange={handleAdresse2}
                            />
                        </label>
                    </p>
                )}
                {!demande.isMajeur && adresse2 && <Adresse count="1" />}
                <hr />
                <Parent count="0" />
                <Parent count="1" />
                <input type="submit" value="Valider" />
            </form>
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
