import {NavLink} from "react-router-dom";
import {CART_PATH, SHOP_PATH} from "../../utils/consts.js";
import {Cart, Shop} from "../../pages/index.js";
import styles from "./Navigation.module.css";

const routes = [
    {
        title: "Shop",
        path: SHOP_PATH,
        Element: Shop,
    },
    {
        title: "Shopping Cart",
        path: CART_PATH,
        Element: Cart
    }
]

export function Navigation() {
    return (
        <nav className={styles.nav}>
            {routes.map(({title, path}, i) => (
                <NavLink
                    key={i}
                    to={path}
                    style={({ isActive }) => isActive ? { color: "var(--main-color)" } : { color: "var(--text-color)" }
                }>
                    <span className={styles.title}>{title}</span>
                </NavLink>
            ))}
        </nav>
    )
}