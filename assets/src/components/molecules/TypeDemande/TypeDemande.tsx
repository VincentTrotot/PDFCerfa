import React from "react";
import { TypeDemandeProps } from "../../../hooks/useDemande";
import { Fieldset } from "../../atoms/Fieldset/Fieldset";
import { Radio } from "../../atoms/Radio/Radio";
import styles from "./TypeDemande.module.css";
import globals from "../../../styles/modules/globals.module.css";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";
import { useCerfaFormStore } from "../../../hooks/useCerfaFormStore";

export function TypeDemande() {
    const {
        cni,
        passeport,
        isMajeur,
        toggleCni,
        togglePasseport,
        setIsMajeur,
    } = useCerfaFormStore();
    return (
        <div className={globals.flex}>
            <Fieldset legend="Demande de" className={globals.flexGrow}>
                <Checkbox
                    id="type_demande_cni"
                    name="type_demande_cni"
                    value="cni"
                    checked={cni}
                    onChange={toggleCni}
                    label="Carte nationale d'identité"
                />
                <Checkbox
                    id="type_demande_passeport"
                    name="type_demande_passeport"
                    value="passeport"
                    checked={passeport}
                    onChange={togglePasseport}
                    label="Passeport"
                />
            </Fieldset>

            <Fieldset
                legend="La demande concerne une personne"
                className={globals.flexGrow}
            >
                <Radio
                    id="type_demande_majeure"
                    name="isMajeur"
                    value={1}
                    checked={isMajeur}
                    onChange={() => setIsMajeur(true)}
                    label="Majeure (ou mineure émancipée)"
                />
                <Radio
                    id="type_demande_mineure"
                    name="isMajeur"
                    value={0}
                    checked={!isMajeur}
                    onChange={() => setIsMajeur(false)}
                    label="Mineure"
                />
            </Fieldset>
        </div>
    );
}
