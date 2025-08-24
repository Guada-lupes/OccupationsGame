import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from "react-router-dom";
import styles from "../styles/main.module.css"

const Layout = ({children}) => {
      const location = useLocation();
      const show = location.pathname != "/";

    return (
        <div className={styles.layout}>
            {show && <Header/>}
            <main className={styles.main}>
                {children}
            </main>
            {show && <Footer/>}
        </div>
    );
};

export default Layout;