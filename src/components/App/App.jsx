import { Route, Routes } from 'react-router-dom';
import {Navigation} from "../Navigation/Navigation.jsx";
import {routes} from "../../utils/routes.js";
import styles from "./App.module.css";


function App() {
  return (
   <>
       <header>
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
