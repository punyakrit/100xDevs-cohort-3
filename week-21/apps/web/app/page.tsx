"use client";
import React, { useState } from "react";
import TextInput from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
function page() {
  const [input, setInput] = useState("");
  const router = useRouter();

  return (
    <div className="">
      <TextInput
        id={"inputfield"}
        onChange={(e: any) => {
          setInput(e.target.value);
        }}
        placeholder={"qw"}
      ></TextInput>
      <button
        onClick={() => {
          router.push(`/chat/${input}`);
        }}
      >
        Join Room
      </button>
    </div>
  );
}

export default page;
