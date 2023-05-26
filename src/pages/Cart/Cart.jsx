import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {BASE_PAGE_TITLE} from "../../utils/consts.js";
import styles from "./Cart.module.css";
import {Form} from "../../components/Form/Form.jsx";
import {OrderList} from "../../components/OrderList/OrderList.jsx";
import useOrdersStore from "../../store/useOrdersStore.js";

const initUserData = {
    name: "",
    email: "",
    phone: "",
    address: ""
}

export function Cart({title="Cart"}) {
    const { orders, postOrder } = useOrdersStore((state) => ({orders: state.orders, postOrder: state.postOrder}));
    const [userData, setUserData] = useState(initUserData);

    useEffect(() => {
        document.title = BASE_PAGE_TITLE + " | " + title;
    }, [title]);

    const makeOrder = () => {
        const readyOrder = {
            ...userData,
            goods: orders
        }
        console.log(readyOrder);
        postOrder(readyOrder);
        setUserData(initUserData);
    }

    const totalPrice = orders.reduce((acc, order) => acc + (order.price*order.count), 0);

    return (
        <div className={styles.cartPage}>
            <div className={styles.container}>
                <Form userData={userData} setUserData={setUserData}/>
                <OrderList />
            </div>
            <div className={styles.totalInfo}>
                <p className={styles.price}>Total price: ${totalPrice}</p>
                <button onClick={makeOrder} className={styles.btn} type={"submit"}>Submit</button>
            </div>
        </div>
    )
}

Cart.propTypes = {
    title: PropTypes.string
}
