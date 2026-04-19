import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <h2>Contact</h2>
      <div className={styles.grid}>
        <div className={styles.bgcGray}>
          <h4 className={styles.grayText}>Phone</h4>
          <h3>+49 30 915-88492</h3>
        </div>
        <div className={styles.bgcGray}>
          <h4 className={styles.grayText}>Socials</h4>
          <div className={styles.iconsContainer}>
            <img src="src/assets/icons/instog.svg" alt="icon" />
            <img src="src/assets/icons/whatsapp.svg" alt="icon" />
          </div>
        </div>
        <div className={styles.bgcGray}>
          <h4 className={styles.grayText}>Address</h4>
          <h3>Wallstraẞe 9-13, 10179 Berlin, Deutschland</h3>
        </div>
        <div className={styles.bgcGray}>
          <h4 className={styles.grayText}>Working Hours</h4>
          <h3>24 hours a day</h3>
        </div>
        <a  className={styles.mapLink}
        href="https://www.google.com/maps/place/Heizhelden/@52.5111439,13.4044786,17z/data=!3m1!4b1!4m6!3m5!1s0x61eb8b2a1930701d:0x3102ad3c84449d1b!8m2!3d52.5111439!4d13.4044786!16s%2Fg%2F11wx9xcc2y?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer">
        <div className={styles.map} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
