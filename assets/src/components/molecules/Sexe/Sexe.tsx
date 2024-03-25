import React from "react";
import { Fieldset } from "../../atoms/Fieldset/Fieldset";
import { Radio, RadioProps } from "../../atoms/Radio/Radio";
import { useCerfaFormStore } from "../../../hooks/useCerfaFormStore";

type SexeProps = {
    count?: number;
} & RadioProps;

export function Sexe({ id, name, count, onClickCallback }: SexeProps) {
    const { setParent } = useCerfaFormStore();
    return (
        <Fieldset legend="Sexe">
            <Radio
                id={id + "_homme"}
                label={"Homme"}
                name={name}
                value={"M"}
                onClickCallback={() => {
                    onClickCallback?.("M");
                    setParent(count, { sexe: "M" });
                }}
            />
            <Radio
                id={id + "_femme"}
                label={"Femme"}
                name={name}
                value={"F"}
                onClickCallback={() => {
                    onClickCallback?.("F");
                    setParent(count, { sexe: "F" });
                }}
            />
        </Fieldset>
    );
}
