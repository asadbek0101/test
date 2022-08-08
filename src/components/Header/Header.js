import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header({ profil = "Profil" }) {
  const [show, setShow] = useState(false)
  const links = [
    {
      link: "/user-page/articel",
      title: "Maqolalar",
    },
    {
      link: "/user-page/necessary",
      title: "Keraklilar",
    },
    {
      link: "/user-page/tests",
      title: "Testlar",
    },
    {
      link: "/user-page/result",
      title: "Natijalar",
    },
  ];
  return (
      <div>
    <header className="bg-bg sticky w-full h-20 xxl:shadow-md xl:shadow-md lg:shadow-md md:shadow-0 sm:shadow-0 ssm:shadow-0 smm:shadow-0 flex flex-row items-center ">
    <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-20 xxl:flex xl:flex  lg:flex md:hidden sm:hidden smm:hidden ssm:hidden">
      <h1 className="text-white text-lg">Mamatov Sobitjon</h1>
      <div className="flex flex-row items-center justify-center gap-20 ">
        <div>

        </div>
        <div>
          <button className="border-2 text-white hover:text-black hover:bg-white border-white py-1/2 px-5 rounded-md transition-colors">
            {profil}
          </button>
        </div>
      </div>
    </div>
    <button onClick={()=>setShow(!show)} className="text-white pl-5 text-xl xxl:hidden xl:hidden  lg:hidden md:block sm:block smm:block ssm:block">
      {!show? <i className="fa-solid fa-bars"></i>: <i className="fa-solid fa-xmark"></i>}
    </button>

    </header>
        {show?<div className="w-full bg-bg py-3 xxl:hidden xl:hidden  lg:hidden md:block sm:block smm:block ssm:block">
         <div className="flex flex-col">
           {links.map((e) => (
               <NavLink
                   className={({ isActive }) => (isActive ? "active" : "inactive")}
                   to={e.link}
               >
                 {e.title}
               </NavLink>
           ))}
         </div>
        </div>:""}
  </div>
  );
}
