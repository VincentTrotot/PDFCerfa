import React from "react";

export function PDF({ pdf, erasePdf }: { pdf: string; erasePdf: () => void }) {
    if (pdf == "") return;

    return (
        <div className="pdfModal">
            <div className="pdfModalContainer">
                <iframe
                    id="preview"
                    src={pdf && "data:application/pdf;base64," + pdf}
                ></iframe>
                <div>
                    <a
                        href={"data:application/pdf;base64," + pdf}
                        download="cerfa.pdf"
                        className="btn btn-light mt-5 mb-5 mx-2"
                    >
                        Télécharger le PDF
                    </a>
                    <button
                        className="btn btn-outline-light mx-2"
                        onClick={erasePdf}
                    >
                        Continuer les modifications
                    </button>
                </div>
            </div>
        </div>
    );
}
