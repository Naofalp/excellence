import { useEffect, useRef } from "react";

export default function ReservationWidget() {
    const iframeRef = useRef(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const doc = iframe.contentWindow.document;
        doc.open();
        doc.write(`
      <!DOCTYPE html>
      <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              margin: 0;
              padding: 0;
              overflow: hidden;
            }
            .p-1 {
                box-shadow: none !important;
            }
            iFrame {
                border: none;
                box-shadow: none;
            }
          </style>
        </head>
        <body>
          <div id="appsolu-widget"></div>
          <script 
            type="text/javascript" 
            src="https://taxi.appsolu.net/booking/emb.js" 
            g="T34VTA" 
            i="2477" 
            b="1" 
            l="fr">
          </script>
        </body>
      </html>
    `);
        doc.close();
    }, []);

    return (
        <section className="ReservationWidget-container">
            <iframe
                ref={iframeRef}
                title="Réservation Excellence Transfert"
                width="100%"
                style={{
                    border: "none",
                    overflow: "hidden",
                    boxShadow: "none",
                }}
            />
        </section>
    );
}
