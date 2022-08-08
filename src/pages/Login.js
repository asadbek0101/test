import React, { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import "./login.css";

export default function Login() {
  const [page, setPage] = useState("login");
  const login = () => {
    console.log("login");
  };
  const register = () => {
    console.log("register");
  };
  return (
    <div className="w-full h-screen flex  flex-row">
      <div className="w-3/5   h-full left"></div>
      <div className="w-2/5    flex flex-col items-center justify-center px-5">
        <div className="w-4/5 bg-white rounded-md shadow-lg p-10 box-border">
          <div className="header-button">
            <button
              onClick={() => {
                setPage("register");
              }}
              className={`${page === "register" ? "active-class" : ""}`}
            >
              Ro'yxatdan o'tish
            </button>
            <button
              onClick={() => {
                setPage("login");
              }}
              className={`${page === "login" ? "active-class" : ""}`}
            >
              Kirish
            </button>
          </div>
          {page === "login" ? (
            <div>
              <div className="my-5">
                <Input placeholder="username..." label="Username" />
                <Input placeholder="password..." label="Password" />
              </div>
              <Button title="Yuborish" onclick={login} />
            </div>
          ) : page === "register" ? (
            <div>
              <div className="my-5">
                <Input placeholder="email..." label="Email" />
                <Input placeholder="username..." label="Username" />
                <Input placeholder="password..." label="Password" />
              </div>
              <Button onclick={register} title="Yuborish" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
