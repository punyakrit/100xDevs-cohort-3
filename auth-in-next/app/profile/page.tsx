
import axios from "axios";
import { cookies } from "next/headers";

async function page() {
  await axios.get("http://localhost:3000/api/profile", {
    headers: {
      // Authorization: cookies["sw"]
    },
  });

  return <div>profile</div>;
}

export default page;
