import React, { HTMLAttributes, useState } from "react";

export type Demande = {
    majorite: "majeure" | "mineure";
    type: "cni" | "passeport";
};

export type TypeDemandeProps = {
    demande: Demande;
    setType: (type: "cni" | "passeport") => void;
    setMajorite: (majorite: "mineure" | "majeure") => void;
} & HTMLAttributes<HTMLDivElement>;

export function TypeDemande({
    demande,
    setType,
    setMajorite,
}: TypeDemandeProps) {
    return (
        <>
            <fieldset>
                <legend>La demande concerne une personne</legend>

                <div>
                    <label>
                        <input
                            type="radio"
                            id="type_demande_majeure"
                            name="majorite"
                            value="majeure"
                            checked={demande.majorite === "majeure"}
                            onChange={() => setMajorite("majeure")}
                        />
                        Majeure
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            type="radio"
                            id="type_demande_mineure"
                            name="majorite"
                            value="mineure"
                            checked={demande.majorite === "mineure"}
                            onChange={() => setMajorite("mineure")}
                        />
                        Mineure
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Demande de</legend>

                <div>
                    <label>
                        <input
                            type="radio"
                            id="type_demande_cni"
                            name="type_demande"
                            value="cni"
                            checked={demande.type === "cni"}
                            onChange={() => setType("cni")}
                        />
                        Carte nationale d'identité
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            type="radio"
                            id="type_demande_passeport"
                            name="type_demande"
                            value="passeport"
                            checked={demande.type === "passeport"}
                            onChange={() => setType("passeport")}
                        />
                        Passeport
                    </label>
                </div>
            </fieldset>
        </>
    );
}

export function useDemande(): TypeDemandeProps {
    const [demande, setDemande] = useState({
        type: "cni",
        majorite: "majeure",
    } as Demande);

    function setType(type: "cni" | "passeport") {
        setDemande({
            ...demande,
            type: type,
        });
    }

    function setMajorite(majorite: "mineure" | "majeure") {
        setDemande({
            ...demande,
            majorite: majorite,
        });
    }

    return { demande, setType, setMajorite };
}
