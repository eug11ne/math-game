import pikachu from "../static/pikachu.png"
import amongus from "../static/amongus.png"
export const LevelSelector = ({ level, onEasy, onComplex }: { level: string, onEasy: () => void, onComplex: () => void }) => {

    return (
        <div className="absolute flex h-10 right-4 top-2 border-teal-200">
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <img
                src={pikachu} id="easy" onClick={onEasy} alt="gif"
                className={`rounded-xl h-10 border-4 ${(level === "easy") ? "border-teal-200" : ""} hover:border-teal-100`} />
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <img
                src={amongus} id="complex" onClick={onComplex} alt="gif"
                className={`rounded-xl h-10 border-4  hover:border-teal-100 ${(level === "complex") ? "border-teal-200" : ""}`} />
        </div>
    )
}