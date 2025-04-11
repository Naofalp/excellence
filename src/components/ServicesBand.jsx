import img1 from "../assets/images/decollage_11zon.webp";
import img2 from "../assets/images/chauffeur_11zon.webp";
import img3 from "../assets/images/bagues_11zon.webp";
import img4 from "../assets/images/mannequin.webp";
import img5 from "../assets/images/mer-banner_11zon.webp";
import { Link } from "react-router-dom";

export default function ServiceBand() {

    const servicesLigne1 = [
        { title: "Transferts", text: "Transfert domicile, aéroport, gare ou encore hôtel : ponctualité et confort garantis.", bg: img1, link: "transferts" },
        { title: "Mise à disposition", text: "Chauffeur privé à l’heure ou à la journée pour tous vos déplacements sur mesure.", bg: img2, link: "mise-a-disposition" },
    ];

    const servicesLigne2 = [
        { title: "Événements", text: "Transport élégant pour mariage, baptême ou soirée privée, avec service personnalisé.", bg: img3, link: "evenements" },
        { title: "Médical", text: "Transport assis personnalisé (TAP) vers hôpitaux, cliniques et rendez-vous médicaux en toute sécurité.", bg: img4, link: "medical" },
        { title: "Tourisme", text: "Partez à la découverte de l’Hérault, de Montpellier à Béziers par Agde et Sète, avec un VTC haut de gamme.", bg: img5, link: "tourisme" },
    ]


    return <>
        <section className="ServiceBand-container">
            <h2> NOS PRESTATIONS </h2>


            <div className="ServiceBand-container_flex">
                <div className="ServiceBand-container_ligne"> {/** Premiere ligne de services */}
                    {servicesLigne1.map((service, index) => (
                        <div key={index} className={`ServiceBand-card cardLigne1`}>
                            <img
                                src={service.bg}
                                alt={`Service ${service.title}`}
                                loading="lazy"
                                className="ServiceBand-card_bg"
                            />
                            <div className="ServiceBand-card_overlay"></div>
                            <h3>{service.title}</h3>
                            <p>{service.text}</p>
                            <Link to={`/services#${service.link}`} className="ServiceBand-card_button">
                                Voir plus
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="ServiceBand-container_ligne"> {/** Deuxième ligne de services */}
                    {servicesLigne2.map((service, index) => (
                        <div key={index} className={`ServiceBand-card cardLigne2`}>
                            <img
                                src={service.bg}
                                alt={`Service ${service.title}`}
                                loading="lazy"
                                className="ServiceBand-card_bg"
                            />
                            <div className="ServiceBand-card_overlay"></div>
                            <h3>{service.title}</h3>
                            <p>{service.text}</p>
                            <Link to={`/services#${service.link}`} className="ServiceBand-card_button">
                                Voir plus
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
}