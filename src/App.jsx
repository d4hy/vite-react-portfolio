import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./pages/NotFound"
import { ThemeProvider } from "@/components/ThemeToggle";
import {Projects} from "./pages/Projects";
import { Home } from "./pages/Home";
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
           <Route path="/projects" element={<Projects />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App
