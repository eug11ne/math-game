import { MouseEvent } from "react";
import brightStar from "../static/star.png";
import darkStar from "../static/star-grey.png";

export const Stars = ({ complexity, onStar }: { complexity: string, onStar: (id: string) => void }) => {
    const level = 'easy';    

    const handleStar = (e: MouseEvent<HTMLImageElement>) => {
        console.log("1st handler", e.target.id);
        onStar(e.target.id);
    }


    return (<div className="absolute flex h-8 right-4 bottom-1">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img
            src={brightStar} id="1" alt="gif"
            onClick={handleStar}
            className="h-8" />
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img
            src={(Number(complexity)>=2)?brightStar:darkStar} id="2" alt="gif"
            onClick={handleStar}
            className="h-8" />
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img
            src={(Number(complexity)>=3)?brightStar:darkStar} id="3" alt="gif"
            onClick={handleStar}
            className="h-8" />
    </div>)

}