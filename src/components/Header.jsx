import React from 'react';
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { logOut } from '../../utils/login';
import { usePlayer } from '../context/PlayerContext';
import styles from "../styles/header.module.css"

export const Header = () => {
    const location = useLocation();
    const showHeader = location.pathname != "/";
    const {dispatch} = usePlayer();
    return (
        <>
        {showHeader && <div className={styles.container}>
            <Link to={"/all_tribus"}>Inicio</Link>
            {/* <Link>Como jugar</Link>
            <Link>Sobre la aplicación</Link>
             */}
             <Link to={"/player"}>Jugador</Link>
            <Link to={"/"}onClick={()=>logOut(dispatch)}>Salir</Link>
        </div>}
        </>
        
    );
};

export default Header;