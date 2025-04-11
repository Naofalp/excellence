import Banner from "../components/Banner";
import AboutBand from "../components/AboutBand";
import ServiceBand from "../components/ServicesBand";
import Avantages from "../components/Avantages";
import ReservationBand from "../components/ReservationBand";

export default function Home() {
    return <>
        <main>
            <Banner />
            <AboutBand />
            <ServiceBand />
            <Avantages />
            <ReservationBand />
        </main>
    </>
}