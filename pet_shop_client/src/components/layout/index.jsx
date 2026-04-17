import styles from "./styles.module.css";
import {Outlet} from "react-router-dom";
import Header from "../header";
import Footer from "../footer";


function Layout() {
  return (
    <div className={styles.layout}>
     <Header />
     <main className={styles.main}>
        <Outlet />
     </main>
     <Footer />

    </div>
  );
}

export default Layout;
