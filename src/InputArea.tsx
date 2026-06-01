import { KeyboardEvent, ChangeEvent, useState } from "react";
import glupish from "./../static/glupish-short.mp3";
import win from "./../static/win.mp3";
import { Equation } from "./Equation";
import { useAppStore } from "./baseLogic";
import { useEffect, useRef } from 'react';

type InputAreaProps = {
  data: { equation: string; answer: number };
  answerHandler: (e: string) => void;
  toggleRight?: () => void;
};

export const InputArea = ({
  data,
  answerHandler,
  toggleRight,
}: InputAreaProps) => {
  const store = useAppStore();
  const [value, setValue] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  
  useEffect(() => {    
    inputRef.current?.focus();
  }, [data.equation]); 

  const handleOnKeyUp = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (data.answer !== Number(value)) {
        playSound(glupish);
      } else {
        playSound(win);
      }
      answerHandler(value);
      setValue("");
    }
  };
  const handleOnClick = () => {
    if (data.answer !== Number(value)) {
      playSound(glupish);
    } else {
      playSound(win);
    }
    answerHandler(value);
    setValue("");
  };

  const handleAnswer = () => {
    if (value === data.answer.toString()) {
      setIsRight(true);
      setIsAnswered(true);
    }
  };

  
  return !store.isAnswered ? (
    <div
      id="play"
      className="py-14 px-6 rounded-xl border-4 border-pink-200 flex flex-col justify-evenly"
    >
      <Equation equation={store.equation} size="60" />

      <div className="flex flex-row">
        <input
          ref={inputRef}
          value={value}
          onChange={handleOnChange}
          onKeyUp={handleOnKeyUp}
          placeholder="Да-да?"
          className="bg-white rounded-l-full px-2 focus:outline-none"
        />
        <button
          type="button"
          onClick={handleOnClick}
          className="bg-green-200 rounded-r-full px-4"
        >
          Дать ответ
        </button>
      </div>
    </div>
  ) : (
    <div
      id="win"
      className="h-80 py-14 px-6 rounded-xl border-4 border-pink-200 pyro flex flex-col justify-evenly"
    >
      <div className={`${store.isRightAnswer ? "before" : ""}`} />
      <div className={`${store.isRightAnswer ? "after" : ""}`} />
      <Equation equation={store.equation} size="60" />
      <div className="flex flex-row">
        <button
          type="button"
          onClick={() => store.dispatch("NextStep")}
          className="bg-green-200 rounded-l-full rounded-r-full px-6 "
        >
          Дальше
        </button>
      </div>
    </div>
  );
};

export function playSound(audioFile: string) {
  const audio = new Audio(audioFile);
  audio.play();
}
