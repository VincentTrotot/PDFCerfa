import React, { HTMLAttributes } from "react";

type AdresseProps = {
    count: string;
} & HTMLAttributes<HTMLElement>;

export function Adresse({ count }: AdresseProps) {
    return (
        <>
            <fieldset>
                <legend>Adresse {+count + 1}</legend>
                <p>
                    <label
                        className="form-label"
                        htmlFor={"usager[adresses][" + count + "][ligne1]"}
                    >
                        Ligne 1 &nbsp;
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id={"usager[adresses][" + count + "][ligne1]"}
                        name={"usager[adresses][" + count + "][ligne1]"}
                    />
                </p>
                <p>
                    <label
                        className="form-label"
                        htmlFor={"usager[adresses][" + count + "][ligne2]"}
                    >
                        Ligne 2 &nbsp;
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id={"usager[adresses][" + count + "][ligne2]"}
                        name={"usager[adresses][" + count + "][ligne2]"}
                    />
                </p>
                <p>
                    <label
                        className="form-label"
                        htmlFor={"usager[adresses][" + count + "][codePostal]"}
                    >
                        Code postal&nbsp;
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id={"usager[adresses][" + count + "][codePostal]"}
                        name={"usager[adresses][" + count + "][codePostal]"}
                    />
                </p>
                <p>
                    <label
                        className="form-label"
                        htmlFor={"usager[adresses][" + count + "][ville]"}
                    >
                        Ville &nbsp;
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id={"usager[adresses][" + count + "][ville]"}
                        name={"usager[adresses][" + count + "][ville]"}
                    />
                </p>
            </fieldset>
        </>
    );
}
