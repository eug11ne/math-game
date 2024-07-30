import { KeyboardEvent, ChangeEvent, useState } from "react";
import { Equation } from "./Equation";
import "../static/fire.css"
import { Stars } from "./Stars";
import { Palette } from "./Palette";
import { DndSource } from "./DndSource";
import { MultiplyTable } from "./MultiplyTable";

type InputAreaProps = {
    data: {equation: string, isRight: boolean, isAnswered: boolean},
    answerHandler: (e: string) => void,    
    toggleRight: () => void
};

export const InputArea = ({ data, answerHandler, toggleRight }: InputAreaProps) => {
    const [value, setValue] = useState("");
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const handleOnKeyUp = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            answerHandler(value);
            setValue("");
        }
    }
    const handleOnClick = () => {
        answerHandler(value);
        setValue("");
    }

    return !data.isAnswered ?
        (
        <div id="play" className="h-80 py-14 px-6 rounded-xl border-4 border-pink-200 flex flex-col justify-evenly">
            
            <Equation equation={data.equation} size='60'/> 
            
            <div className="flex flex-row">
            <input value={value} onChange={handleOnChange} onKeyUp={handleOnKeyUp} className="bg-white rounded-l-full px-2 focus:outline-none" />
            <button type="button" onClick={handleOnClick} className="bg-green-200 rounded-r-full px-4">Дать ответ</button>            
            </div>
        </div>
        
        )
        :
        (<div id="win" className='h-80 py-14 px-6 rounded-xl border-4 border-pink-200 pyro flex flex-col justify-evenly'> 
            <div className={`${data.isRight?"before":''}`} />
            <div className={`${data.isRight?"after":''}`} />            
            <Equation equation={data.equation} size='60'/>
            <div className="flex flex-row">
            <button type="button" onClick={toggleRight} className="bg-green-200 rounded-l-full rounded-r-full px-6 ">Дальше</button>
            </div>
        </div>)
        
}

