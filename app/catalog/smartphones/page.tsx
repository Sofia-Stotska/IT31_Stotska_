
const smartphones = [
  { name: "Samsung Galaxy", price: 24999 },
  { name: "iPhone 17", price: 39999 },
  { name: "Xiaomi Redmi", price: 11999 },
];

export default function SmartphonesPage() {
  return (
    <div className="product-grid">
      {smartphones.map((phone) => (
        <article className="product-card" key={phone.name}>
          <span className="product-icon">📱</span>
          <h2>{phone.name}</h2>
          <strong>
            {phone.price.toLocaleString("uk-UA")} грн
          </strong>
        </article>
      ))}
    </div>
  );
}
