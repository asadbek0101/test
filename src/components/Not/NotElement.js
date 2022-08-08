import React from "react";

export default function NotElement({ title = "Hozrcha hech narsa yo'q" }) {
  return (
    <div className="flex justify-center items-center h-60">
      <h1 className="font-bold text-2xl">{title}</h1>
    </div>
  );
}
