import {useEffect} from "react";
import PropTypes from "prop-types";
import {BASE_PAGE_TITLE} from "../../utils/consts.js";
import styles from "./Cart.module.css";

export function Cart({title="Cart"}) {

    useEffect(() => {
        document.title = BASE_PAGE_TITLE + " | " + title;
    }, [title]);

    return (
        <div className={styles.cartPage}>
            Cart
        </div>
    )
}

Cart.propTypes = {
    title: PropTypes.string
}
