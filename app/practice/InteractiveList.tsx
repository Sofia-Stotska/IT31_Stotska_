"use client";

import { useState } from "react";

export type Lesson = {
  id: number;
  day: string;
  subject: string;
  room: string;
};

type Props = {
  lessons: Lesson[];
};

const DAYS = ["Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця"];

export default function InteractiveList({ lessons }: Props) {
  const [selectedDay, setSelectedDay] = useState<string>("all");
  const [showRooms, setShowRooms] = useState<boolean>(true);

  const filtered =
    selectedDay === "all"
      ? lessons
      : lessons.filter((lesson) => lesson.day === selectedDay);

  return (
    <div>
      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <label>
          День тижня:{" "}
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            <option value="all">Усі дні</option>
            {DAYS.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </label>

        <button onClick={() => setShowRooms((prev) => !prev)}>
          {showRooms ? "Приховати аудиторії" : "Показати аудиторії"}
        </button>
      </div>

      {filtered.length === 0 ? (
        <p>На цей день занять немає.</p>
      ) : (
        <ul>
          {filtered.map((lesson) => (
            <li key={lesson.id}>
              <strong>{lesson.day}</strong>: {lesson.subject}
              {showRooms && <span> — ауд. {lesson.room}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}