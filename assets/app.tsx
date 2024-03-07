/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { TypeDemande, useDemande } from "./components/typeDemande";

function CerfaForm({}) {
    const { demande, setType, setMajorite } = useDemande();

    return (
        <>
            <TypeDemande
                demande={demande}
                setType={setType}
                setMajorite={setMajorite}
            />
        </>
    );
}

const form = document.getElementById("react-form");
if (form) {
    ReactDOM.createRoot(form).render(
        <React.StrictMode>
            <CerfaForm />
        </React.StrictMode>
    );
}
