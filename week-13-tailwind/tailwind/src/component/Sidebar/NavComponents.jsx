import React, { useEffect, useState } from "react";
import { Contact, CreditCard, Home, User, UserRoundCog, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
function NavComponents() {
  let location = useLocation();
  const path = location.pathname;
  const data = [
    {
      title: "Home",
      logo: <Home />,
      path: "/",
    },
    {
      title: "Webinars",
      logo: <Users/>,
      path: "/webinar",
    },
    {
        title: "Billing",
        logo: <CreditCard/>,
        path: "/billing",
      },
      {
        title: "User Management",
        logo: <Contact/>,
        path: "/user-management",
      },
      {
        title: "Settings",
        logo: <UserRoundCog/>,
        path: "/settings",
      },
  ];
  return (
    <div className="">
      {data.map((nav) => {
        return (
          <Link to={nav.path}>
            <div
              className={`flex justify-between ${
                nav.path == path
                  ? "bg-[#E4E9EE] text-[#002A5A] font-semibold"
                  : "text-[#7B7A7D] font-light"
              } px-3 py-3  my-3 hover:bg-[#002a5a0e] rounded-xl`}
            >
              <div className="">{nav.title}</div>
              <div>{nav.logo}</div>
            </div>
          </Link>
        );
      })}
    </div>

  );
}

export default NavComponents;
