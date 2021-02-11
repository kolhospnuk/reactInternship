
import React from 'react';
import './small.css';

const SmallFlower = ({colorFlower, flowerTittle}) => {

            return (
                <div>
                    <div className="small-flower">
                        <div className={colorFlower}/>
                        <div className={colorFlower}/>
                        <div className={colorFlower}/>
                        <div className={colorFlower}/>
                    </div>
                    <span>{flowerTittle}</span>
                </div>
            )
}

export default SmallFlower;