import axios from "axios";
import React from "react";

async function page({ params }: any) {
  const id = (await params).blogId;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return (
    <div>
      Title : {res.data.title}
      <br />
      body : {res.data.body}
    </div>
  );
}

export default page;
