import React, { HTMLAttributes } from "react";
import { Fieldset } from "../../atoms/Fieldset/Fieldset";
import { Input } from "../../atoms/Input/Input";
import styles from "./Adresse.module.css";
import { useCerfaFormStore } from "../../../hooks/useCerfaFormStore";

type AdresseProps = {
    count: string;
} & HTMLAttributes<HTMLElement>;

export function Adresse({ count, className }: AdresseProps) {
    const { setAdresse } = useCerfaFormStore();
    return (
        <Fieldset legend={`Adresse ${+count + 1}`} className={className}>
            <Input
                id={"usager[adresses][" + count + "][ligne1]"}
                label="Ligne 1"
                onChange={(e) =>
                    setAdresse(+count, { ligne1: e.currentTarget.value })
                }
            />
            <Input
                id={"usager[adresses][" + count + "][ligne2]"}
                label="Ligne 2"
                onChange={(e) =>
                    setAdresse(+count, { ligne2: e.currentTarget.value })
                }
            />
            <Input
                id={"usager[adresses][" + count + "][codePostal]"}
                label="Code postal"
                onChange={(e) =>
                    setAdresse(+count, { codePostal: e.currentTarget.value })
                }
            />
            <Input
                id={"usager[adresses][" + count + "][ville]"}
                label="Ville"
                onChange={(e) =>
                    setAdresse(+count, { ville: e.currentTarget.value })
                }
            />
        </Fieldset>
    );
}
