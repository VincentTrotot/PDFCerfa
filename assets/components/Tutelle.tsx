import React from "react";

export function Tutelle() {
    return (
        <>
            <fieldset>
                <legend>
                    Si le demandeur est un majeur en tutelle, le tuteur
                </legend>
                <div className="form-check">
                    <label className="form-check-label">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="tutelle_informe"
                            name="tutelle"
                            value="1"
                        />
                        est informé de la demande et a joint une attestation
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="tutelle_signataire"
                            name="tutelle"
                            value="2"
                        />
                        est signataire du présent formulaire
                    </label>
                </div>
            </fieldset>
        </>
    );
}