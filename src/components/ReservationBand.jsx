import ReservationWidget from "./ReservationWidget";

export default function ReservationBand() {
    return <>
        <section className="reservationBand-container">
            <div className="reservationBand-container_bloctext">
                <h2>Réservation</h2>
                <p>Réservez votre chauffeur privé en quelques clics. Personnalisez votre trajet selon vos besoins (ville de départ, destination, horaire, passagers, bagages) 
                et découvrez immédiatement le tarif VTC sans surprise.
                 Réservation 100 % en ligne, simple, rapide et sécurisée. Profitez d’un service de transport haut de gamme, fiable et transparent partout en Occitanie.</p>
            </div>
            <ReservationWidget />

        </section>
    </>

}