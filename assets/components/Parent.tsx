import React, { HTMLAttributes } from "react";

type ParentProps = {
    count: string;
} & HTMLAttributes<HTMLElement>;

export function Parent({ count }: ParentProps) {
    return (
        <>
            <fieldset>
                <legend>Parent {+count + 1}</legend>
                <fieldset>
                    <legend>Sexe</legend>

                    <div>
                        <label>
                            <input
                                type="radio"
                                id={"sexe_parent_" + count + "_homme"}
                                name={"usager[parents][" + count + "][sexe]"}
                                value="homme"
                                defaultChecked={true}
                            />
                            Homme
                        </label>
                    </div>

                    <div>
                        <label>
                            <input
                                type="radio"
                                id={"sexe_parent_" + count + "_homme"}
                                name={"usager[parents][" + count + "][sexe]"}
                                value="femme"
                            />
                            Femme
                        </label>
                    </div>
                </fieldset>
                <p>
                    <label>
                        Nom &nbsp;
                        <input
                            type="text"
                            name={"usager[parents][" + count + "][nom]"}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Prénoms &nbsp;
                        <input
                            type="text"
                            name={"usager[parents][" + count + "][prenoms]"}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Date de naissance&nbsp;
                        <input
                            type="date"
                            name={
                                "usager[parents][" + count + "][dateNaissance]"
                            }
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Ville de naissance &nbsp;
                        <input
                            type="text"
                            name={
                                "usager[parents][" + count + "][villeNaissance]"
                            }
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Nationalité &nbsp;
                        <input
                            type="text"
                            name={"usager[parents][" + count + "][nationalite]"}
                        />
                    </label>
                </p>
            </fieldset>
        </>
    );
}
