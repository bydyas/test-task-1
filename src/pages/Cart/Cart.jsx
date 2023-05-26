import {useEffect} from "react";
import PropTypes from "prop-types";
import {BASE_PAGE_TITLE} from "../../utils/consts.js";
import styles from "./Cart.module.css";
import {Form} from "../../components/Form/Form.jsx";
import {OrderList} from "../../components/OrderList/OrderList.jsx";

export function Cart({title="Cart"}) {

    useEffect(() => {
        document.title = BASE_PAGE_TITLE + " | " + title;
    }, [title]);

    const order = (event, data) => {
        event.preventDefault();
        console.log(data);
    }

    return (
        <div className={styles.cartPage}>
            <div className={styles.container}>
                <Form onSubmit={order}/>
                <OrderList />
            </div>
        </div>
    )
}

Cart.propTypes = {
    title: PropTypes.string
}
