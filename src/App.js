import "./input.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JobCards from "./Components/JobCards";
import Landing from "./Pages/Landing";
import Filter from "./Components/Filter";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cards" element={<JobCards />} />

          <Route path="/" element={<Landing />} />

          <Route path="/filter" element={<Filter />} />        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
