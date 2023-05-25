import {NavLink} from "react-router-dom";
import useShopsStore from "../../store/useShopsStore.js";
import {Spinner} from "../Spinner/Spinner.jsx";
import styles from "./ShopList.module.css";


export function  ShopList() {
    const { shops, loading, error } = useShopsStore((state) => ({
        shops: state.shops,
        loading: state.loading,
        error: state.error
    }));

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
                {error && "Failed to fetch. Try again"}
                {(loading) ? <Spinner /> : shopLinks}
            </nav>
        </aside>
    )
}
