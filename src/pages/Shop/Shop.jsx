import {ShopList} from "../../components/ShopList/ShopList.jsx";
import {ItemsList} from "../../components/ItemsList/ItemsList.jsx";
import styles from "./Shop.module.css";
import {useState} from "react";

export function Shop() {
    const [id, setId] = useState(0);

    return (
        <div className={styles.shopPage}>
            <ShopList setId={(id) => setId(id)}/>
            <ItemsList id={id}/>
        </div>
    )
}