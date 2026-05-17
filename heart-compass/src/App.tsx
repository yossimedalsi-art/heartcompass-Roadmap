import { BrowserRouter, Routes, Route } from "react-router-dom";
import TraineeJourney from "./pages/TraineeJourney";
import CoachDashboard from "./pages/CoachDashboard";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey/:sessionId" element={<TraineeJourney />} />
        <Route path="/coach" element={<CoachDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
