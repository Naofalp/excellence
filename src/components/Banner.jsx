import backgroundBanner from '../assets/images/voitures.webp';

export default function Banner() {
    return <>
        <section className="banner-container"
            style={{
                backgroundImage: `url(${backgroundBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }} >

            <div className="banner-container_overlay"></div>

            <h1>
                EXCELLENCE TRANSFERTS
            </h1>
            <h2>
                RESERVEZ VOTRE TAXI DISPONIBLE IMMÉDIATEMENT
            </h2>
            <p className="banner-container_presentation">
                Un chauffeur professionnel assure vos déplacements personnalisés, courts ou longues distances. Devenez maîtres de vos trajets.
            </p>
            <div className="button-container">
                <a className="button-container_actions" href="tel:+33760492366">
                    Appeler : 07 60 49 23 66
                </a>
                <button className="button-container_actions" >
                    Reserver
                </button>
            </div>

            <hr className="banner-container_divider" />

            <p className="banner-container_from">A votre service <span>depuis 2018</span>– Basé à Usclas-d'Hérault (34).</p>
        </section>
    </>
}