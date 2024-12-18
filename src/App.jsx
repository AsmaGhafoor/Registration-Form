import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./Components/Background";
import Registration from "./Components/Registration";

function App() {
  return (
    <main className='overflow'>
      <Router>
        <Routes>
          <Route path="/" element={<Background />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/certificate" />
        </Routes>
      </Router>
    </main>

  );
}

export default App;


