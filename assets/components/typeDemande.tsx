import React, { HTMLAttributes, useState } from "react";

type Demande = {
    majorite: "majeure" | "mineure";
    type: "cni" | "passeport";
};

type TypeDemandeProps = {
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
                    <input
                        type="radio"
                        id="type_demande_majeure"
                        name="majeure"
                        value="majeure"
                        checked={demande.majorite === "majeure"}
                        onChange={() => setMajorite("majeure")}
                    />
                    <label
                        htmlFor="majeure"
                        onClick={() => setMajorite("majeure")}
                    >
                        Majeure
                    </label>
                </div>

                <div>
                    <input
                        type="radio"
                        id="type_demande_mineure"
                        name="mineure"
                        value="mineure"
                        checked={demande.majorite === "mineure"}
                        onChange={() => setMajorite("mineure")}
                    />
                    <label
                        htmlFor="mineure"
                        onClick={() => setMajorite("mineure")}
                    >
                        Mineure
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Demande de</legend>

                <div>
                    <input
                        type="radio"
                        id="type_demande_cni"
                        name="cni"
                        value="cni"
                        checked={demande.type === "cni"}
                        onChange={() => setType("cni")}
                    />
                    <label htmlFor="cni" onClick={() => setType("cni")}>
                        Carte nationale d'identité
                    </label>
                </div>

                <div>
                    <input
                        type="radio"
                        id="type_demande_passeport"
                        name="passeport"
                        value="passeport"
                        checked={demande.type === "passeport"}
                        onChange={() => setType("passeport")}
                    />
                    <label
                        htmlFor="passeport"
                        onClick={() => setType("passeport")}
                    >
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
