import React from 'react';
import Challenge from './Challenge';
import OccupationsCard from "./OccupationsCard"

const TribuCard = () => {
    //esta es la carta que se despliega cuando entramos en una tribu
    return (
        <div>
            <h1>nombre de la tribu</h1>
            <h3>descripcion</h3>
<Challenge/>
<OccupationsCard/>
        </div>
    );
};

export default TribuCard;