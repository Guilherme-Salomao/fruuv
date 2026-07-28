import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="fruuv-footer">
      <div className="container-fluid px-4 px-lg-5">
        <div className="row g-5">
          <div className="col-lg-4">
            <Link className="fruuv-footer__brand" to="/">
              Fruuv
            </Link>

            <p className="fruuv-footer__description">
              Frutas frescas, caixas, potes e combos preparados para oferecer
              mais praticidade e sabor no dia a dia.
            </p>

            <div className="fruuv-footer__social">
              <a
                href="#"
                aria-label="Instagram"
                onClick={(event) => event.preventDefault()}
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                onClick={(event) => event.preventDefault()}
              >
                <i className="bi bi-whatsapp"></i>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                onClick={(event) => event.preventDefault()}
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <h3>Navegação</h3>

            <ul>
              <li>
                <Link to="/">Início</Link>
              </li>

              <li>
                <Link to="/loja">Loja</Link>
              </li>

              <li>
                <Link to="/assinatura">Clube Fruuv</Link>
              </li>

              <li>
                <Link to="/carrinho">Carrinho</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <h3>Atendimento</h3>

            <ul>
              <li>
                <i className="bi bi-geo-alt me-2"></i>
                Araçatuba - SP
              </li>

              <li>
                <i className="bi bi-whatsapp me-2"></i>
                WhatsApp demonstrativo
              </li>

              <li>
                <i className="bi bi-envelope me-2"></i>
                contato@fruuv.com.br
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3">
            <h3>Horários de entrega</h3>

            <ul>
              <li>
                <strong>Caixas de frutas</strong>
                <span>Quinta e sexta-feira</span>
              </li>

              <li>
                <strong>Potes de frutas</strong>
                <span>Segunda a sexta-feira</span>
              </li>

              <li>
                <span>Das 13h30 às 17h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="fruuv-footer__payments">
          <span>Formas de pagamento previstas:</span>

          <div>
            <span>Pix</span>
            <span>Cartão de crédito</span>
            <span>Mercado Pago</span>
          </div>
        </div>

        <div className="fruuv-footer__bottom">
          <p>© 2026 Fruuv. Todos os direitos reservados.</p>

          <p>
            Projeto demonstrativo. Produtos, valores e informações poderão ser
            alterados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
