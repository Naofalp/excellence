import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-social">
          <a
            href="https://www.instagram.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social_icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social_icon"
          >
            <FaFacebook />
          </a>
        </div>

        <div className="footer-wrights">
          <p className="footer-wrights_copywright">© Copyright 2025 – Excellence Transferts – Tous droits réservés</p>
          <p className="footer-wrights_credit" >Réalisé par <a href="https://naofalpereira.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>NPereira</a></p>
        </div>
      </footer>
    </>
  );
}