
import React from 'react';
import './small.css';

const SmallFlower = ({orangeFlower, flowerTittle}) => {

    let classFlower = "small-flower-item";

    if (orangeFlower) {
        classFlower = `${classFlower} orange`;
    }

            return (
                <div>
                    <div className="small-flower">
                        <div className={classFlower}/>
                        <div className={classFlower}/>
                        <div className={classFlower}/>
                        <div className={classFlower}/>
                    </div>
                    <span>{flowerTittle}</span>
                </div>
            )
}

export default SmallFlower;