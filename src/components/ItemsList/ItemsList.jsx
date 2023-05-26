import {useParams} from "react-router-dom";
import useShopsStore from "../../store/useShopsStore.js";
import {Spinner} from "../Spinner/Spinner.jsx";
import styles from "./ItemsList.module.css";
import useOrdersStore from "../../store/useOrdersStore.js";

export function ItemsList() {
    const { id } = useParams();
    const addOrder = useOrdersStore((state) => state.addOrder);
    const { shops, loading, error } = useShopsStore((state) => ({
        shops: state.shops,
        loading: state.loading,
        error: state.error
    }));
    const currentShop = shops.filter((obj) => obj["id"] === +id);

    const addNewOrder = (imgUrl, title, price) => {
        const newOrder = {
            imgUrl,
            title,
            price,
            count: 1
        };
        addOrder(newOrder);
    }

    const goods = currentShop[0]?.goods.map(({ imgUrl, title, price }, i) => (
        <li className={styles.item} key={i}>
            <img className={styles.picture} src={imgUrl} alt="Title"/>
            <h3 className={styles.title}>{title}</h3>
            <h4 className={styles.price}>${price}</h4>
            <button type={"button"} onClick={() => addNewOrder(imgUrl, title, price)}>Add to cart</button>
        </li>
    ))

    const renderGoods = loading ? <Spinner /> : goods;
    const askForSelection = error || "Select shop";

    return (
        <ul className={styles.itemsList}>
            {error && "Failed to fetch. Try again"}
            {(!loading && !error && !currentShop.length && id) && "Select existing shop"}
            {id ? renderGoods : askForSelection}
        </ul>
    )
}
