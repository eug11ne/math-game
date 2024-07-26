import { KeyboardEvent, ChangeEvent, useState } from "react";
import { Equation } from "./Equation";

type MultiplyTableProps = {
    num: string, 
    size: string
};

export const MultiplyTable = ({num, size='10'}: MultiplyTableProps) => {
    const multiEntries = '123456789'.split("").map((el) => {
        return <Equation equation={`${Number(num)}*${el}=${Number(num)*Number(el)}`} size={size} />
    });

    return <div>{multiEntries}</div>
}
    
    
    /* const [value, setValue] = useState("");
    
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

    return <div id="play" className="h-80 py-14 px-6 rounded-xl border-4 border-pink-200 flex flex-col justify-evenly">
           <Equation equation={data.equation} />
           
            <div className="flex flex-row">
            <input value={value} onChange={handleOnChange} onKeyUp={handleOnKeyUp} className="bg-white rounded-l-full px-2 focus:outline-none" />
            <button type="button" onClick={handleOnClick} className="bg-green-200 rounded-r-full px-4">Дать ответ</button>
            </div>
            
        </div>)
        :
        (<div id="win" className='h-80 py-14 px-6 rounded-xl border-4 border-pink-200 pyro flex flex-col justify-evenly'> 
            <div className="before" />
            <div className="after" />            
            <Equation equation={data.equation} />
            <div className="flex flex-row">
            <button type="button" onClick={toggleRight} className="bg-green-200 rounded-l-full rounded-r-full px-6 ">Дальше</button>
            </div>
        </div>)
        
}
*/
