import React from "react";

export default function Table({ lesson_title }) {
  return (
    <div className="bg-white my-6 rounded-md overflow-hidden shadow-md">
      <div className="bg-bg py-2 px-3 flex flex-row gap-4 items-center">
        <p className="font-bold text-white text-xl w-1/4">{lesson_title}</p>
        <div className="flex flex-row gap-4 w-3/4">
          <input
            className="px-2 py-1 outline-none rounded-sm w-2/3"
            type="text"
            placeholder="Mavzu nomi bo'yicha shu yerdan qidiriladi"
          />
          <select className="px-2 py-1 outline-none rounded-sm w-1/3" name="">
            <option value="name">Nomi</option>
            <option value="date">Vaqti</option>
            <option value="result">Natija</option>
            <option value="ball">Ball</option>
          </select>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-row px-4 py-2 w-full border-b-2 border-white_black">
          <p className="w-1/12">No</p>
          <p className="w-7/12">Mavzu nomi</p>
          <p className="w-2/12">Topshirilgan vaqti</p>
          <p className="w-1/12">Natija</p>
          <p className="w-1/12">Ball</p>
        </div>
        <div className="flex flex-row px-4 py-2 w-full border-b-2 border-white_black">
          <p className="w-1/12">1)</p>
          <p className="w-7/12">Matematika va analiz</p>
          <p className="w-2/12">23.04.2022 19:23</p>
          <p className="w-1/12">12/25</p>
          <p className="w-1/12">24</p>
        </div>
      </div>
    </div>
  );
}
