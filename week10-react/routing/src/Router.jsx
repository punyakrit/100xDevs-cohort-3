import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./component/page/Home";
import About from "./component/page/About";
import Me from "./component/page/Me";
import Error from "./component/page/Error";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/me" element={<Me />}></Route>
            <Route path="/*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/me">Me</Link>
      <Outlet/>
    </div>
  );
}

export default App;
