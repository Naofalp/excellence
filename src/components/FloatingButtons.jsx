import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <>
      <a
        href="tel:+33760492366"
        className="floating-button phone"
        aria-label="Appeler Excellence Transferts"
      >
        <FaPhoneAlt />
      </a>

      <a
        href="https://wa.me/33760492366"
        className="floating-button whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter via WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}
