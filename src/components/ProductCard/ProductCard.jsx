import "./ProductCard.css";

function ProductCard({ product }) {
  const formattedPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const formattedSubscriberPrice = product.subscriberPrice.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    },
  );

  return (
    <article className="product-card">
      <div className="product-card__image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="product-card__placeholder">
            <i className="bi bi-basket2-fill"></i>
            <span>Imagem do produto</span>
          </div>
        )}

        <span className="product-card__badge">{product.category}</span>
      </div>

      <div className="product-card__content">
        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-card__prices">
          <div>
            <span className="product-card__price-label">Preço normal</span>
            <strong>{formattedPrice}</strong>
          </div>

          <div className="product-card__subscriber">
            <span>Assinante Fruuv</span>
            <strong>{formattedSubscriberPrice}</strong>
          </div>
        </div>

        <button className="btn btn-success w-100">
          <i className="bi bi-cart-plus me-2"></i>
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
