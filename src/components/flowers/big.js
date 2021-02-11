import React from 'react';
import './big.css';

const BigFlower = ({bigFlower}) => {

    return (
        <div className={bigFlower}>
            <div className="big-flower-item"/>
            <div className="big-flower-item"/>
            <div className="big-flower-item"/>
            <div className="big-flower-item"/>
        </div>
    )
}

export default BigFlower;