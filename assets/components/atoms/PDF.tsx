import React from "react";

export function PDF({ pdf }: { pdf: string }) {
    return (
        <div className="mt-3">
            {pdf == "" && <p>Votre cerfa ici</p>}
            {pdf && (
                <p>
                    <a
                        href={"data:application/pdf;base64," + pdf}
                        download="cerfa.pdf"
                        className="btn btn-success mt-5 mb-5"
                    >
                        Télécharger le PDF
                    </a>
                </p>
            )}
            <iframe
                id="preview"
                src={pdf && "data:application/pdf;base64," + pdf}
                width="100%"
                style={{ aspectRatio: "210/297" }}
            ></iframe>
        </div>
    );
}
