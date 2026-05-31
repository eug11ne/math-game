import { useAppStore } from "./baseLogic";
import { Header } from "./Header";
import { Summary } from "./Summary";

export const Score = () => {
    const store = useAppStore();
    const resetGame = ()=>{
        store.dispatch('Reset');
    }

    return (<div className="px-4 py-2 object-center">
        <Header />
        <div id="question" className="flex relative bg-yellow-100 rounded-lg border-4 border-pink-200 h-24">
          <img src={store.gif} alt="gif" />
          <p className="flex py-6 px-4" >{store.text}</p>
          
        </div>
        <Summary score={store.score} resetGame={resetGame}/>
        
      </div>)
}