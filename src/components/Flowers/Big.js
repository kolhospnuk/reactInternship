import React from 'react';
import './scss/big.css';

const BigFlower = ({flowerAbout, classBigFlower}) => {

    if (flowerAbout) {
        classBigFlower = `${classBigFlower} big-flower-about`
    }

    return (
        <div className={classBigFlower}>
            <div className="big-flower-item"/>
            <div className="big-flower-item"/>
            <div className="big-flower-item"/>
            <div className="big-flower-item"/>
        </div>
    )
}

export default BigFlower;