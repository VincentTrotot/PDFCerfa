import React, { HTMLAttributes, useState } from "react";
import { Demande } from "./TypeDemande";

type PersoneProps = {
    demande: Demande;
} & HTMLAttributes<HTMLDivElement>;

export function Personne({ demande }: PersoneProps) {
    const [nomDUsage, setNomDUsage] = useState("");

    function handleChange(nomDUsage: string) {
        setNomDUsage(nomDUsage);
    }

    return (
        <>
            <fieldset>
                <legend>Sexe</legend>

                <div>
                    <label>
                        <input
                            type="radio"
                            id="sexe_demandeur_homme"
                            name="sexe_demandeur"
                            value="homme"
                            defaultChecked={true}
                        />
                        Homme
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            type="radio"
                            id="sexe_demandeur_femme"
                            name="sexe_demandeur"
                            value="femme"
                        />
                        Femme
                    </label>
                </div>
            </fieldset>
            <p>
                <label htmlFor="nom">Nom &nbsp;</label>
                <input type="text" name="nom" />
            </p>
            <p>
                <label htmlFor="nomDUsage">Nom d'usage &nbsp;</label>
                <input
                    type="text"
                    name="nomDUsage"
                    value={nomDUsage}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </p>
            {nomDUsage !== "" && (
                <p>
                    Origine du nom d'usage
                    <label>
                        <input
                            type="radio"
                            id="origine_nom_usage_pere"
                            name="origine_nom_usage"
                            value="pere"
                            defaultChecked={true}
                        />
                        Père
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="origine_nom_usage_mere"
                            name="origine_nom_usage"
                            value="mere"
                            defaultChecked={true}
                        />
                        Mère
                    </label>
                    {demande.majorite === "majeure" && (
                        <>
                            <label>
                                <input
                                    type="radio"
                                    id="origine_nom_usage_epoux"
                                    name="origine_nom_usage"
                                    value="epoux"
                                />
                                Époux
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    id="origine_nom_usage_epouse"
                                    name="origine_nom_usage"
                                    value="epouse"
                                />
                                Épouse
                            </label>
                        </>
                    )}
                </p>
            )}
        </>
    );
}
