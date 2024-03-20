import { HTMLAttributes, useState } from "react";

export type Demande = {
    isMajeur: boolean;
    type: "cni" | "passeport";
};

export type TypeDemandeProps = {
    demande: Demande;
    setType: (type: "cni" | "passeport") => void;
    setMajeur: (isMajeur: boolean) => void;
} & HTMLAttributes<HTMLDivElement>;

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
