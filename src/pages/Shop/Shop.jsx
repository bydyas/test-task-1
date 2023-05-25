import {ShopList} from "../../components/ShopList/ShopList.jsx";
import styles from "./Shop.module.css";

export function Shop() {
    return (
        <div className={styles.shopPage}>
            <ShopList />
        </div>
    )
}