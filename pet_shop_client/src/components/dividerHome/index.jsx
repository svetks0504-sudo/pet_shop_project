import styles from "./styles.module.css";

function DividerHome({ title, all }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>{title}</div>
      <div className={styles.linie} />

      <div className={styles.containerRight}>{all}</div>
    </div>
  );
}
export default DividerHome;
