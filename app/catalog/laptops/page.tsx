
const laptops = [
  { name: "Lenovo IdeaPad", price: 28999 },
  { name: "ASUS VivoBook", price: 31999 },
  { name: "MacBook Air", price: 49999 },
];

export default function LaptopsPage() {
  return (
    <div className="product-grid">
      {laptops.map((laptop) => (
        <article className="product-card" key={laptop.name}>
          <span className="product-icon">💻</span>
          <h2>{laptop.name}</h2>
          <strong>
            {laptop.price.toLocaleString("uk-UA")} грн
          </strong>
        </article>
      ))}
    </div>
  );
}
