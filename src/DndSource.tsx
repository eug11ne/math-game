import png1 from "../static/numbers/1.png";
import png2 from "../static/numbers/2.png";
import png3 from "../static/numbers/3.png";
import png4 from "../static/numbers/4.png";
import png5 from "../static/numbers/5.png";
import png6 from "../static/numbers/6.png";
import png7 from "../static/numbers/7.png";
import png8 from "../static/numbers/8.png";
import png9 from "../static/numbers/9.png";
import png0 from "../static/numbers/0.png";
import pngPlus from "../static/numbers/plus.png";
import pngMinus from "../static/numbers/minus.png";
import pngMultiply from "../static/numbers/multiply.png";
import pngDivide from "../static/numbers/divide.png";
import pngEquals from "../static/numbers/equals.png";
import { useDrag } from 'react-dnd'

const pngFiles = [png0, png1, png2, png3, png4, png5, png6, png7, png8, png9];


export const DndSource = ({ equation }: { equation: string }) => {


    const listIms = equation.split("").map((el, index) => {
        let imgSrc = '';
        
        if ("1234567890".includes(el)) imgSrc = pngFiles[Number(el)];

        if (el === '+') imgSrc = pngPlus;

        if (el === '-') imgSrc = pngMinus;

        if (el === '=') imgSrc = pngEquals;

        if (el === '*') imgSrc = pngMultiply;

        if (el === '/') imgSrc = pngDivide;
        const [{isDragging}, drag] = useDrag(() => ({
            type: "image",
            collect: monitor => ({
              isDragging: !!monitor.isDragging(),
            }),
          }))

        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        return <img ref={drag} src={imgSrc} width="60" height="60" alt="number" key={index} id={index.toString()} />

    });

    return (<div className="flex py-6">{listIms}</div>);
}