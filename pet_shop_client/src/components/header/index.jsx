import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { ShoppingOutlined } from "@ant-design/icons";
import { Button, Badge } from "antd";
import { Link } from "react-router-dom";

const navMenu = [
  { title: "Main Page", path: "/", id: "home" },
  { title: "Categories", path: "/categories", id: "categories" },
  { title: "All products", path: "/allProducts", id: "allProducts" },
  { title: "All sales", path: "/allProducts?type=discount", id: "sales" },
];

function Header() {
  return (
    <header className={styles.header}>
     <Link to="/">
     <img
      className={styles.logo} 
      src="src/assets/icons/logo.svg" alt="Logo" />
      </Link>

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

      <Link to="shoppingCart">
      <Badge count={1}
      color="rgba(13, 80, 255, 1)"
      offset={[-45, 15]}>
        <ShoppingOutlined
          style={{
            fontSize: "50px",
            margin: "0px",
            padding: "0px"
          }}
        />
      </Badge>
      </Link>
    </header>
  );
}

export default Header;
