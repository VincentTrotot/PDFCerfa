import { HTMLAttributes, useState } from "react";

export type Demande = {
    isMajeur: boolean;
    type: {
        cni: boolean;
        passeport: boolean;
    };
};

export type TypeDemandeProps = {
    demande: Demande;
    setCNI: (cni: boolean) => void;
    setPasseport: (passeport: boolean) => void;
    setMajeur: (isMajeur: boolean) => void;
} & HTMLAttributes<HTMLDivElement>;

export function useDemande(): TypeDemandeProps {
    const [demande, setDemande] = useState({
        type: { cni: true, passeport: false },
        isMajeur: true,
    } as Demande);

    function setCNI(cni: boolean) {
        setDemande({
            ...demande,
            type: {
                ...demande.type,
                cni: cni,
            },
        });
    }

    function setPasseport(passeport: boolean) {
        setDemande({
            ...demande,
            type: {
                ...demande.type,
                passeport: passeport,
            },
        });
    }

    function setMajeur(isMajeur: boolean) {
        setDemande({
            ...demande,
            isMajeur: isMajeur,
        });
    }

    return { demande, setCNI, setPasseport, setMajeur };
}
