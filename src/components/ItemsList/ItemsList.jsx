import styles from "./ItemsList.module.css";

export function ItemsList() {
    return (
        <ul className={styles.itemsList}>
            {[1,2,3].map(i => (
                <li className={styles.item} key={i}>
                    <img className={styles.picture} src="https://e7.pngegg.com/pngimages/455/197/png-clipart-hamburger-veggie-burger-cheeseburger-chicken-sandwich-burger-and-sandwich-miscellaneous-food.png" alt="Title"/>
                    <h3 className={styles.title}>Title</h3>
                    <button type={"button"}>Add to cart</button>
                </li>
            ))}
        </ul>
    )
}