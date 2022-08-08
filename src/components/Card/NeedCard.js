import React from "react";
import { NavLink } from "react-router-dom";

export default function NeedCard({
  img = "https://nig-group.uz/wp-content/uploads/2021/11/unnamed.jpg",
  link = "#",
}) {
  return (
    <NavLink to={link}>
      <div className=" bg-white transition-all hover:shadow-xl shadow-md m-1 p-5 rounded-md flex xxl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row ssm:flex-col smm:flex-col">
        <div
          className=" xxl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/3 ssm:w-full smm:w-full h-40 flex flex-row justify-center items-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img})`,
          }}
        ></div>
        <div className="px-4 flex flex-col justify-between items-start">
          <div>
            <p className="text-xl font-bold text-black">Maqola nomi</p>
            <p className="text-black">Maqola haqida malumot</p>
          </div>
          <button className="bg-red rounded-sm shadow-md text-white px-5 py-1">
            Uchirish
          </button>
        </div>
      </div>
    </NavLink>
  );
}
