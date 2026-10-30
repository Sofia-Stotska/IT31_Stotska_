import InteractiveList, { type Lesson } from "./InteractiveList";

const lessons: Lesson[] = [
  { id: 1, day: "Понеділок", subject: "Програмування Python", room: "201" },
  { id: 2, day: "Понеділок", subject: "Вища математика", room: "305" },
  { id: 3, day: "Вівторок", subject: "Веб-технології", room: "112" },
  { id: 4, day: "Середа", subject: "Бази даних", room: "208" },
  { id: 5, day: "Четвер", subject: "Англійська мова", room: "404" },
  { id: 6, day: "П’ятниця", subject: "Алгоритми та структури даних", room: "210" },
];

export default function PracticePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Розклад занять</h1>
      <p>Загальна кількість занять: {lessons.length}</p>

      <InteractiveList lessons={lessons} />
    </main>
  );
}