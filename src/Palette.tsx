import { DragEvent } from "react";
import { Equation } from "./Equation"

const handleDragStart = (e: DragEvent) => {
    console.log(e.target);

}
const handleDragEnter = (e: DragEvent) => {
    e.stopPropagation();
    //console.log(e.target);
}
const handleDragEnd = (e: DragEvent) => {
    console.log('drop', e.target, e.currentTarget);
}

const handleDrop = (e: DragEvent) => {
    console.log('receive drop', e.target);

}

export const Palette = () => {

    return (
        <><div draggable
            onDragStart={(e) => handleDragStart(e)}
            onDragEnter={(e) => handleDragEnter(e)}
            onDragEnd={(e) => handleDragEnd(e)}
            onDrop={(e) => handleDrop(e)}>
            <Equation equation="12345+" />
        </div>
            <div draggable onDragStart={(e) => handleDragStart(e)}
                onDragEnter={(e) => handleDragEnter(e)}
                onDragEnd={(e) => handleDragEnd(e)}
                onDrop={(e) => handleDrop(e)}>
                <Equation equation="12345+" />
            </div>
        </>
    )
}