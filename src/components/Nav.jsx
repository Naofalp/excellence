import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logos/excellence-logo-png-rogne.png";

export default function Header() {
    return <>
        <nav className="nav-header">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-header_link active-link" : "nav-header_link")}>
                Acceuil
            </NavLink>
            <NavLink to="/" className="nav-header_link">
                <img
                    src={logo}
                    alt="logo du service de taxi excellence transfert "
                />
            </NavLink>
            <NavLink to="/Services" className={({ isActive }) => (isActive ? "nav-header_link active-link" : "nav-header_link")}>
                Services
            </NavLink>
        </nav>
    </>
}