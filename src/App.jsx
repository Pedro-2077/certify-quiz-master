import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Quiz from "./pages/Quiz.jsx";
import Ranking from "./pages/Ranking.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;