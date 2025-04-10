import img1 from "../assets/images/decollage.jpg";
import img2 from "../assets/images/chauffeur.jpg";
import img3 from "../assets/images/bagues.jpg";
import img4 from "../assets/images/mannequin.jpg";
import img5 from "../assets/images/mer-banner.jpg";

export default function ServiceBand() {

    const servicesLigne1 = [
        { title: "Transferts", text: "Transfert domicile, aéroport, gare ou encore hôtel : ponctualité et confort garantis.", bg: img1 },
        { title: "Mise à disposition", text: "Chauffeur privé à l’heure ou à la journée pour tous vos déplacements sur mesure.", bg: img2 },
    ];

    const servicesLigne2 = [
        { title: "Événements", text: "Transport élégant pour mariage, baptême ou soirée privée, avec service personnalisé.", bg: img3 },
        { title: "Médical", text: "Transport assis personnalisé (TAP) vers hôpitaux, cliniques et rendez-vous médicaux en toute sécurité.", bg: img4 },
        { title: "Tourisme", text: "Partez à la découverte de l’Hérault, de Montpellier à Béziers par Agde et Sète, avec un VTC haut de gamme.", bg: img5 },
    ]


    return <>
        <section className="ServiceBand-container">
            <h2> NOS PRESTATIONS </h2>


            <div className="ServiceBand-container_flex">
                <div className="ServiceBand-container_ligne"> {/** Premiere ligne de services */}
                    {servicesLigne1.map((service, index) => (
                        <div key={index} className={`ServiceBand-card cardLigne1`}
                        style={{
                            backgroundImage: `url(${service.bg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: 'white'
                        }}
                        >
                            <div className="ServiceBand-card_overlay"></div>

                            <h3>{service.title}</h3>
                            <p>{service.text}</p>
                            <button>Voir plus</button>
                        </div>
                    ))}
                </div>

                <div className="ServiceBand-container_ligne"> {/** Deuxième ligne de services */}
                    {servicesLigne2.map((service, index) => (
                        <div key={index} className={`ServiceBand-card cardLigne2`}
                        style={{
                            backgroundImage: `url(${service.bg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: 'white'
                        }}
                        >
                            <div className="ServiceBand-card_overlay"></div>

                            <h3>{service.title}</h3>
                            <p>{service.text}</p>
                            <button>Voir plus</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
}