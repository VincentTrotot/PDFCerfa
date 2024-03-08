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

                    <div className="form-check">
                        <label
                            className="form-check-label"
                            htmlFor={"sexe_parent_" + count + "_homme"}
                        >
                            <input
                                className="form-check-input"
                                type="radio"
                                id={"sexe_parent_" + count + "_homme"}
                                name={"usager[parents][" + count + "][sexe]"}
                                value="M"
                                defaultChecked={true}
                            />
                            Homme
                        </label>
                    </div>

                    <div className="form-check">
                        <label
                            className="form-check-label"
                            htmlFor={"sexe_parent_" + count + "_femme"}
                        >
                            <input
                                className="form-check-input"
                                type="radio"
                                id={"sexe_parent_" + count + "_femme"}
                                name={"usager[parents][" + count + "][sexe]"}
                                value="F"
                            />
                            Femme
                        </label>
                    </div>
                </fieldset>
                <div className="mb-3">
                    <label
                        className="form-label"
                        htmlFor={"usager[parents][" + count + "][nom]"}
                    >
                        Nom &nbsp;
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id={"usager[parents][" + count + "][nom]"}
                        name={"usager[parents][" + count + "][nom]"}
                    />
                </div>
                <div className="mb-3">
                    <label
                        className="form-label"
                        htmlFor={"usager[parents][" + count + "][prenoms]"}
                    >
                        Prénoms &nbsp;
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id={"usager[parents][" + count + "][prenoms]"}
                        name={"usager[parents][" + count + "][prenoms]"}
                    />
                </div>
                <div className="mb-3">
                    <label
                        className="form-label"
                        htmlFor={
                            "usager[parents][" + count + "][dateNaissance]"
                        }
                    >
                        Date de naissance&nbsp;
                    </label>
                    <input
                        className="form-control"
                        type="date"
                        name={"usager[parents][" + count + "][dateNaissance]"}
                        id={"usager[parents][" + count + "][dateNaissance]"}
                    />
                </div>
                <div className="mb-3">
                    <label
                        className="form-label"
                        htmlFor={
                            "usager[parents][" + count + "][villeNaissance]"
                        }
                    >
                        Ville de naissance &nbsp;
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id={"usager[parents][" + count + "][villeNaissance]"}
                        name={"usager[parents][" + count + "][villeNaissance]"}
                    />
                </div>
                <div className="mb-3">
                    <label
                        className="form-label"
                        htmlFor={"usager[parents][" + count + "][nationalite]"}
                    >
                        Nationalité &nbsp;
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id={"usager[parents][" + count + "][nationalite]"}
                        name={"usager[parents][" + count + "][nationalite]"}
                    />
                </div>
            </fieldset>
        </>
    );
}
