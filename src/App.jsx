import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./Components/Background";
import Reg from "./Components/Reg";

function App() {
  return (
    <main className='overflow'>
      <Router>
        <Routes>
          <Route path="/" element={<Background />} />
          <Route path="/reg" element={<Reg />} />
        </Routes>
      </Router>
    </main>

  );
}

export default App;


