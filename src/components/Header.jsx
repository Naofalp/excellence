import Nav from './Nav';
import logo from "../assets/logos/excellence-logo-png-rogne.png";
import { NavLink } from "react-router-dom";


export default function Header() {
    return <>
        <header className='headerBand'>
            <div className='headerBand_content'>
                <NavLink to="/">
                    <img
                        src={logo}
                        alt="logo du service de taxi excellence transfert "
                        className="headerBand_logo"
                    />
                </NavLink>
                <Nav />
            </div>
        </header>
    </>
}