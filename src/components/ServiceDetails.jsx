import img1 from "../assets/images/decollage_11zon.webp";
import img2 from "../assets/images/chauffeur_11zon.webp";
import img3 from "../assets/images/bagues_11zon.webp";
import img4 from "../assets/images/mannequin.webp";
import img5 from "../assets/images/mer-banner_11zon.webp";

export default function ServiceDetails() {
    return <>
        <section className="serviceDetails-container">
            <div className="serviceDetails-detail">
                <div className="serviceDetails-detail_bloctext align-right">
                    <h2>Transferts</h2>
                    <p> Vous avez un avion à prendre ou un train à ne pas manquer ? Nos transferts vers les aéroports (Montpellier, Marseille),
                        gares (Saint-Roch, Sud de France) ou votre domicile sont assurés avec ponctualité. Voyagez sereinement avec un chauffeur privé expérimenté,
                        à bord d’un véhicule confortable et haut de gamme, sur de courtes ou longues distances.
                    </p>
                </div>
                <img src={img1} alt="Avion au milieu des nuages avec coucher de soleil" className="serviceDetails-img" />
            </div>
            <div className="serviceDetails-detail">
                <img src={img2} alt="Chauffeur de taxi et VTC au volant de sa voiture vu de derrière" className="serviceDetails-img" />
                <div className="serviceDetails-detail_bloctext ">
                    <h2>Mise à disposition</h2>
                    <p> Besoin d’un chauffeur dédié pour quelques heures ou toute une journée ? Notre service de mise à disposition VTC à Montpellier vous
                        garantit un accompagnement sur-mesure, que ce soit pour un rendez-vous professionnel, une journée shopping ou des déplacements multiples.
                        Confort, flexibilité et discrétion sont nos priorités.
                    </p>
                </div>
            </div>
            <div className="serviceDetails-detail">
                <div className="serviceDetails-detail_bloctext align-right">
                    <h2>Événements</h2>
                    <p> Mariage, baptême, séminaire ou soirée d’entreprise ? Confiez vos trajets à Excellence Transferts. Nous assurons vos déplacements événementiels
                        avec élégance et ponctualité. Nos véhicules haut de gamme et notre service de chauffeur privé ajoutent une touche d’exception à vos moments les
                        plus importants.
                    </p>
                </div>
                <img src={img3} alt="Bagues de mariages posées une sur l'autres" className="serviceDetails-img" />
            </div>
            <div className="serviceDetails-detail">
                <img src={img4} alt="Mannequin de médecine" className="serviceDetails-img" />
                <div className="serviceDetails-detail_bloctext">
                    <h2>Médical</h2>
                    <p> Pour vos rendez-vous médicaux, consultations ou soins réguliers, profitez d’un service fiable et humain. Nous proposons des transports assis
                        professionnalisés (TAP) pour vos trajets vers les centres hospitaliers, cliniques ou maisons de santé. Notre chauffeur veille à votre confort et votre
                        ponctualité, en toute confidentialité.
                    </p>
                </div>
            </div>
            <div className="serviceDetails-detail">
                <div className="serviceDetails-detail_bloctext align-right">
                    <h2>Tourisme</h2>
                    <p> Découvrez les merveilles de l’Hérault et de l’Occitanie avec un chauffeur privé local. Que ce soit pour visiter le Cap d’Agde, les plages de Palavas,
                        les rues historiques de Montpellier, les avenues de Béziers ou encore les domaines viticoles, notre service de VTC touristique vous permet de voyager
                        à votre rythme, en toute sérénité.
                    </p>
                </div>
                <img src={img5} alt="Mer qui deborde sur la plage de Montpellier Héraults" className="serviceDetails-img" />
            </div>
        </section>
    </>
}