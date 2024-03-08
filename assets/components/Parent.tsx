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
                                value="M"
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
                                value="F"
                            />
                            Femme
                        </label>
                    </div>
                </fieldset>
                <p>
                    <label>
                        Nom &nbsp;
                        <br />
                        <input
                            type="text"
                            name={"usager[parents][" + count + "][nom]"}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Prénoms &nbsp;
                        <br />
                        <input
                            type="text"
                            name={"usager[parents][" + count + "][prenoms]"}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Date de naissance&nbsp;
                        <br />
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
                        <br />
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
                        <br />
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
