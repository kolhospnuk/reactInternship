import React from 'react';
import './stars.css';

import star from "../../../../icons/star.svg";

const Stars = () => {

     const getContent = Array.from({length: 5},(v,k) => k).map(() => { //create newArr [0, 1 ...]
         return (
             <img src={star} alt="star"/>
         )
     })

    return (
        <>
            {getContent}
        </>
    )
}

export default Stars;