import React from "react";
import { TypeDemandeProps } from "../../../hooks/useDemande";
import { Fieldset } from "../../atoms/Fieldset/Fieldset";
import { Radio } from "../../atoms/Radio/Radio";
import styles from "./TypeDemande.module.css";
import globals from "../../../styles/modules/globals.module.css";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";

export function TypeDemande({
    demande,
    setCNI,
    setPasseport,
    setMajeur,
}: TypeDemandeProps) {
    return (
        <div className={globals.flex}>
            <Fieldset legend="Demande de" className={globals.flexGrow}>
                <Checkbox
                    id="type_demande_cni"
                    name="type_demande_cni"
                    value="cni"
                    checked={demande.type.cni}
                    onChange={() => setCNI(!demande.type.cni)}
                    label="Carte nationale d'identité"
                />
                <Checkbox
                    id="type_demande_passeport"
                    name="type_demande_passeport"
                    value="passeport"
                    checked={demande.type.passeport}
                    onChange={() => setPasseport(!demande.type.passeport)}
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
                    checked={demande.isMajeur}
                    onChange={() => setMajeur(true)}
                    label="Majeure (ou mineure émancipée)"
                />
                <Radio
                    id="type_demande_mineure"
                    name="isMajeur"
                    value={0}
                    checked={!demande.isMajeur}
                    onChange={() => setMajeur(false)}
                    label="Mineure"
                />
            </Fieldset>
        </div>
    );
}
