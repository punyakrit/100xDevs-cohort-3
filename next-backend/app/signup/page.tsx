"use client";
import axios from "axios";
import React, { useState } from "react";

function page() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function click() {
    const res = await axios.post('/api/v1/signup',{
        name,
        password 
    })
  }

  return (
    <div className=" flex flex-col justify-center h-screen w-screen items-center">
      <div className="border-2 p-4 border-white/50">
        <div>Sign Up</div>
        <div>
          <div>
            <input
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <input
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <button className="cursor-pointer" onClick={click}>
          Send SignUp
        </button>
      </div>
    </div>
  );
}

export default page;
