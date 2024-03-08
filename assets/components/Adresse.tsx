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
                    <label>
                        Ligne 1 &nbsp;
                        <br />
                        <input
                            type="text"
                            name={"usager[adresses][" + count + "][ligne1]"}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Ligne 2 &nbsp;
                        <br />
                        <input
                            type="text"
                            name={"usager[adresses][" + count + "][ligne2]"}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Code postal&nbsp;
                        <br />
                        <input
                            type="text"
                            name={"usager[adresses][" + count + "][codePostal]"}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Ville &nbsp;
                        <br />
                        <input
                            type="text"
                            name={"usager[adresses][" + count + "][ville]"}
                        />
                    </label>
                </p>
            </fieldset>
        </>
    );
}
