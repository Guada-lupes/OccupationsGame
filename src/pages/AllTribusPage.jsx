import React from 'react';
import { tribus } from '../../data/tribus';

const AllTribusPage = () => {
//aqui se presenan los iconos de todas las tribus
    return (
        <div>
            {tribus.map((tribu, index)=> (
                <div key={index}>{tribu.id}</div>
            ))}
        </div>
    );
};

export default AllTribusPage;