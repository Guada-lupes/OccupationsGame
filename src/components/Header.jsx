import React from 'react';
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { logOut } from '../../utils/login';
import { usePlayer } from '../context/PlayerContext';

export const Header = () => {
    const location = useLocation();
    const showHeader = location.pathname != "/";
    const {dispatch} = usePlayer();
    return (
        <>
        {showHeader && <div>
            <Link to={"/all_tribus"}><p>Inicio</p></Link>
            {/* <Link>Como jugar</Link>
            <Link>Sobre la aplicación</Link>
            <Link>Avatar</Link> */}
            <Link to={"/"}><p onClick={()=>logOut(dispatch)}>Salir</p></Link>
        </div>}
        </>
        
    );
};

export default Header;