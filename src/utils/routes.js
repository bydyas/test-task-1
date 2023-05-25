import {CART_PATH, SHOP_PATH} from "./consts.js";
import {Cart, Shop} from "../pages/index.js";

export const routes = [
    {
        title: "Shop",
        path: SHOP_PATH,
        Element: Shop
    },
    {
        title: "Shopping Cart",
        path: CART_PATH,
        Element: Cart
    }
];