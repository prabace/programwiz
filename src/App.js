import "./input.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JobCards from "./Components/JobCards";
import Landing from "./Pages/Landing";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cards" element={<JobCards />} />

          <Route path="/job" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
