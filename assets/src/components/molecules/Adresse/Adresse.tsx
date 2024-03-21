import React, { HTMLAttributes } from "react";
import { Fieldset } from "../../atoms/Fieldset/Fieldset";
import { Input } from "../../atoms/Input/Input";
import styles from "./Adresse.module.css";

type AdresseProps = {
    count: string;
} & HTMLAttributes<HTMLElement>;

export function Adresse({ count, className }: AdresseProps) {
    return (
        <Fieldset legend={`Adresse ${+count + 1}`} className={className}>
            <Input
                id={"usager[adresses][" + count + "][ligne1]"}
                label="Ligne 1"
            />
            <Input
                id={"usager[adresses][" + count + "][ligne2]"}
                label="Ligne 2"
            />
            <Input
                id={"usager[adresses][" + count + "][codePostal]"}
                label="Code postal"
            />
            <Input
                id={"usager[adresses][" + count + "][ville]"}
                label="Ville"
            />
        </Fieldset>
    );
}
