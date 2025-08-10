import React from 'react';
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useUser } from '../../utils/useUser';

export const Header = () => {
    const location = useLocation();
    const showHeader = location.pathname != "/";
    const {logout} = useUser();

    return (
        <>
        {showHeader && <div>
            <Link to={"/activities"}><p>Inicio</p></Link>
            {/* <Link>Como jugar</Link>
            <Link>Sobre la aplicación</Link>
            <Link>Avatar</Link> */}
            <Link to={"/"}><p onClick={logout}>Salir</p></Link>
        </div>}
        </>
        
    );
};

export default Header;