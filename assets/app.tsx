import "./src/styles/app.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { CerfaForm } from "./src/components/organisms/CerfaForm/CerfaForm";
import { Footer } from "./src/components/atoms/Footer/Footer";

const form = document.getElementById("react-form");
if (form) {
    ReactDOM.createRoot(form).render(
        <React.StrictMode>
            <CerfaForm />
        </React.StrictMode>
    );
}

const footer = document.getElementById("react-footer");
if (footer) {
    ReactDOM.createRoot(footer).render(
        <React.StrictMode>
            <Footer></Footer>
        </React.StrictMode>
    );
}
