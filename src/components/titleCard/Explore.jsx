import TitleCard from "./titleCard";
import indexTitle from "./indexTitle";
import styles from "./explore.module.css"

function Explore() {
  function mainTitle(title) {
    return (
      <TitleCard
        key={title.id}
        id={title.id}
        page={title.page}
        image={title.image}
        name={title.name}
      />
    );
  }
  return (
    <div className={styles.explore}>
      <h1 className={styles.title}>Explore Creators</h1>
      <div className="App">{indexTitle.map(mainTitle)}</div>
    </div>
  );
}

export default Explore;
