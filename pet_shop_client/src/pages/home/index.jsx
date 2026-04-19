import { Button } from "antd";
import styles from "./styles.module.css";

function Home() {
    return (
           <div className={styles.imageContainer}>
            <h1 className={styles.titleHome}>Amazing Discounts on Pets Products!</h1>
            <Button color="primary" 
            variant="solid" 
            style={{marginRight: "auto", 
            marginTop: "3vw", 
            width: "218px", 
            height: "58px"}}>
                Check out
            </Button>
           </div>
    );
}

export default Home;