import React, { HTMLAttributes, useState } from "react";

export type RaisonNationaliteProps = {
    sexe: "M" | "F";
    isMajeur: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function RaisonNationalite({ sexe, isMajeur }: RaisonNationaliteProps) {
    return (
        <>
            <fieldset>
                <legend>
                    {isMajeur ? (
                        <>Vous êtes français {sexe == "F" && "e"} </>
                    ) : (
                        <>La personne mineure est française </>
                    )}
                    parce que
                </legend>

                <div>
                    <label>
                        <input
                            type="radio"
                            id="raison_nationalite_1"
                            name="raisonNationalite"
                            value="1"
                            defaultChecked={true}
                        />
                        {isMajeur && (
                            <>
                                Vous êtes né{sexe == "F" && "e"} en France et
                                l'un au moins de vos parents est né en France
                            </>
                        )}
                        {!isMajeur && (
                            <>
                                Elle est née en France et l'un au mois de ses
                                parents est né en France
                            </>
                        )}
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            type="radio"
                            id="raison_nationalite_2"
                            name="raisonNationalite"
                            value="2"
                        />
                        {isMajeur && (
                            <>
                                Vous êtes né{sexe == "F" && "e"} en France et
                                l'un au moins de vos parents est né dans un
                                ancien département ou territoire français
                            </>
                        )}
                        {!isMajeur && (
                            <>
                                Elle est née en France et l'un au mois de ses
                                parents est né dans un ancien département ou
                                territoire français
                            </>
                        )}
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            type="radio"
                            id="raison_nationalite_3"
                            name="raisonNationalite"
                            value="3"
                        />
                        {isMajeur && (
                            <>
                                Vous êtes né{sexe == "F" && "e"} en France et
                                l'un au moins de vos parents est français
                            </>
                        )}
                        {!isMajeur && (
                            <>
                                Elle est née en France et l'un au mois de ses
                                parents est français
                            </>
                        )}
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            type="radio"
                            id="raison_nationalite_4"
                            name="raisonNationalite"
                            value="4"
                        />
                        {isMajeur && (
                            <>
                                Vous n'êtes pas né{sexe == "F" && "e"} en France
                                et l'un au moins de vos parents est français"
                            </>
                        )}
                        {!isMajeur && (
                            <>
                                Elle n'est pas née en France et l'un au mois de
                                ses parents est français
                            </>
                        )}
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            type="radio"
                            id="raison_nationalite_5"
                            name="raisonNationalite"
                            value="5"
                        />
                        {isMajeur && (
                            <>
                                L'un de vos parent est devenu français avant
                                votre majorité
                            </>
                        )}
                        {!isMajeur && (
                            <>
                                La mère ou le père est devenu français(e) depuis
                                la naissance{" "}
                                {sexe == "M" ? "du mineur" : "de la mineure"}
                            </>
                        )}
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            type="radio"
                            id="raison_nationalite_6"
                            name="raisonNationalite"
                            value="6"
                        />
                        {isMajeur && (
                            <>Vous êtes de nationalité française par mariage</>
                        )}
                        {!isMajeur && (
                            <>
                                Elle est née en France et ses parents ne sont
                                pas français
                            </>
                        )}
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            type="radio"
                            id="raison_nationalite_7"
                            name="raisonNationalite"
                            value="7"
                        />
                        {isMajeur && (
                            <>
                                Vous êtes né{sexe == "F" && "e"} en France et
                                vos parents ne sont pas français
                            </>
                        )}
                        {!isMajeur && <>Autre motif</>}
                    </label>
                </div>
                {isMajeur && (
                    <>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    id="raison_nationalite_8"
                                    name="raisonNationalite"
                                    value="8"
                                />
                                Vous êtes naturalisé{sexe == "F" && "e"}{" "}
                                français
                                {sexe == "F" && "e"}
                            </label>
                        </div>

                        <div>
                            <label>
                                <input
                                    type="radio"
                                    id="raison_nationalite_9"
                                    name="raisonNationalite"
                                    value="9"
                                />
                                Vous avez été réintégré{sexe == "F" && "e"} dans
                                la nationalité française
                            </label>
                        </div>

                        <div>
                            <label>
                                <input
                                    type="radio"
                                    id="raison_nationalite_10"
                                    name="raisonNationalite"
                                    value="10"
                                />
                                Vous êtes français{sexe == "F" && "e"} par
                                déclaration (autrement que par mariage)
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    id="raison_nationalite_11"
                                    name="raisonNationalite"
                                    value="11"
                                />
                                Autre motif
                            </label>
                        </div>
                    </>
                )}
            </fieldset>
        </>
    );
}
