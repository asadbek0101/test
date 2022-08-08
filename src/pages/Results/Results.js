import React from "react";
// import NotElement from "../../components/Not/NotElement";
import Table from "../../components/Table/Table";
import TitlePage from "../../components/Title/TitlePage";

export default function Results() {
  return (
    <div>
      <TitlePage title="Natijalar" />
      {/* <NotElement title="Hozrcha sizda natijalar mavjud emas" /> */}
      <Table lesson_title="Rejabboyev Asadbek" />
    </div>
  );
}
