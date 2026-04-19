import { Button } from "antd";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function NotFound() {
  return (
    <div className={styles.errorContainer}>
      <img className={styles.img}
      src="src/assets/images/404.png" 
      alt="404 Not Found" />
      <div className={styles.textContainer}>
        <h2>Page Not Found</h2>
        <h4 className={styles.greyText}>We’re sorry, the page you requested could not be found.</h4>
        <h4 className={styles.greyText}>Please go back to the homepage.</h4>
      </div>
      <Button type="primary" 
      style={{backgroundColor:"rgba(13, 80, 255, 1)",
        padding: "16px 56px",
        fontSize: "5rem",
        height: "58px"
      }}>
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  );
}
export default NotFound;
