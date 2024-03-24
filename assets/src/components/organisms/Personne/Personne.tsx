import React, { HTMLAttributes } from "react";
import { departements } from "../../../inc/departements";
import { Sexe } from "../../molecules/Sexe/Sexe";
import { Input } from "../../atoms/Input/Input";
import { NomDUsage } from "../../molecules/NomDUsage/NomDUsage";
import { DatalistInput } from "../../atoms/DatalistInput/DatalistInput";
import { SelectInput } from "../../atoms/SelectInput/SelectInput";
import { Demande } from "../../../hooks/useDemande";
import styles from "./Personne.module.css";
import { useCerfaFormStore } from "../../../hooks/useCerfaFormStore";

export function Personne() {
    const couleursYeux = [
        "Marrons",
        "Verts",
        "Bleus",
        "Albinos",
        "Bleus-Gris",
        "Bleus-Verts",
        "Gris",
        "Gris-verts",
        "Marron-verts",
        "Noirs",
        "Noisettes",
        "Vairons",
    ];

    const { isMajeur, passeport, setSexe } = useCerfaFormStore();

    return (
        <>
            <Sexe
                id="sexe_demandeur"
                name="usager[sexe]"
                onClickCallback={setSexe}
            />
            <Input id="usager[nom]" label="Nom" />
            <NomDUsage isMajeur={isMajeur} />
            <Input id="usager[prenoms]" label="Prénom(s)" />
            <Input id="usager[taille]" label="Taille" type="number" />
            <Input
                id="usager[dateNaissance]"
                label="Date de naissance"
                type="date"
            />
            <Input id="usager[villeNaissance]" label="Ville de naissance" />

            <DatalistInput
                id="usager[departementNaissance]"
                label="Département de naissance"
                datalist={{
                    listName: "list-departement",
                    listItems: departements,
                }}
            />

            <Input id="usager[paysNaissance]" label="Pays de naissance" />
            <Input id="usager[telephone]" label="Numéro de téléphone" />

            {passeport && (
                <SelectInput
                    id="personne_couleur_yeux"
                    name="usager[couleurYeux]"
                    label="Couleur des yeux"
                    options={couleursYeux}
                />
            )}
        </>
    );
}
