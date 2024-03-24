import { create } from "zustand";
import { produce } from "immer";

type CerfaFormStore = {
    sexe: "M" | "F";
    setSexe: (sexe: "M" | "F") => void;
    cni: boolean;
    toggleCni: () => void;
    passeport: boolean;
    togglePasseport: () => void;
    isMajeur: boolean;
    setIsMajeur: (isMajeur: boolean) => void;
    parents: Parent[];
    setParent: (
        index: number | undefined,
        {
            sexe,
            nom,
            prenoms,
            dateNaissance,
        }: {
            sexe?: "M" | "F";
            nom?: string;
            prenoms?: string;
            dateNaissance?: string;
        }
    ) => void;
    adresses: Adresse[];
    setAdresse: (
        index: number | undefined,
        {
            ligne1,
            ligne2,
            codePostal,
            ville,
        }: {
            ligne1?: string;
            ligne2?: string;
            codePostal?: string;
            ville?: string;
        }
    ) => void;
};

type Parent = {
    sexe: "M" | "F";
    nom: string;
    prenoms: string;
    dateNaissance: string;
};

type Adresse = {
    ligne1: string;
    ligne2: string;
    codePostal: string;
    ville: string;
};

export const useCerfaFormStore = create<CerfaFormStore>()((set) => ({
    sexe: "M",
    setSexe: (sexe) => set(() => ({ sexe: sexe })),
    cni: true,
    toggleCni: () => set((state) => ({ cni: !state.cni })),
    passeport: false,
    togglePasseport: () => set((state) => ({ passeport: !state.passeport })),
    isMajeur: true,
    setIsMajeur: (isMajeur: boolean) => set(() => ({ isMajeur: isMajeur })),
    parents: [
        {
            sexe: "M",
            nom: "",
            prenoms: "",
            dateNaissance: "",
        } as Parent,
        {
            sexe: "M",
            nom: "",
            prenoms: "",
            dateNaissance: "",
        } as Parent,
    ],
    setParent(index, { sexe, nom, prenoms, dateNaissance }) {
        if (index == undefined) return;
        set(
            produce((state) => {
                sexe && (state.parents[index].sexe = sexe);
                nom && (state.parents[index].nom = nom);
                prenoms && (state.parents[index].prenoms = prenoms);
                dateNaissance &&
                    (state.parents[index].dateNaissance = dateNaissance);
            })
        );
    },
    adresses: [
        {
            ligne1: "",
            ligne2: "",
            codePostal: "",
            ville: "",
        },
        {
            ligne1: "",
            ligne2: "",
            codePostal: "",
            ville: "",
        },
    ],
    setAdresse(index, { ligne1, ligne2, codePostal, ville }) {
        if (index == undefined) return;
        set(
            produce((state) => {
                ligne1 && (state.adresses[index].ligne1 = ligne1);
                ligne2 && (state.adresses[index].ligne2 = ligne2);
                codePostal && (state.adresses[index].codePostal = codePostal);
                ville && (state.adresses[index].ville = ville);
            })
        );
    },
}));

type ParentLabel =
    | undefined
    | "Père"
    | "Père 1"
    | "Père 2"
    | "Mère"
    | "Mère 1"
    | "Mère 2";
