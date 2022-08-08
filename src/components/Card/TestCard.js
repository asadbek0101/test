import React from "react";
import { NavLink } from "react-router-dom";

export default function TestCard({
  link = "#",
  show = "yopiq",
  img = "https://cdn3.vectorstock.com/i/1000x1000/87/27/online-test-exams-quiz-with-computer-laptop-vector-10208727.jpg",
}) {
  return (
    <NavLink className="w-full" to={link}>
      <div className=" bg-white transition-all hover:shadow-xl shadow-md m-1 p-5 rounded-md">
        <div
          className=" w-full h-48 flex flex-row justify-center items-center bg-cover"
          style={{
            backgroundImage:
              show === "yopiq"
                ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img})`
                : `url(${img})`,
          }}
        >
          {show === "yopiq" ? <i class="fa-solid fa-lock icon"></i> : ""}
        </div>
        <p className="title text-xl mt-2 text-black">Test nomi</p>
        <p className="discreption my-1 text-black">
          Test haqida qisqacha malumot
        </p>
      </div>
    </NavLink>
  );
}
