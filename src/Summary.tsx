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
    let howmuch = '';
    switch(score) {
        case 0:
            howmuch = 'Увы, ты не ответил ни на один из вопросов.';
            reply = 'Видимо ты думал совсем не тем местом, которым нужно думать. Запомни, что думать нужно головой!'; 
            break;
        case 1:
            howmuch = 'Всего лишь один правильный ответ?';
            reply = 'Получается, что думать ты почти не пробовал. Если захочешь увидеть дурачка, подойди к зеркалу.';
            break;
        case 2:
            howmuch = 'Два правильных ответа из пяти....';
            reply = 'Зачатки мышления наблюдаются в твоей голове, но думать надо сильнее. Будь внимательнее!';
            break;
        case 3:
            howmuch = 'Ты правильно ответил на три вопроса из пяти.';
            reply = 'Больше половины правильных ответов, но мыслительный процесс нужно улучшать!';
            break;
        case 4:
            howmuch = 'Пять вопросов и четыре правильных ответа.';
            reply = 'Почти все правильно посчитал. Неплохо конечно, но еще есть к чему стремиться!';
            break;
        case 5:
            howmuch = 'Пять из пяти!';
            reply = 'Все ответы совпали с мнением СуперМегаВычислителя, а значит ты СуперМегаКрасавчик!';
            break;        
    }

    return (
        <div id="play" className="h-80 py-14 px-6 rounded-xl border-4 border-pink-200 flex flex-col justify-evenly">
            
            <div className="text-xl h-60 w-2/3 py-14 px-6 rounded-xl border-4 bg-white border-pink-200 flex flex-col justify-evenly">
            <p>{howmuch}</p>
            <p>{reply}</p>
            </div>
            
            <div className="flex flex-row">
            
            <button type="button" onClick={handleOnClick} className="bg-green-200 rounded-l-full rounded-r-full px-4">Начать снова</button>            
            </div>
        </div>
    )
        
        
}

