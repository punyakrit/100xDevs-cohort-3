import React from "react";
import SideBar from "./component/SideBar";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="grid grid-cols-12">
      <BrowserRouter>
      <div className="col-span-3">

        <SideBar />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
