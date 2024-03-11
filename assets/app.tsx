import "./styles/app.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { CerfaForm } from "./components/organisms/CerfaForm";

const form = document.getElementById("react-form");
if (form) {
    ReactDOM.createRoot(form).render(
        <React.StrictMode>
            <CerfaForm />
        </React.StrictMode>
    );
}
