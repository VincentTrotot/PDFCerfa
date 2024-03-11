import React from "react";
import { Fieldset } from "../atoms/Fieldset";
import { Radio } from "../atoms/Radio";

export function Tutelle() {
    return (
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
    );
}
