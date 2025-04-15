import React from "react";
import SideBar from "./component/SideBar";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Webinar from "./page/Webinar";
import Billing from "./page/Billing";
import UserManagement from "./page/UserManagement";
import Settings from "./page/Settings";
import WrongPage from "./page/WrongPage";
function App() {
  return (
    <div className="grid grid-cols-12">
      <BrowserRouter>
        <div className="col-span-3">
          <SideBar />
        </div>
        <div className="col-span-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/webinar" element={<Webinar />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<WrongPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
