import React from "react";
import Button from "../Button/Button";

export default function Comment() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-5 px-1">
      <textarea
        className="resize-none xxl:w-4/6 xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-full ssm:w-full smm:w-full h-44 rounded-md outline-none p-5 shadow-lg"
        name=""
        id=""
        palceholder="Mutaxassisga savollarni shu yerdan yo'llashingiz mumkin"
      />
      <div className="xxl:w-2/5 xl:w-2/5 lg:w-3/5 md:w-4/5 sm:w-full ssm:w-full smm:w-full my-3">
        <Button title="Yuborish" />
      </div>
    </div>
  );
}
