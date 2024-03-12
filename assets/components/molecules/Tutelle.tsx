import React from "react";
import { Fieldset } from "../atoms/Fieldset";
import { Radio, RadioProps } from "../atoms/Radio";
import { Checkbox } from "../atoms/Checkbox";

type TutelleProps = {
    isMajeur: boolean;
} & RadioProps;

export function Tutelle({
    isMajeur,
    checked: tutelle,
    onChange: handleTutelle,
}: TutelleProps) {
    return (
        <>
            {isMajeur && (
                <Checkbox
                    id="isTutelle"
                    onChange={handleTutelle}
                    checked={tutelle}
                    label="Le demandeur est un majeur en tutelle"
                />
            )}
            {tutelle && (
                <Fieldset legend="Si le demandeur est un majeur en tutelle, le tuteur">
                    <Radio
                        id="tutelle_informe"
                        name="tutelle"
                        label="est informé de la demande et a joint une attestation"
                        value="1"
                    />
                    <Radio
                        id="tutelle_signataire"
                        name="tutelle"
                        label="est signataire du présent formulaire"
                        value="2"
                    />
                </Fieldset>
            )}
        </>
    );
}
