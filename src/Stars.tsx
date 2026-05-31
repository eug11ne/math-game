import { MouseEvent } from "react";
import brightStar from "../static/star.png";
import darkStar from "../static/star-grey.png";
import { useAppStore } from "./baseLogic";

export const Stars = () => {
  const { complexity, setComplexity } = useAppStore();

  return (
    <div className="flex h-20 justify-center items-center gap-4 w-full">
      <div className="">А тут выбирается сложность:</div>
      <img
        src={brightStar}
        id="1"
        alt="gif"
        onClick={() => setComplexity(1)}
        title="Легкотня"
        className="h-20 cursor-pointer"
      />
      <img
        src={Number(complexity) >= 2 ? brightStar : darkStar}
        id="2"
        alt="gif"
        onClick={() => setComplexity(2)}
        title="Отличник"
        className="h-20 cursor-pointer"
      />
      <img
        src={Number(complexity) >= 3 ? brightStar : darkStar}
        id="3"
        alt="gif"
        onClick={() => setComplexity(3)}
        title="Гений"
        className="h-20 cursor-pointer"
      />
    </div>
  );
};

/* export const Stars = ({ complexity, onStar }: { complexity: string, onStar: (id: string) => void }) => {
    const level = 'easy';    

    const handleStar = (e: MouseEvent<HTMLImageElement>) => {
        
        onStar(e.target.id);
    }


    return (<div className="absolute flex h-8 right-4 bottom-1">
       }
        <img
            src={brightStar} id="1" alt="gif"
            onClick={handleStar} title="Easy"
            className="h-8 cursor-pointer" />
       }
        <img
            src={(Number(complexity)>=2)?brightStar:darkStar} id="2" alt="gif"
            onClick={handleStar} title="Normal"
            className="h-8 cursor-pointer" />
       }
        <img
            src={(Number(complexity)>=3)?brightStar:darkStar} id="3" alt="gif"
            onClick={handleStar} title="Impossible"
            className="h-8 cursor-pointer" />
    </div>)

}

*/
