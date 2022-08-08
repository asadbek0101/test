import React from "react";

export default function Title({ title, text = "center" }) {
  return (
    <div className={`text-${text} w-full py-3`}>
      <p className="font-bold text-2xl">{title}</p>
    </div>
  );
}
