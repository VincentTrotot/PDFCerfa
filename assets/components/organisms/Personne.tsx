import React, { HTMLAttributes } from "react";
import { departements } from "../../inc/departements";
import { Sexe } from "../molecules/Sexe";
import { Input } from "../atoms/Input";
import { NomDUsage } from "../molecules/NomDUsage";
import { DatalistInput } from "../atoms/DatalistInput";
import { SelectInput } from "../atoms/SelectInput";
import { Demande } from "../../hooks/useDemande";

type PersoneProps = {
    demande: Demande;
    setSexe: (sexe: "M" | "F") => void;
} & HTMLAttributes<HTMLDivElement>;

export function Personne({ demande, setSexe }: PersoneProps) {
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

    return (
        <>
            <Sexe
                id="sexe_demandeur"
                name="usager[sexe]"
                onClickCallback={setSexe}
            />
            <Input id="usager[nom]" label="Nom" />
            <NomDUsage isMajeur={demande.isMajeur} />
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

            <SelectInput
                id="personne_couleur_yeux"
                name="usager[couleurYeux]"
                label="Couleur des yeux"
                options={couleursYeux}
            />
            {demande.type === "passeport" && (
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
