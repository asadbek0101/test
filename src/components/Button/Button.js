import React from "react";

export default function Button({ title, onclick, width = "w-full" }) {
  return (
    <button
      onClick={onclick}
      className={`bg-bg px-4 py-2 rounded-sm w-full shadow-md text-white ${width}`}
    >
      {title}
    </button>
  );
}
