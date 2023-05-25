import styles from "./ItemsList.module.css";
import useShopsStore from "../../store/useShopsStore.js";
import PropTypes from "prop-types";

export function ItemsList({ id }) {
    const { shops, loading } = useShopsStore((state) => {
        return {
            shops: state.shops,
            loading: state.loading
        }
    });
    const currentShop = shops.filter((obj) => obj["id"] === id);

    const goods = currentShop[0]?.goods.map(({ imgUrl, title, price }, i) => (
        <li className={styles.item} key={i}>
            <img className={styles.picture} src={imgUrl} alt="Title"/>
            <h3 className={styles.title}>{title}</h3>
            <h4 className={styles.price}>${price}</h4>
            <button type={"button"}>Add to cart</button>
        </li>
    ))

    const renderGoods = loading ? "Loading..." : goods;

    return (
        <ul className={styles.itemsList}>
            {renderGoods}
        </ul>
    )
}

ItemsList.propTypes = {
    id: PropTypes.number
}
