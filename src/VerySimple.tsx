import { Header } from "./Header";
import { LevelSelector } from "./LevelSelector";
import { Levels } from "./Levels";
import { InputArea } from "./InputArea";
import { useState } from "react";
import { useAppStore } from "./baseLogic";
import { Score } from "./Score";


export const VerySimple = () => {
    //const [quest, setQuest] = useState(initQuestion('1'));
    //const { text, equation, answer, score, gif, attempt, setQuest, setScore, setAttempt } = useAppStore();   
    const store = useAppStore();
    
    
    console.log(store);

  return store.attempt < 6 ? (
    <>
      <div className="px-4 py-2 object-center">
      <Header />
      <div id="question" className="flex relative bg-yellow-100 rounded-lg border-4 border-pink-200 h-24">
        <img src={store.gif} alt="gif" />
        <p className="flex py-6 px-4" >{store.text}</p>       
        
      </div>     
      <InputArea data={{equation: store.equation, answer: store.answer}} answerHandler={store.dispatch}/>
      
      </div>
    </>
  ) : <Score />;
};


