import { createRoot } from "react-dom/client";
import ComponentOne from "./components/ComponentOne.tsx";
import ComponentThree from "./components/ComponentThree.tsx";
import ComponentTwo from "./components/ComponentTwo.tsx";

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

createRoot(document.getElementById("componentOne")!).render(<ComponentOne />);
createRoot(document.getElementById("componentTwo")!).render(<ComponentTwo />);
createRoot(document.getElementById("componentThree")!).render(
  <ComponentThree />
);
