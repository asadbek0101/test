import React from "react";
import ArticelCard from "../../components/Card/ArticelCard";
import TitlePage from "../../components/Title/TitlePage";

export default function Articels() {

  return (
    <>
      <TitlePage title="Maqolalar " />
      <div className="flex flex-row flex-wrap">
        <div className="xxl:w-1/4 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 smm:w-1/2 ssm:w-full">
          <ArticelCard />
        </div>
        <div className="xxl:w-1/4 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 smm:w-1/2 ssm:w-full">
          <ArticelCard />
        </div>
        <div className="xxl:w-1/4 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 smm:w-1/2 ssm:w-full">
          <ArticelCard />
        </div>
        <div className="xxl:w-1/4 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 smm:w-1/2 ssm:w-full">
          <ArticelCard />
        </div>
      </div>
    </>
  );
}
