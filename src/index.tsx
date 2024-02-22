import { createRoot } from "react-dom/client";
import { App, speak } from "./App";

// speak(
//     "Привет человеческий детеныш, я СуперМега Вычислитель - компьютерный царь всех наук и знаний"
//   );
const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);