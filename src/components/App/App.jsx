import {useEffect} from "react";
import { Route, Routes, Navigate  } from 'react-router-dom';
import {Navigation} from "../Navigation/Navigation.jsx";
import useShopsStore from "../../store/useShopsStore.js";
import {SHOP_PATH, CART_PATH} from "../../utils/consts.js";
import {Cart, Shop} from "../../pages/index.js";
import {ItemsList} from "../ItemsList/ItemsList.jsx";
import styles from "./App.module.css";

function App() {
    const fetch = useShopsStore((state) => state.fetch);

    useEffect(() => fetch, []);

  return (
   <>
       <header className={styles.header}>
           <Navigation />
       </header>
       <main className={styles.main}>
           <Routes>
               <Route path="/" element={<Navigate to={SHOP_PATH} />} />
               <Route path={SHOP_PATH} element={<Shop />}>
                   <Route path={SHOP_PATH+"/:id"} element={<ItemsList />} />
               </Route>
               <Route path={CART_PATH} element={<Cart />} />
           </Routes>
       </main>
   </>
  )
}

export default App
