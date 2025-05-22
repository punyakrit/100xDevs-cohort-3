import React from "react";

interface propType {
  placeholder: string;
  onChange?: any
  id?: string
}

function TextInput({ placeholder, onChange, id }: propType) {
  return (
    <div>
      <input
      id={id}
        style={{ backgroundColor: "red", padding: 4 }}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default TextInput;
