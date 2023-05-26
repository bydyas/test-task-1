import styles from "./OrderList.module.css";
import useOrdersStore from "../../store/useOrdersStore.js";

export function OrderList() {
    const { orders, removeOrder, editOrder } = useOrdersStore((state) => ({
        orders: state.orders,
        removeOrder: state.removeOrder,
        editOrder: state.editOrder
    }));

    return (
        <ul className={styles.list}>
            {orders.map(({imgUrl, title, price, count},i) => (
                <li key={i} className={styles.order}>
                    <figure className={styles.imgFrame}>
                        <img className={styles.img} src={imgUrl} alt={title}/>
                    </figure>
                    <div className={styles.info}>
                        <h4 className={styles.title}>{title}</h4>
                        <h5 className={styles.price}>${price*count}</h5>
                        <input className={styles.counter} type="number" name="count" min={1} value={count} onChange={(e) => editOrder(title, "count", e.target.value)}/>
                    </div>
                    <div className={styles.btnHolder}>
                        <button className={styles.btn} type={"button"} onClick={() => removeOrder(title)}>REMOVE</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}