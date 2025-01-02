import Card from "../card/Card";
import WcardListNames from "./WcardListNames";
import "./page.css";


function Wpage() {

  function WebPage(props) {
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
  return <div className="pageLayout">{WcardListNames.map(WebPage)}
    <div className="imp">
      <p>
        *Prices change depending on project to project ( according to time
        taken, research, etc ) but these are the base prices.
      </p>
    </div>
  </div>;
}

export default Wpage;
