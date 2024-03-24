import React, { HTMLAttributes } from "react";
import { Input } from "../../atoms/Input/Input";
import { Fieldset } from "../../atoms/Fieldset/Fieldset";
import { Sexe } from "../Sexe/Sexe";
import styles from "./Parent.module.css";
import { useCerfaFormStore } from "../../../hooks/useCerfaFormStore";

type ParentProps = {
    count: string;
} & HTMLAttributes<HTMLElement>;

export function Parent({ count, className }: ParentProps) {
    const { setParent } = useCerfaFormStore();
    return (
        <Fieldset legend={`Parent ${+count + 1}`} className={className}>
            <Sexe
                id={"sexe_parent_" + count}
                name={"usager[parents][" + count + "][sexe]"}
                count={+count}
            />
            <Input
                id={"usager[parents][" + count + "][nom]"}
                label={"Nom"}
                onChange={(e) =>
                    setParent(+count, { nom: e.currentTarget.value })
                }
            />
            <Input
                id={"usager[parents][" + count + "][prenoms]"}
                label={"Prénom(s)"}
                onChange={(e) =>
                    setParent(+count, { prenoms: e.currentTarget.value })
                }
            />
            <Input
                id={"usager[parents][" + count + "][dateNaissance]"}
                label={"Date de naissance"}
                type="date"
                onChange={(e) =>
                    setParent(+count, { dateNaissance: e.currentTarget.value })
                }
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
