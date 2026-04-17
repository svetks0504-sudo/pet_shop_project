import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { ShoppingOutlined } from "@ant-design/icons";
import { Button } from "antd";


const navMenu = [
  { title: "Main Page", path: "/", id: "home" },
  { title: "Categories", path: "/categories", id: "categories" },
  { title: "All products", path: "/allProducts", id: "allProducts" },
  { title: "All sales", path: "/allSales", id: "allSales" },
];

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo}
      src="src/assets/icons/logo.svg" 
      alt="Logo" />

      <nav className={styles.nav}>
        {navMenu.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              {item.title}
            </NavLink>
          );
        })}
        ;
      </nav>

      <Button 
      ><ShoppingOutlined />
      </Button>
    </header>
  );
}

export default Header;
