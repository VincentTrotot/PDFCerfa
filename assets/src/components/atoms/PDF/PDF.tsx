import React from "react";
import { clsx } from "clsx";

import styles from "./PDF.module.css";
import globals from "../../../styles/modules/globals.module.css";

export function PDF({ pdf, erasePdf }: { pdf: string; erasePdf: () => void }) {
    if (pdf == "") return;

    return (
        <div className={styles.pdfModal}>
            <div className={styles.pdfModalContainer}>
                <iframe
                    id="preview"
                    className={styles.preview}
                    src={pdf && "data:application/pdf;base64," + pdf}
                ></iframe>
                <div className={clsx(styles.buttons)}>
                    <a
                        href={"data:application/pdf;base64," + pdf}
                        download="cerfa.pdf"
                        className={clsx(styles.button, styles.download)}
                    >
                        Télécharger le PDF
                    </a>
                    <button
                        className={clsx(styles.button, styles.continue)}
                        onClick={erasePdf}
                    >
                        Continuer les modifications
                    </button>
                </div>
            </div>
        </div>
    );
}
