import { Link } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";

import "./Home.css";

function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="container-fluid px-4 px-lg-5">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <span className="home-hero__tag">
                Frutas frescas em Araçatuba
              </span>

              <h1 className="home-hero__title">
                Mais sabor, praticidade e saúde no seu dia.
              </h1>

              <p className="home-hero__description">
                Escolha caixas de frutas, potes prontos para consumo e combos
                especiais. Receba tudo selecionado e preparado com cuidado.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link className="btn btn-warning btn-lg" to="/loja">
                  Comprar agora
                </Link>

                <Link className="btn btn-outline-light btn-lg" to="/assinatura">
                  Conhecer o Clube Fruuv
                </Link>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="home-hero__visual">
                <div className="home-hero__placeholder">
                  <i className="bi bi-basket2-fill"></i>

                  <span>Imagem principal dos produtos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-products">
        <div className="container-fluid px-4 px-lg-5">
          <div className="featured-products__header">
            <div>
              <span className="section-tag">Produtos da Fruuv</span>

              <h2>Produtos em destaque</h2>

              <p>
                Conheça algumas opções de caixas, potes e combos preparados para
                diferentes momentos do dia.
              </p>
            </div>

            <Link className="btn btn-outline-success" to="/loja">
              Ver todos os produtos
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>

          <div className="row g-4">
            {products.map((product) => (
              <div className="col-sm-6 col-xl-3" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <div className="container-fluid px-4 px-lg-5">
          <div className="how-it-works__header">
            <span className="section-tag">Compra simples e rápida</span>

            <h2>Como funciona</h2>

            <p>
              O cliente escolhe os produtos, informa o endereço, realiza o
              pagamento e acompanha a preparação do pedido.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-xl-3">
              <article className="how-it-works__card">
                <span className="how-it-works__number">1</span>

                <div className="how-it-works__icon">
                  <i className="bi bi-basket2"></i>
                </div>

                <h3>Escolha os produtos</h3>

                <p>
                  Navegue pela loja e escolha caixas, potes ou combos de frutas.
                </p>
              </article>
            </div>

            <div className="col-md-6 col-xl-3">
              <article className="how-it-works__card">
                <span className="how-it-works__number">2</span>

                <div className="how-it-works__icon">
                  <i className="bi bi-geo-alt"></i>
                </div>

                <h3>Informe a entrega</h3>

                <p>
                  Cadastre o endereço e selecione o dia e o período disponível.
                </p>
              </article>
            </div>

            <div className="col-md-6 col-xl-3">
              <article className="how-it-works__card">
                <span className="how-it-works__number">3</span>

                <div className="how-it-works__icon">
                  <i className="bi bi-credit-card"></i>
                </div>

                <h3>Realize o pagamento</h3>

                <p>
                  Pague por Pix, cartão de crédito ou outros meios integrados.
                </p>
              </article>
            </div>

            <div className="col-md-6 col-xl-3">
              <article className="how-it-works__card">
                <span className="how-it-works__number">4</span>

                <div className="how-it-works__icon">
                  <i className="bi bi-truck"></i>
                </div>

                <h3>Receba seu pedido</h3>

                <p>
                  Acompanhe o status e receba os produtos no endereço informado.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="fruuv-club">
        <div className="container-fluid px-4 px-lg-5">
          <div className="fruuv-club__box">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="fruuv-club__tag">Clube Fruuv</span>

                <h2>Economize em todos os pedidos.</h2>

                <p className="fruuv-club__description">
                  Assine o Clube Fruuv e tenha acesso a descontos exclusivos,
                  benefícios especiais e condições diferenciadas em suas
                  compras.
                </p>

                <div className="row g-3 fruuv-club__benefits">
                  <div className="col-sm-6">
                    <div className="fruuv-club__benefit">
                      <i className="bi bi-percent"></i>

                      <div>
                        <strong>Desconto exclusivo</strong>
                        <span>Economia em todos os produtos.</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="fruuv-club__benefit">
                      <i className="bi bi-gift"></i>

                      <div>
                        <strong>Ofertas especiais</strong>
                        <span>
                          Promoções disponíveis apenas para assinantes.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="fruuv-club__benefit">
                      <i className="bi bi-truck"></i>

                      <div>
                        <strong>Benefícios na entrega</strong>
                        <span>Condições diferenciadas conforme o plano.</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="fruuv-club__benefit">
                      <i className="bi bi-stars"></i>

                      <div>
                        <strong>Produtos exclusivos</strong>
                        <span>Combos e campanhas especiais para membros.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Link className="btn btn-warning btn-lg mt-4" to="/assinatura">
                  Conhecer o Clube Fruuv
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>

              <div className="col-lg-5">
                <div className="fruuv-club__plan">
                  <span className="fruuv-club__plan-label">
                    Plano demonstrativo
                  </span>

                  <h3>Clube Fruuv</h3>

                  <div className="fruuv-club__price">
                    <span>R$</span>
                    <strong>19,90</strong>
                    <small>/mês</small>
                  </div>

                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      10% de desconto nos produtos
                    </li>

                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Promoções exclusivas
                    </li>

                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Benefícios em entregas
                    </li>

                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Cancelamento pelo painel
                    </li>
                  </ul>

                  <Link
                    className="btn btn-success btn-lg w-100"
                    to="/assinatura"
                  >
                    Quero ser assinante
                  </Link>

                  <small className="fruuv-club__notice">
                    Valor e benefícios apresentados apenas para demonstração.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fruuv-benefits">
        <div className="container-fluid px-4 px-lg-5">
          <div className="fruuv-benefits__header">
            <span className="section-tag">Por que escolher a Fruuv</span>

            <h2>Qualidade, praticidade e cuidado em cada pedido.</h2>

            <p>
              Uma experiência pensada para facilitar a compra de frutas frescas,
              desde a escolha dos produtos até a entrega.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-xl-3">
              <article className="fruuv-benefits__card">
                <div className="fruuv-benefits__icon">
                  <i className="bi bi-check2-circle"></i>
                </div>

                <h3>Frutas selecionadas</h3>

                <p>
                  Produtos escolhidos com atenção à qualidade, aparência e
                  frescor.
                </p>
              </article>
            </div>

            <div className="col-md-6 col-xl-3">
              <article className="fruuv-benefits__card">
                <div className="fruuv-benefits__icon">
                  <i className="bi bi-droplet"></i>
                </div>

                <h3>Preparo cuidadoso</h3>

                <p>
                  Potes higienizados e preparados para oferecer praticidade no
                  dia a dia.
                </p>
              </article>
            </div>

            <div className="col-md-6 col-xl-3">
              <article className="fruuv-benefits__card">
                <div className="fruuv-benefits__icon">
                  <i className="bi bi-clock-history"></i>
                </div>

                <h3>Compra rápida</h3>

                <p>
                  Escolha os produtos, faça o pagamento e acompanhe o pedido
                  pelo site.
                </p>
              </article>
            </div>

            <div className="col-md-6 col-xl-3">
              <article className="fruuv-benefits__card">
                <div className="fruuv-benefits__icon">
                  <i className="bi bi-chat-dots"></i>
                </div>

                <h3>Atendimento próximo</h3>

                <p>
                  Suporte para dúvidas sobre produtos, pedidos, entregas e
                  assinaturas.
                </p>
              </article>
            </div>
          </div>

          <div className="fruuv-benefits__cta">
            <div>
              <h3>Precisa de ajuda para fazer seu pedido?</h3>

              <p>
                Fale com a equipe da Fruuv pelo WhatsApp e tire suas dúvidas.
              </p>
            </div>

            <a
              className="btn btn-success btn-lg"
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              <i className="bi bi-whatsapp me-2"></i>
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
