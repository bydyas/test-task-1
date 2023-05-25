import {ShopList} from "../../components/ShopList/ShopList.jsx";
import styles from "./Shop.module.css";
import {ItemsList} from "../../components/ItemsList/ItemsList.jsx";

export function Shop() {
    return (
        <div className={styles.shopPage}>
            <ShopList />
            <ItemsList />
        </div>
    )
}