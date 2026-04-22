import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function DividerHome({ title, all, link }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>{title}</div>
      <div className={styles.linie} />
      <Link to={link} style={{textDecoration: "none"}}>
        <div className={styles.containerRight}>{all}</div>
      </Link>
    </div>
  );
}
export default DividerHome;
