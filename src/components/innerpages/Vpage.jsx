import Card from "../card/Card";
import vcardListNames from "./VcardListNames";
import "./page.css";


function Wpage() {

  function VideoPage(props) {
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
  return <div className="pageLayout">{vcardListNames.map(VideoPage)}</div>;
}

export default Wpage;