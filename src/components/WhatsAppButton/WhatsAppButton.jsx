import "./WhatsAppButton.css";

function WhatsAppButton() {
  const phone = "5518999999999";

  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os produtos da Fruuv.",
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      className="whatsapp-floating-button"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Fruuv pelo WhatsApp"
      title="Falar pelo WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>

      <span className="whatsapp-floating-button__text">Fale conosco</span>
    </a>
  );
}

export default WhatsAppButton;
