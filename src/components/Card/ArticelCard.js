import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

export default function ArticelCard({
  price = "pullik",
  img = "https://nig-group.uz/wp-content/uploads/2021/11/unnamed.jpg",
  link = "#",
}) {
  function formatStr(number, n = 3) {
    let str = number.toString();
    str = [...str].reverse().join("");
    var a = [],
      start = 0;
    while (start < str.length) {
      a.push(str.slice(start, start + n));
      start += n;
    }
    let arr = a.join(" ");
    arr = [...arr].reverse().join("");
    return arr;
  }
  return (
    <NavLink to={link}>
      <div className="bg-white shadow-md transition-all hover:shadow-xl m-1 p-5 rounded-md">
        <div
          className="h-48 flex flex-row justify-center items-center"
          style={{
            backgroundImage:
              price === "pullik"
                ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img})`
                : `url(${img})`,
          }}
        >
          {price === "pullik" ? <i class="fa-solid fa-lock icon"></i> : ""}
        </div>
        <p className="title text-xl mt-2 text-black">Maqolalar nomi</p>
        <p className="discreption my-1 text-black">
          Maqola haqida qisqacha malumot
        </p>
        {price === "pullik" ? (
          <p className="price font-bold mb-2 text-black">
            {formatStr(123000)} so'm
          </p>
        ) : price === "tekin" ? (
          <p className="price font-bold mb-2 text-red">
            <del>{formatStr(123000)} so'm</del>
          </p>
        ) : price === "tolandi" ? (
          <p className="price font-bold mb-2 text-black">To'landi</p>
        ) : (
          ""
        )}

        {price === "pullik" ? (
          <button
            onClick={() => {}}
            className="bg-bg w-full text-white py-2 rounded-md"
          >
            Keraklilarga qo'shish
          </button>
        ) : price === "tekin" ? (
          <button className="bg-green w-full text-white py-2 rounded-md">
            Bepul
          </button>
        ) : price === "tolandi" ? (
          <button className="bg-green w-full text-white py-2 rounded-md">
            To'landi
          </button>
        ) : (
          ""
        )}
      </div>
    </NavLink>
  );
}
