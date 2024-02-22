import puzzled from "../static/puzzled.gif";
import happy from "../static/happy.gif";
import sad from "../static/sad.gif";
import { useReducer, useState, MouseEvent } from "react";
import { Header } from "./Header";
import { InputArea } from "./InputArea";
import { LevelSelector } from "./LevelSelector";
import { Stars } from "./Stars";

type appState = { text: string, eq: string, isRightAnswer: boolean, answer: string, gif: string, level: string, complexity: string }

function reducer(state: appState, action) {
  if (action.type === "rightAnswer") {
    return {
      ...state,
      text: "Да, все правильно посчитал! СуперМегаВычислитель согласен с тобой!",
      eq: action.payload,
      isRightAnswer: true,
      gif: happy
    };
  }
  if (action.type === "nextStep") {
    const quest = initQuestion(state.level, state.complexity);
    return {
      ...state,
      text: "Скажи же, сколько будет?",
      eq: quest.equation,
      isRightAnswer: false,
      answer: quest.answer.toString(),
      gif: puzzled
    };
  }

  if (action.type === "wrongAnswer") {
    return {
      ...state,
      text: "Не угадал, попробуй еще раз.",
      gif: sad
    }
  }

  if (action.type === "easyLevel") {
    if (state.level !== 'easy') {
      const quest = initQuestion('easy', state.complexity);
      return {
        ...state,
        text: "Скажи же, сколько будет?",
        eq: quest.equation,
        isRightAnswer: false,
        answer: quest.answer.toString(),
        gif: puzzled,
        level: 'easy'
      }
    }
    return { ...state }
  }

  if (action.type === "complexLevel") {

    if (state.level !== 'complex') {
      const quest = initQuestion('complex', state.complexity);
      return {
        ...state,
        text: "Скажи же, сколько будет?",
        eq: quest.equation,
        isRightAnswer: false,
        answer: quest.answer.toString(),
        gif: puzzled,
        level: 'complex'
      }
    }
    return { ...state }
  }

  if (action.type === "changeStar") {    
    return {
      ...state,
      complexity: action.payload
    }
  }
  

throw Error('Unknown action.');
}

export function App() {


  const [level, setLevel] = useState('easy');
  const quest = initQuestion('easy');
  const [state, dispatch] = useReducer(reducer, {
    text: "Сколько будет?",
    isRightAnswer: false,
    eq: quest.equation,
    answer: quest.answer.toString(),
    gif: puzzled,
    level: 'easy',
    complexity: '1'
  });


  const handleNextButton = () => {
    dispatch({ type: 'nextStep' });
  }

  const handleAnswer = (userAnswer: string) => {
    if (userAnswer === state.answer) {
      dispatch({ type: 'rightAnswer', payload: `${state.eq}=${userAnswer}` });
      speak("Вот это да, молодец, твой юный мозг нашел правильный ответ! Красавчик!")
    }
    else {
      dispatch({ type: 'wrongAnswer' });
      speak("Ха ха ха, малыш-глупыш, не угадал!");
    }
  }

  const handleEasyLevel = () => {
    dispatch({ type: 'easyLevel' });
  }

  const handleComplexLevel = () => {
    dispatch({ type: 'complexLevel' });
    console.log(state.level);
  }

  const handleStar = (value: string) => {    
    dispatch({ type: 'changeStar', payload: value});
  }

  return (
    <div className="px-4 py-2 object-center">
      <Header />
      <div id="question" className="flex relative bg-yellow-100 rounded-lg border-4 border-pink-200 h-24">
        <img src={state.gif} alt="gif" />
        <p className="flex py-6 px-4" >{state.text}</p>
        <LevelSelector level={state.level} onEasy={handleEasyLevel} onComplex={handleComplexLevel} />
        <Stars complexity={state.complexity} onStar={handleStar}/>
      </div>
      <InputArea data={{ equation: state.eq, isRight: state.isRightAnswer }} answerHandler={handleAnswer} toggleRight={handleNextButton} />
    </div>)
}

function initQuestion(level = 'easy', complexity = '1') {
  const delta = Number(complexity);
  
  if (level === 'easy') {
    const x = Math.floor(Math.random() * 9) + delta*8;
    const y = Math.floor(Math.random() * 8) + delta*4;
    const z = Math.floor(Math.random() * 7) + delta;
    const sign1 = Math.floor(Math.random() * 2); // true - plus, false - minus;
    const sign2 = Math.floor(Math.random() * 2);
    const tempanswer = sign1 ? x + y : x - y;
    const answer = sign2 ? tempanswer + z : tempanswer - z;
    const equation = `${x}${sign1 ? '+' : '-'}${y}${sign2 ? '+' : '-'}${z}`
    return { equation, answer };
  }
  if (level === 'complex') {
    const x = Math.floor(Math.random() * 5) + 3*delta;
    const y = Math.floor(Math.random() * 4) + 3*delta;
    const z = Math.floor(Math.random() * 4) + 2*delta;
    const d = Math.floor(Math.random() * 3) + 2*delta;
    const znad = z * d;
    const sign1 = Math.floor(Math.random() * 2);
    const answer = sign1 ? x * y + z : x * y - z;
    const equation = sign1 ? `${x}*${y}+${znad}/${d}` : `${x}*${y}-${znad}/${d}`;
    return { equation, answer };
  }

}

export function speak(words: string) {
  const utterance = new SpeechSynthesisUtterance(words);

  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0];
  utterance.rate = 1.5;

  speechSynthesis.speak(utterance);
}