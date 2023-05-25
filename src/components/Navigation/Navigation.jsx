import {NavLink} from "react-router-dom";
import {routes} from "../../utils/routes.js";
import styles from "./Navigation.module.css";

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