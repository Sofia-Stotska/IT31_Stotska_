
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const products = [
  { name: "Samsung Galaxy", price: 24999, category: "Смартфон" },
  { name: "iPhone 17", price: 39999, category: "Смартфон" },
  { name: "Lenovo IdeaPad", price: 28999, category: "Ноутбук" },
  { name: "ASUS VivoBook", price: 31999, category: "Ноутбук" },
];

export default async function CatalogPage() {
  await delay(2000);
  
  return (
    <div className="product-grid">
      {products.map((product) => (
        <article className="product-card" key={product.name}>
          <span className="product-icon">
            {product.category === "Смартфон" ? "📱" : "💻"}
          </span>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <strong>
            {product.price.toLocaleString("uk-UA")} грн
          </strong>
        </article>
      ))}
    </div>
  );
}
