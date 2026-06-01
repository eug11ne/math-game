import { Header } from "./Header";
import { Levels } from "./Levels";
import { Stars } from "./Stars";
import robot from './../static/robot.gif'
import { useAppStore } from "./baseLogic";

export const Start = () => {
    const { dispatch } = useAppStore();
  
    return (
    <>
      <Header />
      <div
        id="question"
        className="flex bg-yellow-100 rounded-lg border-4 border-pink-300 items-center gap-10"
      ><img src={robot} alt="gif" className="pictures"/>
        <p className="flex text-center align-middle ">
          Итак, человеческий детеныш, выбери уровень чуть ниже своего
          невежества и попробуй угадать правильные ответы!
        </p>
      </div>
      <div
        id="level"
        className="flex bg-red-100 rounded-lg border-4 border-pink-300"
      ><Levels/> </div>
      <div
        id="stars"
        className="flex bg-yellow-100 rounded-lg border-4 border-pink-300"
      ><Stars/> </div>
      <div
        id="start"
        className="flex justify-center bg-green-100 rounded-lg border-4 border-pink-200 items-center w-xl"
      ><button type="button" onClick={()=> dispatch('Reset')} className="bg-blue-300 border-4 border-pink-400 rounded-l-full rounded-r-full px-6 h-10">Начать проигрывать</button></div>
      
    </>
  );
};
