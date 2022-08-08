import React from "react";

export default function Input({ label = "Label", placeholder = "" }) {
  return (
    <div className="py-2">
      <label className="w-full block px-2" htmlFor={label}>
        {label}
      </label>
      <input
        className="w-full outline-none border-b-2 border-white_black my-2 px-2"
        type="text"
        placeholder={placeholder}
        id={label}
      />
    </div>
  );
}
