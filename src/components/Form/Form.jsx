import {useState} from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";

const initUserData = {
    name: "",
    email: "",
    phone: "",
    address: ""
}

export function Form({onSubmit}) {
    const [userData, setUserData] = useState(initUserData);

    const handleInput = (event) => {
        const target = event.target;
        setUserData({...userData, [target.name]: target.value});
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <label>
                <h4>Name:</h4>
                <input onChange={handleInput} className={styles.input} type={"text"} name={"name"} value={userData.name}/>
            </label>
            <label>
                <h4>Email:</h4>
                <input onChange={handleInput} className={styles.input} type={"email"} name={"email"} value={userData.email}/>
            </label>
            <label>
                <h4>Phone:</h4>
                <input onChange={handleInput} className={styles.input} type={"tel"} name={"phone"} value={userData.phone}/>
            </label>
            <label>
                <h4>Address:</h4>
                <input onChange={handleInput} className={styles.input} type={"text"} name={"address"} value={userData.address}/>
            </label>
        </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func
}