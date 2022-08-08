import React from "react";
import TestCard from "../../components/Card/TestCard";
// import NotElement from "../../components/Not/NotElement";
import TitlePage from "../../components/Title/TitlePage";

export default function Tests() {
  return (
    <div>
      <TitlePage title="Testlar" />
      {/* <NotElement title="Hozrcha majud testlar yo'q" /> */}
      <div className="flex felx-row flex-wrap">
        <div className="xxl:w-1/4 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full ssm:w-full smm:w-full">
          <TestCard
            title="Moddalar almashinuvi"
            show="ochiq"
            link={`/user-page/test/${2}`}
          />
        </div>
        <div className="xxl:w-1/4 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full ssm:w-full smm:w-full">
          <TestCard title="Moddalar almashinuvi" />
        </div>
      </div>
    </div>
  );
}
