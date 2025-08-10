import React from 'react';
import { Link } from 'react-router-dom';

export function Button({texto, link, onClick, id}) {

    return (
<Link to={link ?? "#"} >
        <button key={id} onClick={onClick} >
            {texto}
        </button>
</Link>

    );
}

export default Button;