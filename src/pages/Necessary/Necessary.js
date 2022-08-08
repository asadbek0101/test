import React from "react";
import NeedCard from "../../components/Card/NeedCard";
import Comment from "../../components/Comment/Comment";
// import NotElement from "../../components/Not/NotElement";
import TitlePage from "../../components/Title/TitlePage";

export default function Necessary() {
  return (
    <div>
      <TitlePage title="Keraklilar" />
      {/* <NotElement title="Hozrcha sizda kerakli maqolalar mavjud emas" /> */}
      <div className="flex flex-row flex-wrap">
        <div className="xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full ssm:w-full smm:w-full">
          <NeedCard />
        </div>
        <div className="xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full ssm:w-full smm:w-full">
          <NeedCard />
        </div>
        <div className="xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full ssm:w-full smm:w-full">
          <NeedCard />
        </div>
      </div>
      <Comment />
    </div>
  );
}
