import {useEffect} from "react";
import { Route, Routes } from 'react-router-dom';
import {Navigation} from "../Navigation/Navigation.jsx";
import useShopsStore from "../../store/useShopsStore.js";
import {routes} from "../../utils/routes.js";
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
               {routes.map(({path, Element}, i) => (
                   <Route key={i} path={path} element={<Element />} />
               ))}
           </Routes>
       </main>
   </>
  )
}

export default App
