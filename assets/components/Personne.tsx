import React, { HTMLAttributes, useState } from "react";
import { Demande } from "./TypeDemande";

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

                <div>
                    <label>
                        <input
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

                <div>
                    <label>
                        <input
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
            <p>
                <label>
                    Nom &nbsp;
                    <br />
                    <input type="text" name="usager[nom]" />
                </label>
            </p>
            <p>
                <label>
                    Nom d'usage &nbsp;
                    <br />
                    <input
                        type="text"
                        name="usager[nomDUsage]"
                        value={nomDUsage}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </label>
            </p>
            {nomDUsage !== "" && (
                <>
                    <p>
                        Présisez s'il s'agit du nom de votre
                        <br />
                        <label>
                            <input
                                type="radio"
                                id="origine_nom_usage_pere"
                                name="usager[origineNomDUsage]"
                                value="pere"
                                defaultChecked={true}
                            />
                            Père
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="origine_nom_usage_mere"
                                name="usager[origineNomDUsage]"
                                value="mere"
                            />
                            Mère
                        </label>
                        {demande.isMajeur && (
                            <>
                                <label>
                                    <input
                                        type="radio"
                                        id="origine_nom_usage_epoux"
                                        name="usager[origineNomDUsage]"
                                        value="epoux"
                                    />
                                    Époux
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        id="origine_nom_usage_epouse"
                                        name="usager[origineNomDUsage]"
                                        value="epouse"
                                    />
                                    Épouse
                                </label>
                            </>
                        )}
                    </p>
                    {demande.isMajeur && (
                        <p>
                            Souhaitez-vous faire apparaître un mot devant le nom
                            d'usage ?
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    id="mot_avant_nom_usage_aucun"
                                    name="usager[motAvantNomDUsage]"
                                    value="Aucun"
                                    defaultChecked={true}
                                />
                                aucun
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    id="mot_avant_nom_usage_epoux"
                                    name="usager[motAvantNomDUsage]"
                                    value="epoux(se)"
                                />
                                époux(se)
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    id="mot_avant_nom_usage_veuf"
                                    name="usager[motAvantNomDUsage]"
                                    value="veuf(ve)"
                                />
                                veuf(ve)
                            </label>
                        </p>
                    )}
                </>
            )}

            <p>
                <label>
                    Prénom(s) &nbsp;
                    <br />
                    <input type="text" name="usager[prenoms]" />
                </label>
            </p>
            <p>
                <label>
                    Taille &nbsp;
                    <br />
                    <input type="number" name="usager[taille]" />
                </label>
            </p>
            <p>
                <label>
                    Date de naissance &nbsp;
                    <br />
                    <input type="date" name="usager[dateNaissance]" />
                </label>
            </p>
            <p>
                <label>
                    Ville de naissance &nbsp;
                    <br />
                    <input type="text" name="usager[villeNaissance]" />
                </label>
            </p>
            <p>
                <label>
                    Département de naissance &nbsp;
                    <br />
                    <input type="number" name="usager[departementNaissance]" />
                </label>
            </p>
            <p>
                <label>
                    Pays de naissance &nbsp;
                    <br />
                    <input type="text" name="usager[paysNaissance]" />
                </label>
            </p>
            <p>
                <label>
                    Numéro de téléphone &nbsp;
                    <br />
                    <input type="text" name="usager[telephone]" />
                </label>
            </p>
            {demande.type === "passeport" && (
                <p>
                    <label htmlFor="personne_couleur_yeux">
                        Couleur des yeux &nbsp;
                        <br />
                        <select
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
                    </label>
                </p>
            )}
        </>
    );
}
