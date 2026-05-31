import pikachu from "../static/pikachu.png";
import lilpikachu from "../static/lilpikachu.png";
import amongus from "../static/amongus.png";
import multiply from "../static/multiply-pokemon.png";
import { useAppStore } from "./baseLogic";

export const Levels = () => {
  const { level, setLevel } = useAppStore();
  return (
    <div className="flex justify-center items-center gap-4 w-full">
      <div className="">Уровень выбирается тут:</div>
      <div className="flex h-20 border-teal-200">
        <img
          src={lilpikachu}
          id="veryeasy"
          alt="gif"
          onClick={() => setLevel("veryeasy")}
          title="Детский сад"
          className={`rounded-xl cursor-pointer h-20 border-4 ${level === "veryeasy" ? "border-teal-200" : ""} hover:border-teal-100`}
        />
        <img
          src={pikachu}
          id="easy"
          alt="gif"
          onClick={() => setLevel("easy")}
          title="Первый класс"
          className={`rounded-xl cursor-pointer h-20 border-4 ${level === "easy" ? "border-teal-200" : ""} hover:border-teal-100`}
        />

        <img
          src={amongus}
          id="complex"
          alt="gif"
          title="Второй класс"
          onClick={() => setLevel("complex")}
          className={`rounded-xl cursor-pointer h-20 border-4  hover:border-teal-100 ${level === "complex" ? "border-teal-200" : ""}`}
        />
        <img
          src={multiply}
          id="complex"
          alt="gif"
          title="Таблица умножения"
          onClick={() => setLevel("multiply")}
          className={`rounded-xl cursor-pointer h-20 border-4  hover:border-teal-100 ${level === "multiply" ? "border-teal-200" : ""}`}
        />
      </div>
    </div>
  );
};
