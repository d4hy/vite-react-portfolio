import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { ThemeProvider } from "@/components/ThemeToggle";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";
import { Toaster } from "./components/ui/toaster";
import { BeabadoobeeTrivia } from "./components/BeabadoobeeTrivia"; // Add this line
import { FitnessTracker } from "./components/FitnessTracker";
import { MythicRealms } from "./components/MyhticRealms";
function App() {
  return (
    <ThemeProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/projects" element={<Projects />}>
            <Route path="1" element={<BeabadoobeeTrivia />} />
            <Route path="2" element={<FitnessTracker />} />
            <Route path="3" element={<MythicRealms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
