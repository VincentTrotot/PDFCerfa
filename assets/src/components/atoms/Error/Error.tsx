import React from "react";
import styles from "./Error.module.css";
import { Error } from "../../../hooks/useFetch";

interface ErrorProps {
    error: Error;
    resetError: () => void;
}

export function Error({ error, resetError }: ErrorProps) {
    if (error == null) return;

    return (
        <div className={styles.error}>
            <span onClick={resetError} className={styles.errorClose}>
                x
            </span>
            Un problème est survenu lors de la génération du cerfa. <br />
            Si le problème persiste, veuillez envoyer un courriel à{" "}
            <a href="mailto:">contact@vincent-trotot.fr</a>
            {error.catched && ` en indiquant le code erreur ${error.code}`}.
        </div>
    );
}
