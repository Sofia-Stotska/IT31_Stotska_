
import Link from "next/link";

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>Каталог техніки</h1>

      <nav className="category-nav">
        <Link href="/catalog">Усі товари</Link>
        <Link href="/catalog/smartphones">Смартфони</Link>
        <Link href="/catalog/laptops">Ноутбуки</Link>
      </nav>

      {children}
    </section>
  );
}
