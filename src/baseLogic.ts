import { create } from "zustand";
import puzzled from "../static/puzzled.gif";
import happy from "../static/happy.gif";
import sad from "../static/sad.gif";

export type AppState = {
  text: string;
  equation: string;
  answer: number;
  gif: string;
  score: number;
  attempt: number;
  isRightAnswer: boolean;
  isAnswered: boolean;
  level: string;
  complexity: number;
};

export interface AppStore {
  text: string;
  equation: string;
  answer: number;
  gif: string;
  score: number;
  attempt: number;
  isRightAnswer: boolean;
  isAnswered: boolean;
  level: string;
  complexity: number;
  setStore: (data: AppState) => void;
  setText: (text: string) => void;
  setEq: (equation: string) => void;
  setAnswer: (answer: number) => void;
  setGif: (gif: string) => void;
  setScore: (score: number) => void;
  setLevel: (level: string) => void;
  setComplexity: (complexity: number) => void;
  setAttempt: (attempt: number) => void;
  setQuest: ({
    equation,
    answer,
  }: {
    equation: string;
    answer: number;
  }) => void;
  dispatch: (userAnswer: string) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  text: "Ну и сколько же будет",
  equation: "2+2",
  answer: 4,
  gif: puzzled,
  score: 0,
  attempt: 0,
  isRightAnswer: false,
  isAnswered: false,
  level: "easy",
  complexity: 1,
  setStore: (data) => set(data),
  setText: (text) => set({ text }),
  setEq: (equation) => set({ equation }),
  setAnswer: (answer) => set({ answer }),
  setLevel: (level) => set({ level }),
  setComplexity: (complexity) => set({ complexity }),
  setGif: (gif) => set({ gif }),
  setScore: (score) => set({ score }),
  setAttempt: (attempt) => set({ attempt }),
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
  increaseAttempt: () => set((state) => ({ attempt: state.attempt + 1 })),
  setQuest: ({ equation, answer }) =>
    set(() => ({ equation: equation, answer: answer })),
  dispatch: (userAnswer) =>
    set((state) => {
      let action = "";

      if (userAnswer === state.answer.toString()) {
        action = "RightAnswer";
      } else {
        action = "WrongAnswer";
      }

      if (userAnswer === "NextStep") {
        action = "NextStep";
      }

      if (userAnswer === "Reset") {
        action = "Reset";
      }
      if (userAnswer === "Start") {
        action = "Start";
      }
      switch (action) {
        case "WrongAnswer": {
          return {
            equation: `${state.equation.slice(0, -2)}=${state.answer}`,
            text: "Увы, это неправильный ответ. Слезай с пальмы и начинай думать более хорошо!",
            gif: sad,
            attempt: state.attempt + 1,
            isAnswered: true,
            isRightAnswer: false,
          };
        }

        case "RightAnswer": {
          return {
            equation: `${state.equation.slice(0, -2)}=${state.answer}`,
            text: "Да, все правильно посчитал! СуперМегаВычислитель согласен с тобой!",
            gif: happy,
            isAnswered: true,
            isRightAnswer: true,
            attempt: state.attempt + 1,
            score: state.score + 1,
          };
        }
        case "NextStep": {
          const newEq = initQuestion(state.level, state.complexity);

          return {
            equation: newEq?.equation,
            answer: newEq?.answer,
            text: "Сколько будет?",
            gif: puzzled,
            isAnswered: false,
            isRightAnswer: false,
          };
        }
        case "Reset": {
          const newEq = initQuestion(state.level, state.complexity);

          return {
            equation: newEq?.equation,
            answer: newEq?.answer,
            text: "Скажи же, сколько будет?",
            gif: puzzled,
            isAnswered: false,
            isRightAnswer: false,
            attempt: 1,
            score: 0,
          };
        }
        case "Start": {
          const newEq = initQuestion(state.level, state.complexity);

          return {
            equation: newEq?.equation,
            answer: newEq?.answer,
            text: "Скажи же, сколько будет?",
            gif: puzzled,
            isAnswered: false,
            isRightAnswer: false,
            attempt: 0,
            score: 0,
          };
        }

        default:
          return {
            gif: happy,
          };
      }
    }),
}));

function initQuestion(level = "easy", complexity = 1) {
  const delta = complexity;

  if (level === "veryeasy") {
    let equation = "";
    let answer = 0;
    while (answer < 1) {
      const x = Math.floor(Math.random() * 5) + delta * 2;
      const y = Math.floor(Math.random() * 3) + delta * 2;
      const sign1 = Math.floor(Math.random() * 2); // true - plus, false - minus;
      answer = sign1 ? x + y : x - y;
      equation = `${x}${sign1 ? "+" : "-"}${y}=?`;
    }
    return { equation, answer };
  }

  if (level === "easy") {
    let equation = "";
    let answer = 0;
    while (answer < 1) {
      const x = Math.floor(Math.random() * 9) + delta * 8;
      const y = Math.floor(Math.random() * 8) + delta * 4;
      const z = Math.floor(Math.random() * 7) + delta;
      const sign1 = Math.floor(Math.random() * 2); // true - plus, false - minus;
      const sign2 = Math.floor(Math.random() * 2);
      const tempanswer = sign1 ? x + y : x - y;
      answer = sign2 ? tempanswer + z : tempanswer - z;
      equation = `${x}${sign1 ? "+" : "-"}${y}${sign2 ? "+" : "-"}${z}=?`;
    }
    return { equation, answer };
  }
  if (level === "complex") {
    let equation = "";
    let answer = 0;
    while (answer < 1) {
      const x = Math.floor(Math.random() * 5) + 4 * delta;
      const y = Math.floor(Math.random() * 4) + 3 * delta;
      const z = Math.floor(Math.random() * 4) + 2 * delta;
      const d = Math.floor(Math.random() * 3) + 2 * delta;
      const znad = z * d;
      const sign1 = Math.floor(Math.random() * 2);
      answer = sign1 ? x * y + z : x * y - z;
      equation = sign1 ? `${x}*${y}+${znad}/${d}` : `${x}*${y}-${znad}/${d}=?`;
    }
    return { equation, answer };
  }

  if (level === "multiply") {
    const x = Math.floor(Math.random() * 4) + delta * 2 + 1;
    const y = Math.floor(Math.random() * 8) + 3;
    const answer = x * y;
    const equation = `${x}*${y}=?`;
    return { equation, answer };
  }
}
