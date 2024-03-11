import React, { HTMLAttributes, useState } from "react";
import { Demande } from "./TypeDemande";
import { departements } from "../inc/departements";

type PersoneProps = {
    demande: Demande;
    setSexe: (sexe: "M" | "F") => void;
} & HTMLAttributes<HTMLDivElement>;

export function Personne({ demande, setSexe }: PersoneProps) {
    const [nomDUsage, setNomDUsage] = useState("");

    const handleChange = (nomDUsage: string) => {
        setNomDUsage(nomDUsage);
    };

    return (
        <>
            <fieldset>
                <legend>Sexe</legend>

                <div className="form-check">
                    <label className="form-check-label">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="sexe_demandeur_homme"
                            name="usager[sexe]"
                            value="M"
                            defaultChecked={true}
                            onClick={() => setSexe("M")}
                        />
                        Homme
                    </label>
                </div>

                <div className="form-check">
                    <label className="form-check-label">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="sexe_demandeur_femme"
                            name="usager[sexe]"
                            value="F"
                            onClick={() => setSexe("F")}
                        />
                        Femme
                    </label>
                </div>
            </fieldset>
            <div className="mb-3">
                <label className="form-label" htmlFor="usager[nom]">
                    Nom
                </label>
                <input
                    className="form-control"
                    type="text"
                    id="usager[nom]"
                    name="usager[nom]"
                />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="usager[nomDUsage]">
                    Nom d'usage
                </label>
                <input
                    className="form-control"
                    type="text"
                    id="usager[nomDUsage]"
                    name="usager[nomDUsage]"
                    value={nomDUsage}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
            {nomDUsage !== "" && (
                <>
                    <div className="form-group mb-3">
                        Présisez s'il s'agit du nom de votre
                        <br />
                        <div className="form-check">
                            <label className="form-ckeck-label">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="origine_nom_usage_pere"
                                    name="usager[origineNomDUsage]"
                                    value="pere"
                                    defaultChecked={true}
                                />
                                Père
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="origine_nom_usage_mere"
                                    name="usager[origineNomDUsage]"
                                    value="mere"
                                />
                                Mère
                            </label>
                        </div>
                        {demande.isMajeur && (
                            <>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="origine_nom_usage_epoux"
                                            name="usager[origineNomDUsage]"
                                            value="epoux"
                                        />
                                        Époux
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="origine_nom_usage_epouse"
                                            name="usager[origineNomDUsage]"
                                            value="epouse"
                                        />
                                        Épouse
                                    </label>
                                </div>
                            </>
                        )}
                    </div>
                    {demande.isMajeur && (
                        <p>
                            Souhaitez-vous faire apparaître un mot devant le nom
                            d'usage ?
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="mot_avant_nom_usage_aucun"
                                        name="usager[motAvantNomDUsage]"
                                        value="Aucun"
                                        defaultChecked={true}
                                    />
                                    non
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="mot_avant_nom_usage_epoux"
                                        name="usager[motAvantNomDUsage]"
                                        value="epoux(se)"
                                    />
                                    époux(se)
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="mot_avant_nom_usage_veuf"
                                        name="usager[motAvantNomDUsage]"
                                        value="veuf(ve)"
                                    />
                                    veuf(ve)
                                </label>
                            </div>
                        </p>
                    )}
                </>
            )}

            <p>
                <label className="form-label" htmlFor="usager[prenoms]">
                    Prénom(s)
                </label>
                <input
                    className="form-control"
                    type="text"
                    id="usager[prenoms]"
                    name="usager[prenoms]"
                />
            </p>
            <p>
                <label className="form-label" htmlFor="usager[taille]">
                    Taille
                </label>
                <input
                    className="form-control"
                    type="number"
                    id="usager[taille]"
                    name="usager[taille]"
                />
            </p>
            <p>
                <label className="form-label" htmlFor="usager[dateNaissance]">
                    Date de naissance
                </label>
                <input
                    className="form-control"
                    type="date"
                    id="usager[dateNaissance]"
                    name="usager[dateNaissance]"
                />
            </p>
            <p>
                <label className="form-label" htmlFor="usager[villeNaissance]">
                    Ville de naissance
                </label>
                <input
                    className="form-control"
                    type="text"
                    id="usager[villeNaissance]"
                    name="usager[villeNaissance]"
                />
            </p>
            <div className="form-group">
                <label
                    className="form-label"
                    htmlFor="usager[departementNaissance]"
                >
                    Département de naissance
                </label>
                <input
                    className="form-control"
                    type="text"
                    id="usager[departementNaissance]"
                    name="usager[departementNaissance]"
                    list="list-departement"
                />
                <datalist id="list-departement">
                    {departements.map((d) => (
                        <option key={d.id}>{d.texte}</option>
                    ))}
                </datalist>
            </div>
            <p>
                <label className="form-label" htmlFor="usager[paysNaissance]">
                    Pays de naissance
                </label>
                <input
                    className="form-control"
                    type="text"
                    id="usager[paysNaissance]"
                    name="usager[paysNaissance]"
                />
            </p>
            <p>
                <label className="form-label" htmlFor="usager[telephone]">
                    Numéro de téléphone
                </label>
                <input
                    className="form-control"
                    type="text"
                    id="usager[telephone]"
                    name="usager[telephone]"
                />
            </p>
            {demande.type === "passeport" && (
                <p>
                    <label
                        htmlFor="personne_couleur_yeux"
                        className="form-label"
                    >
                        Couleur des yeux
                    </label>
                    <select
                        className="form-select"
                        name="usager[couleurYeux]"
                        id="personne_couleur_yeux"
                    >
                        <option value="Marrons">Marrons</option>
                        <option value="Verts">Verts</option>
                        <option value="Bleus">Bleus</option>
                        <option value="Albinos">Albinos</option>
                        <option value="Bleus-Gris">Bleus-Gris</option>
                        <option value="Bleus-Verts">Bleus-Verts</option>
                        <option value="Gris">Gris</option>
                        <option value="Gris-verts">Gris-verts</option>
                        <option value="Marron-verts">Marron-verts</option>
                        <option value="Noirs">Noirs</option>
                        <option value="Noisettes">Noisettes</option>
                        <option value="Vairons">Vairons</option>
                    </select>
                </p>
            )}
        </>
    );
}
