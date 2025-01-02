import Card from "../card/Card";
import GcardListNames from "./GcardListNames";
import "./page.css";


function Gpage() {

  function GraphicPage(props) {
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
  return <div className="pageLayout">{GcardListNames.map(GraphicPage)}</div>;
}

export default Gpage;
