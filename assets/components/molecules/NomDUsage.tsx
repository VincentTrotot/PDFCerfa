import React, { useState } from "react";
import { Fieldset } from "../atoms/Fieldset";
import { Input } from "../atoms/Input";
import { Radio } from "../atoms/Radio";

export function NomDUsage({ isMajeur }: { isMajeur: boolean }) {
    const [nomDUsage, setNomDUsage] = useState("");

    const handleChange = (nomDUsage: string) => {
        setNomDUsage(nomDUsage);
    };
    return (
        <>
            <Input
                id="usager[nomDUsage]"
                label="Nom d'usage"
                value={nomDUsage}
                onChange={(e) => handleChange(e.currentTarget.value)}
            />
            {nomDUsage !== "" && (
                <div className="row">
                    <Fieldset
                        legend="Présicez s'il s'agit du nom de votre"
                        className="col"
                    >
                        <Radio
                            id="origine_nom_usage_pere"
                            name="usager[origineNomDUsage]"
                            value="pere"
                            label="Père"
                            defaultChecked={true}
                        />
                        <Radio
                            id="origine_nom_usage_mere"
                            name="usager[origineNomDUsage]"
                            value="mere"
                            label="Mère"
                        />
                        {isMajeur && (
                            <>
                                <Radio
                                    id="origine_nom_usage_epoux"
                                    name="usager[origineNomDUsage]"
                                    value="epoux"
                                    label="Époux"
                                />
                                <Radio
                                    id="origine_nom_usage_epouse"
                                    name="usager[origineNomDUsage]"
                                    value="epouse"
                                    label="Épouse"
                                />
                            </>
                        )}
                    </Fieldset>

                    {isMajeur && (
                        <Fieldset
                            legend="Souhaitez-vous faire apparaître un mot devant le nom d'usage ?"
                            className="col"
                        >
                            <Radio
                                id="mot_avant_nom_usage_aucun"
                                name="usager[motAvantNomDUsage]"
                                value="Aucun"
                                label="Non"
                                defaultChecked={true}
                            />
                            <Radio
                                id="mot_avant_nom_usage_epoux"
                                name="usager[motAvantNomDUsage]"
                                value="epoux(se)"
                                label="époux(se)"
                            />
                            <Radio
                                id="mot_avant_nom_usage_veuf"
                                name="usager[motAvantNomDUsage]]"
                                value="veuf(ve)"
                                label="veuf(ve)"
                            />
                        </Fieldset>
                    )}
                </div>
            )}
        </>
    );
}
