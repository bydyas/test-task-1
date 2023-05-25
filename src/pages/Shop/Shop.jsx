import {useEffect} from "react";
import PropTypes from "prop-types";
import {ShopList} from "../../components/ShopList/ShopList.jsx";
import {ItemsList} from "../../components/ItemsList/ItemsList.jsx";
import {BASE_PAGE_TITLE} from "../../utils/consts.js";
import styles from "./Shop.module.css";

export function Shop({title="Shop"}) {
    useEffect(() => {
        document.title = BASE_PAGE_TITLE + " | " + title;
    }, [title]);

    return (
        <div className={styles.shopPage}>
            <ShopList />
            <ItemsList />
        </div>
    )
}

Shop.propTypes = {
    title: PropTypes.string
}