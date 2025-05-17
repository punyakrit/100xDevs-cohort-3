
import axios from "axios";
import React from "react";

async function page() {
  const res = await axios.get(
    "http://localhost:3000/api/v1/user/details"
  );


  console.log(res.data);
  return (
    <div>
      {res.data.name}
      <br />
      {res.data.email}
    </div>
  );
}

export default page;
