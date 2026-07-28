import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header className="fruuv-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-4 px-lg-5">
          <NavLink className="navbar-brand fw-bold" to="/">
            Fruuv
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#fruuvNavbar"
            aria-controls="fruuvNavbar"
            aria-expanded="false"
            aria-label="Abrir menu de navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="fruuvNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Início
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/loja">
                  Loja
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/assinatura">
                  Clube Fruuv
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="btn btn-outline-light ms-lg-2"
                  to="/carrinho"
                >
                  <i className="bi bi-cart3 me-2"></i>
                  Carrinho
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="fruuv-info-bar">
        <div className="container-fluid px-4 px-lg-5">
          <div className="fruuv-info-bar__content">
            <span>
              <i className="bi bi-truck me-2"></i>
              Entregas em Araçatuba
            </span>

            <span>
              <i className="bi bi-shield-check me-2"></i>
              Pagamento seguro
            </span>

            <span>
              <i className="bi bi-stars me-2"></i>
              Descontos para assinantes
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
