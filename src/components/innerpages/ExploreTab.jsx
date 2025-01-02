import Card from "../card/Card";
import GcardListNames from "./GcardListNames";
import icardListNames from "./IcardListNames";
import vcardListNames from "./VcardListNames";
import wcardListNames from "./WcardListNames";
import DcardListNames from "./DcardListNames";
import CcardListNames from "./CcardListNames";
import "./page.css";
import { useState } from "react";

function ExploreTab() {
  const [search, setSearch] = useState("");
  function explorePage(props) {
    return (
      <Card
        key={props.id}
        id={props.id}
        image={props.image}
        name={props.name}
        price={props.price}
        tools={props.tools}
        per={props.per}
      />
    );
  }
  return (
    <>
      <div className="pageLayout">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {GcardListNames.filter((card) => card.name.toLowerCase().includes(search.toLowerCase())).map(explorePage)}
        {icardListNames.filter((card) => card.name.toLowerCase().includes(search.toLowerCase())).map(explorePage)}
        {vcardListNames.filter((card) => card.name.toLowerCase().includes(search.toLowerCase())).map(explorePage)}
        {wcardListNames.filter((card) => card.name.toLowerCase().includes(search.toLowerCase())).map(explorePage)}
        {CcardListNames.filter((card) => card.name.toLowerCase().includes(search.toLowerCase())).map(explorePage)}
        {DcardListNames.filter((card) => card.name.toLowerCase().includes(search.toLowerCase())).map(explorePage)}
      </div>
    </>
  );
}

export default ExploreTab;
