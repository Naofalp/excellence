import { Link } from "react-router-dom";
import logo from "../assets/logos/excellence-logo-png-rogne.png";

export default function Header() {
    return <>
        <nav className="nav-header">
            <Link to="/" className="nav-header_link">
                Acceuil
            </Link>
            <Link to="/" className="nav-header_link">
                <img src={logo} alt="logo du service de taxi excellence transfert "/>
            </Link>
            <Link to="/Services" className="nav-header_link">
                Services
            </Link>
        </nav>
    </>
}