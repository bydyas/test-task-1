import {NavLink} from "react-router-dom";
import useShopsStore from "../../store/useShopsStore.js";
import styles from "./ShopList.module.css";


export function  ShopList() {
    const { shops, loading } = useShopsStore((state) => {
        return {
            shops: state.shops,
            loading: state.loading
        }
    });

    const shopLinks = shops.map(({shop, id}, i) => (
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
    ))

    return (
        <aside className={styles.sidebar}>
            <nav className={styles.list}>
                {loading ? "Loading..." : shopLinks}
            </nav>
        </aside>
    )
}
