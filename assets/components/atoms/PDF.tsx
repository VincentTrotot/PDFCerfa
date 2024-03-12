import React from "react";

export function PDF({ pdf }: { pdf: string }) {
    if (pdf === "") return;

    return (
        <div className="mt-3">
            <object
                data={"data:application/pdf;base64," + pdf}
                type="application/pdf"
                width="100%"
                style={{ aspectRatio: "210/297" }}
            ></object>
            <p>
                <a href={"data:application/pdf;base64," + pdf} target="_blank">
                    Voir le PDF
                </a>
            </p>
            <p>
                <a
                    href={"data:application/pdf;base64," + pdf}
                    download="cerfa.pdf"
                >
                    Télécharger le PDF
                </a>
            </p>
        </div>
    );
}
