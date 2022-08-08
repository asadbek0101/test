import React from "react";

export default function TitlePage({ title }) {
  return (
    <div className="border-b-4 border-bg mt-4 mb-2 text-bg">
      <p className="font-bold text-2xl">{title}</p>
    </div>
  );
}
