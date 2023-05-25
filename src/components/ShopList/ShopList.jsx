import useShopsStore from "../../store/useShopsStore.js";
import styles from "./ShopList.module.css";

export function  ShopList() {
    const shops = useShopsStore((state) => state.shops);

    return (
        <aside className={styles.sidebar}>
            <ul className={styles.list}>
                {shops.map(({shop}, i) => (
                    <li key={i} className={styles.shopTitle}>{shop}</li>
                ))}
            </ul>
        </aside>
    )
}