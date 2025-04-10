import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/page/Home";
import About from "./component/page/About";
import Me from "./component/page/Me";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/me">Me</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/me" element={<Me />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
