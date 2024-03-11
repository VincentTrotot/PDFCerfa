import React, { HTMLAttributes } from "react";
import { Input } from "../atoms/Input";
import { Radio } from "../atoms/Radio";
import { Fieldset } from "../atoms/Fieldset";
import { Sexe } from "./Sexe";

type ParentProps = {
    count: string;
} & HTMLAttributes<HTMLElement>;

export function Parent({ count }: ParentProps) {
    return (
        <Fieldset legend={`Parent ${+count + 1}`}>
            <Sexe
                id={"sexe_parent_" + count}
                name={"usager[parents][" + count + "][sexe]"}
            />
            <Input id={"usager[parents][" + count + "][nom]"} label={"Nom"} />
            <Input
                id={"usager[parents][" + count + "][prenoms]"}
                label={"Prénom(s)"}
            />
            <Input
                id={"usager[parents][" + count + "][dateNaissance]"}
                label={"Date de naissance"}
                type="date"
            />
            <Input
                id={"usager[parents][" + count + "][villeNaissance]"}
                label={"Ville de naissance"}
            />
            <Input
                id={"usager[parents][" + count + "][nationalite]"}
                label={"Nationalité"}
            />
        </Fieldset>
    );
}
