
"use client";

export default function CatalogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-box">
      <h2>Щось пішло не так!</h2>
      <p>Не вдалося завантажити каталог товарів.</p>
      <p className="error-detail">{error.message}</p>

      <button
        className="button"
        onClick={() => reset()}
      >
        Спробувати ще раз
      </button>
    </div>
  );
}
