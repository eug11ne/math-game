import { KeyboardEvent, ChangeEvent, useState } from "react";
import { appState } from "./App"

type SummaryAreaProps = {
    score: number,
    resetGame: () => void,
};

export const Summary = ({ score, resetGame }: SummaryAreaProps) => {    
    
    const handleOnClick = () => {
        resetGame();
    }
    let reply = '';
    switch(score) {
        case 0: 
            reply = 'Видимо ты думал совсем не тем местом, которым нужно думать. Запомни, что думать нужно головой!'; 
            break;
        case 1:
            reply = 'Получается, что думать ты почти не пробовал. Если захочешь увидеть дурачка, подойди к зеркалу.';
            break;
        case 2:
            reply = 'Зачатки мышления наблюдаются в твоей голове, но думать надо сильнее. Будь внимательнее!';
            break;
        case 3:
            reply = 'Больше половины правильных ответов, но мыслительный процесс нужно улучшать!';
            break;
        case 4:
            reply = 'Почти все правильно посчитал. Неплохо конечно, но еще есть к чему стремиться!';
            break;
        case 5:
            reply = 'Все ответы совпали с мнением СуперМегаВычислителя, а значит ты СуперМегаКрасавчик!';
            break;        
    }

    return (
        <div id="play" className="h-80 py-14 px-6 rounded-xl border-4 border-pink-200 flex flex-col justify-evenly">
            
            <div className="text-xl h-60 w-2/3 py-14 px-6 rounded-xl border-4 bg-white border-pink-200 flex flex-col justify-evenly">
            <p>Ты правильно ответил на {score} вопросов из 5</p>
            <p>{reply}</p>
            </div>
            
            <div className="flex flex-row">
            
            <button type="button" onClick={handleOnClick} className="bg-green-200 rounded-l-full rounded-r-full px-4">Начать снова</button>            
            </div>
        </div>
    )
        
        
}

