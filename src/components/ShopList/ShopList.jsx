import {NavLink} from "react-router-dom";
import useShopsStore from "../../store/useShopsStore.js";
import styles from "./ShopList.module.css";


export function  ShopList() {
    const shops = useShopsStore((state) => state.shops);

    return (
        <aside className={styles.sidebar}>
            <nav className={styles.list}>
                {shops.map(({shop, id}, i) => (
                    <NavLink
                        key={i}
                        to={"/shop/"+id}
                        className={styles.shopTitle}
                        style={({ isActive }) =>
                            isActive ? { fontWeight: 700, backgroundColor: "var(--main-color)" } : undefined
                        }
                    >
                        {shop}
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
}
