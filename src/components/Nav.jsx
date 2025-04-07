import { Link } from "react-router-dom"

export default function Header() {
    return <>
        <nav>
            <Link to="/">
                Acceuil
            </Link>
            <Link to="/">
                LOGO
            </Link>
            <Link to="/Services">
                Services
            </Link>
        </nav>
    </>
}