import React from 'react';
import './big.css';

const BigFlower = ({flowerAbout}) => {

    let classFlower =  "big-flower";

    if (flowerAbout) {
        classFlower = `${classFlower} big-flower-about`
    }

    return (
        <div className={classFlower}>
            <div className="big-flower-item"/>
            <div className="big-flower-item"/>
            <div className="big-flower-item"/>
            <div className="big-flower-item"/>
        </div>
    )
}

export default BigFlower;