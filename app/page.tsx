
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <p className="eyebrow">ТЕХНІКА ДЛЯ ТВОГО ЖИТТЯ</p>

      <h1>Відкрий світ сучасних технологій</h1>

      <p>
        У TechStore ти знайдеш сучасні смартфони,
        потужні ноутбуки та техніку для щоденних потреб.
      </p>

      <Link href="/catalog" className="button">
        Перейти до каталогу
      </Link>
    </section>
  );
}
