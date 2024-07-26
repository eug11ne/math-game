import { useDrop } from 'react-dnd'

export const DndTarget = () => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: () => console.log('dropped'),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      })
      )
    
}