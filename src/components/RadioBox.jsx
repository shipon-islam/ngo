"use client";

import { useState } from "react";

export default function RadioBox({ value,onChange, ...rest }) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      onClick={() => {
        {
          setSelected((prev) => !prev);
          onChange(value);
        }
      }}
      className={`w-fit flex gap-2 items-center h-10 border border-red px-5  font-inter  hover:border-red-500 ${selected ? "border-red/50 bg-red/10" : ""} cursor-pointer`}
    >
      <span
        className={`size-4 border-black border rounded-full ${selected ? "bg-black" : ""}`}
      ></span>
      <p>{value}</p>
    </div>
  );
}