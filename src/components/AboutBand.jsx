import aboutBandPro from '../assets/images/about-costume.webp'


export default function AboutBand() {
    return <>
        <section className="aboutBand-container">
            <img
                src={aboutBandPro}
                alt="chauffeur excellence transfert tenue professionnelle costume et montre"
            />
            <div className='aboutBand-container_textdiv'>
                <h2>
                    Profitez de notre savoir-faire !
                </h2>
                <hr className="aboutBand-container_textdiv_divider" />
                <p>

                    Depuis plus de 7 ans, Excellence Transfert met à votre disposition un chauffeur privé expérimenté pour tous vos besoins en transport. Que vous partiez pour un voyage d'affaires, une escapade touristique ou un rendez-vous médical, nous assurons un service fiable, ponctuel et discret.
                    Notre flotte de véhicules confortables s’adapte à chaque demande : transferts aéroport ou gare, mise à disposition, événements privés ou trajets longue distance. Avec Excellence Transfert, vous êtes entre de bonnes mains.

                </p>
            </div>
        </section>
    </>

}


