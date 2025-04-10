import Nav from './Nav';
import logo from "../assets/logos/excellence-logo-png-rogne.png";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {

    const location = useLocation();
    const isServicesPage = location.pathname === "/Services";  

    return <>
        <header className={`headerBand ${isServicesPage ? "headerBand--red" : ""}`}>
            <div className='headerBand_content'>
                <NavLink to="/">
                    <img
                        src={logo}
                        alt="logo du service de taxi et vtc excellence transfert "
                        className="headerBand_logo"
                    />
                </NavLink>
                <Nav />
            </div>
        </header>
    </>
}