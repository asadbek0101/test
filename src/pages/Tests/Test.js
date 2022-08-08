import React from "react";
import Button from "../../components/Button/Button";

export default function Test() {
  return (
    <div className="bg-white my-4 p-5 xxl:w-1/2 xl:w-1/2 lg:w-3/5 md:w-4/5 sm:w-9/10 mx-auto">
      <div className="flex flex-row justify-between items-center">
        <p className="bg-green text-white px-2 rounded-sm">Ball:2</p>
        <p className="border-2 border-green px-3 rounded-sm">Vaqt</p>
      </div>
      <div>
        <p className="text-lg py-2">Savollar</p>
      </div>
      <div>
        <p className="text-lg py-1">Javob 1</p>
        <p className="text-lg py-1">Javob 2</p>
        <p className="text-lg py-1">Javob 3</p>
        <p className="text-lg py-1">Javob 4</p>
      </div>
      <div className="w-full text-right ">
        <Button title="Yuborish" width="w-1/5" />
      </div>
    </div>
  );
}
