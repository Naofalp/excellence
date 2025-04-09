import aboutBandPro from '../assets/images/about-costume.png'


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
                    Que ce soit pour un voyage d'affaires, des vacances ou encore raisons médicales.
                    Excellence transfert est à votre disposition pour vous proposer un service de transport fiable et adapté pour tout vos trajets.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </section>
    </>

}


