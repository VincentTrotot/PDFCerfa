import React from "react";
import { Fieldset } from "../atoms/Fieldset";
import { Radio, RadioProps } from "../atoms/Radio";

export function Sexe({ id, name, onClickCallback }: RadioProps) {
    return (
        <Fieldset legend="Sexe">
            <Radio
                id={id + "_homme"}
                label={"Homme"}
                name={name}
                value={"M"}
                defaultChecked={true}
                onClickCallback={() => onClickCallback?.("M")}
            />
            <Radio
                id={id + "_femme"}
                label={"Femme"}
                name={name}
                value={"F"}
                onClickCallback={() => onClickCallback?.("F")}
            />
        </Fieldset>
    );
}
