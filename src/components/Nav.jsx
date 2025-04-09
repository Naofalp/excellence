import { NavLink } from "react-router-dom";
import logo from "../assets/logos/excellence-logo-png-rogne.png";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";


export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);

    {/** Pour fermer le menu au click d'un lien */}
    const handleLinkClick = () => {
        setMenuOpen(false)
    }

    return <>

        {/** Boutton menu depliant mobile */}
        <button className="nav-menu-toggle">
            <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={24} color="white" label="Montrer menu" />
        </button>

        <nav className={`nav-header${menuOpen ? "_open" : ""}`}>
            <NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "nav-header_link active-link" : "nav-header_link")}>
                Acceuil
            </NavLink>
            <NavLink to="/" className="nav-header_link">
                <img
                    src={logo}
                    alt="logo du service de taxi excellence transfert "
                />
            </NavLink>
            <NavLink to="/Services" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "nav-header_link active-link" : "nav-header_link")}>
                Services
            </NavLink>
        </nav>
    </>
}