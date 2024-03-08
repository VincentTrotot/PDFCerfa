import React, { HTMLAttributes, useState } from "react";

export type Demande = {
    isMajeur: boolean;
    type: "cni" | "passeport";
};

export type TypeDemandeProps = {
    demande: Demande;
    setType: (type: "cni" | "passeport") => void;
    setMajeur: (isMajeur: boolean) => void;
} & HTMLAttributes<HTMLDivElement>;

export function TypeDemande({ demande, setType, setMajeur }: TypeDemandeProps) {
    return (
        <>
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
            <fieldset>
                <legend>La demande concerne une personne</legend>

                <div>
                    <label>
                        <input
                            type="radio"
                            id="type_demande_majeure"
                            name="isMajeur"
                            value={1}
                            checked={demande.isMajeur}
                            onChange={() => setMajeur(true)}
                        />
                        Majeure (ou mineure émancipée)
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            type="radio"
                            id="type_demande_mineure"
                            name="isMajeur"
                            value={0}
                            checked={!demande.isMajeur}
                            onChange={() => setMajeur(false)}
                        />
                        Mineure
                    </label>
                </div>
            </fieldset>
        </>
    );
}

export function useDemande(): TypeDemandeProps {
    const [demande, setDemande] = useState({
        type: "cni",
        isMajeur: true,
    } as Demande);

    function setType(type: "cni" | "passeport") {
        setDemande({
            ...demande,
            type: type,
        });
    }

    function setMajeur(isMajeur: boolean) {
        setDemande({
            ...demande,
            isMajeur: isMajeur,
        });
    }

    return { demande, setType, setMajeur };
}
