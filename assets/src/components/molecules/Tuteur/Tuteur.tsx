import React, { HTMLAttributes } from "react";
import { Fieldset } from "../../atoms/Fieldset/Fieldset";
import { Radio } from "../../atoms/Radio/Radio";
import { useCerfaFormStore } from "../../../hooks/useCerfaFormStore";
import globals from "../../../styles/modules/globals.module.css";
import { useToggle } from "../../../hooks/useToggle";
import { Input } from "../../atoms/Input/Input";

type TuteurProps = {
    checked?: boolean;
    onChange?: () => void;
    isAdresse2: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function Tuteur({ isAdresse2 }: TuteurProps) {
    const [parent1label, parent2label] = getParentsLabel();
    const [adresse1label, adresse2label] = getAdressesLabel(isAdresse2);
    const { state: otherTuteur, defineState: setOtherTuteur } = useToggle();
    const { state: otherAdresse, defineState: setOtherAdresse } = useToggle();
    return (
        <Fieldset legend="Autorisation de la personne exerçant l'autorité parentale">
            <div className={globals.flex}>
                <Fieldset
                    legend="Le représentant légal"
                    className={globals.flexGrow}
                >
                    <Radio
                        id="representant_legal_parent_1"
                        name="representant_legal"
                        label={parent1label}
                        value="parent1"
                        onClickCallback={() => setOtherTuteur(false)}
                    ></Radio>

                    <Radio
                        id="representant_legal_parent_2"
                        name="representant_legal"
                        label={parent2label}
                        value="parent2"
                        onClickCallback={() => setOtherTuteur(false)}
                    ></Radio>

                    <Radio
                        id="representant_legal_tuteur"
                        name="representant_legal"
                        label="Tuteur"
                        value="tuteur"
                        onClickCallback={() => setOtherTuteur(true)}
                    ></Radio>
                    <Radio
                        id="representant_legal_autre"
                        name="representant_legal"
                        label="Autre personne exerçant l'autorité parentale"
                        value="autre"
                        onClickCallback={() => setOtherTuteur(true)}
                    ></Radio>
                </Fieldset>
                {otherTuteur && (
                    <Fieldset className={globals.flexGrow} legend="Identité">
                        <Input id={"usager[tuteur][nom]"} label={"Nom"} />
                        <Input
                            id={"usager[tuteur][prenoms]"}
                            label={"Prénom(s)"}
                        />
                        <Input
                            id={"usager[tuteur][dateNaissance]"}
                            label={"Date de naissance"}
                            type="date"
                        />
                    </Fieldset>
                )}
            </div>
            <div className={globals.flex}>
                <Fieldset
                    legend="Adresse du représentant légal"
                    className={globals.flexGrow}
                >
                    <Radio
                        id="representant_legal_adresse_1"
                        name="representant_legal_adresse"
                        label={adresse1label}
                        value="adresse1"
                        onClickCallback={() => setOtherAdresse(false)}
                    ></Radio>

                    {adresse2label && (
                        <Radio
                            id="representant_legal_adresse_2"
                            name="representant_legal_adresse"
                            label={adresse2label}
                            value="adresse2"
                            onClickCallback={() => setOtherAdresse(false)}
                        ></Radio>
                    )}

                    <Radio
                        id="representant_legal_adresse_autre"
                        name="representant_legal_adresse"
                        label="Autre"
                        value="adresseAutre"
                        onClickCallback={() => setOtherAdresse(true)}
                    ></Radio>
                </Fieldset>
                {otherAdresse && (
                    <Fieldset className={globals.flexGrow} legend="Adresse">
                        <Input
                            id={"usager[adresses][tuteur][ligne1]"}
                            label="Adresse"
                        />
                        <Input
                            id={"usager[adresses][tuteur][codePostal]"}
                            label="Code postal"
                        />
                        <Input
                            id={"usager[adresses][tuteur][ville]"}
                            label="Ville"
                        />
                    </Fieldset>
                )}
            </div>
        </Fieldset>
    );
}

function getParentsLabel() {
    const { parents } = useCerfaFormStore();

    let parent1label = undefined;
    let parent2label = undefined;
    if (parents[0]?.sexe == "M" && parents[1]?.sexe == "M") {
        parent1label = "Père 1";
        parent2label = "Père 2";
    }
    if (parents[0]?.sexe == "F" && parents[1]?.sexe == "F") {
        parent1label = "Mère 1";
        parent2label = "Mère 2";
    }
    if (parents[0]?.sexe == "M" && parents[1]?.sexe == "F") {
        parent1label = "Père";
        parent2label = "Mère";
    }
    if (parents[0]?.sexe == "F" && parents[1]?.sexe == "M") {
        parent1label = "Mère";
        parent2label = "Père";
    }

    if (parents[0]?.nom !== "" || parents[0]?.prenoms !== "") {
        const space = parents[0]?.prenoms === "" ? "" : " ";
        parent1label += ` (${parents[0]?.prenoms}${space}${parents[0]?.nom})`;
    }
    if (parents[1]?.nom !== "" || parents[1]?.prenoms !== "") {
        const space = parents[1]?.prenoms === "" ? "" : " ";
        parent2label += ` (${parents[1]?.prenoms}${space}${parents[1]?.nom})`;
    }

    return [parent1label, parent2label];
}

function getAdressesLabel(isAdresse2: boolean): [string, string | null] {
    const { adresses } = useCerfaFormStore();

    let adresse1label = "Adresse 1";
    let adresse1_ligne1_ligne2 = " (";
    let adresse2_ligne1_ligne2 = " (";
    let adresse2label = null as string | null;

    if (adresses[0].ligne1 !== "" || adresses[0].ligne2 !== "") {
        if (adresses[0].ligne1 == "") {
            adresse1_ligne1_ligne2 += adresses[0].ligne2;
        } else if (adresses[0].ligne2 == "") {
            adresse1_ligne1_ligne2 += adresses[0].ligne1;
        } else {
            adresse1_ligne1_ligne2 +=
                adresses[0].ligne1 + " / " + adresses[0].ligne2;
        }
        adresse1_ligne1_ligne2 += " – ";
    }
    adresse1label +=
        adresse1_ligne1_ligne2 +
        adresses[0].codePostal +
        " " +
        adresses[0].ville +
        ")";
    if (isAdresse2) {
        adresse2label = "Adresse 2";
        if (adresses[1].ligne1 !== "" || adresses[1].ligne2 !== "") {
            if (adresses[1].ligne1 == "") {
                adresse2_ligne1_ligne2 += adresses[1].ligne2;
            } else if (adresses[1].ligne2 == "") {
                adresse2_ligne1_ligne2 += adresses[1].ligne1;
            } else {
                adresse2_ligne1_ligne2 +=
                    adresses[1].ligne1 + " / " + adresses[1].ligne2;
            }
            adresse2_ligne1_ligne2 += " – ";
        }
        adresse2label +=
            adresse2_ligne1_ligne2 +
            adresses[1].codePostal +
            " " +
            adresses[1].ville +
            ")";
    }
    return [adresse1label, adresse2label];
}
