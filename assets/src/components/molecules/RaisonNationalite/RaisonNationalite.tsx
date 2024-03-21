import React, { HTMLAttributes } from "react";
import { Fieldset } from "../../atoms/Fieldset/Fieldset";
import { Radio } from "../../atoms/Radio/Radio";
import styles from "./RaisonNationalite.module.css";

export type RaisonNationaliteProps = {
    sexe: "M" | "F";
    isMajeur: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function RaisonNationalite({ sexe, isMajeur }: RaisonNationaliteProps) {
    return (
        <div className={styles.raisonNationalite}>
            <Fieldset
                legend={
                    isMajeur
                        ? `Vous êtes français${
                              sexe == "F" ? "e " : " "
                          }parce que`
                        : "La personne mineure est française parce que"
                }
            >
                <Radio
                    id="raison_nationalite_1"
                    name="raisonNationalite"
                    value="1"
                    defaultChecked={true}
                    label={
                        isMajeur
                            ? `Vous êtes né${
                                  sexe == "F" ? "e" : ""
                              } en France et l'un au moins de vos parents est né en France`
                            : "Elle est née en France et l'un au mois de ses parents est né en France"
                    }
                />
                <Radio
                    id="raison_nationalite_2"
                    name="raisonNationalite"
                    value="2"
                    label={
                        isMajeur
                            ? `Vous êtes né${
                                  sexe == "F" ? "e" : ""
                              } en France et l'un au moins de vos parents est né dans un ancien département ou territoire français`
                            : "Elle est née en France et l'un au mois de ses parents est né dans un ancien département ou territoire français"
                    }
                />
                <Radio
                    id="raison_nationalite_3"
                    name="raisonNationalite"
                    value="3"
                    label={
                        isMajeur
                            ? `Vous êtes né${
                                  sexe == "F" ? "e" : ""
                              } en France et l'un au moins de vos parents est français`
                            : "Elle est née en France et l'un au moins de ses parents est français"
                    }
                />
                <Radio
                    id="raison_nationalite_4"
                    name="raisonNationalite"
                    value="4"
                    label={
                        isMajeur
                            ? `Vous n'êtes pas né${
                                  sexe == "F" ? "e" : ""
                              } en France et l'un au moins de vos parents est français`
                            : "Elle n'est pas née en France et l'un au moins de ses parents est français"
                    }
                />
                <Radio
                    id="raison_nationalite_5"
                    name="raisonNationalite"
                    value="5"
                    label={
                        isMajeur
                            ? "L'un de vos parent est devenu français avant votre majorité"
                            : `La mère ou le père est devenu français(e) depuis la naissance ${
                                  sexe == "M" ? "du mineur" : "de la mineure"
                              }`
                    }
                />
                <Radio
                    id="raison_nationalite_6"
                    name="raisonNationalite"
                    value="6"
                    label={
                        isMajeur
                            ? "Vous êtes de nationalité française par mariage"
                            : "Elle est née en France et ses parents ne sont pas français"
                    }
                />
                <Radio
                    id="raison_nationalite_7"
                    name="raisonNationalite"
                    value="7"
                    label={
                        isMajeur
                            ? `Vous êtes né${
                                  sexe == "F" ? "e" : ""
                              } en France et vos parents ne sont pas français`
                            : "Autre motif"
                    }
                />
                {isMajeur && (
                    <>
                        <Radio
                            id="raison_nationalite_8"
                            name="raisonNationalite"
                            value="8"
                            label={`Vous êtes naturalisé${
                                sexe == "F" ? "e" : ""
                            } français${sexe == "F" ? "e" : ""}`}
                        />

                        <Radio
                            id="raison_nationalite_9"
                            name="raisonNationalite"
                            value="9"
                            label={`Vous avez été réintégré${
                                sexe == "F" ? "e" : ""
                            } dans la nationalité française`}
                        />

                        <Radio
                            id="raison_nationalite_10"
                            name="raisonNationalite"
                            value="10"
                            label={`Vous êtes français${
                                sexe == "F" ? "e" : ""
                            } par déclaration (autrement que par mariage)`}
                        />
                        <Radio
                            id="raison_nationalite_11"
                            name="raisonNationalite"
                            value="11"
                            label="Autre motif"
                        />
                    </>
                )}
            </Fieldset>
        </div>
    );
}
