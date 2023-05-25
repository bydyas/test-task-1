import useShopsStore from "../../store/useShopsStore.js";
import styles from "./ShopList.module.css";

export function  ShopList({ setId }) {
    const shops = useShopsStore((state) => state.shops);

    return (
        <aside className={styles.sidebar}>
            <ul className={styles.list}>
                {shops.map(({shop, id}, i) => (
                    <li key={i} className={styles.shopTitle} onClick={() => setId(id)}>{shop}</li>
                ))}
            </ul>
        </aside>
    )
}