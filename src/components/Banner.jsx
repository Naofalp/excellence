import merBanner from '../assets/images/mer-banner-modif.jpg';

export default function Banner() {
    return <>
        <section className="banner-container"
            style={{
                backgroundImage: `url(${merBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <h1>
                EXCELLENCE TRANSFERTS
            </h1>
            <h2>
                RESERVEZ VOTRE TAXI DISPONIBLE IMMÉDIATEMENT
            </h2>
            <p className="banner-container_presentation">
                Un chauffeur professionnel assure vos déplacements personnalisés, courts ou longues distances. Vers les gares, aeroports et hôpitaux.
            </p>
            <div className="button-container">
                <a className="button-container_actions" href="tel:+1234567890">
                    Appeler : 01 02 03 04 05
                </a>
                <button className="button-container_actions" >
                    Reserver
                </button>
            </div>

            <hr className="banner-container_divider" />

            <p className="banner-container_from">A votre service <span>depuis 2018</span>, Usclas d'Hérault.</p>
        </section>
    </>
}