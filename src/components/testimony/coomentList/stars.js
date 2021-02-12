import React from 'react';

const Stars = ({starsData}) => {

    const {logo, alt} = starsData;


    const element = () => {
        return (
            <img src={logo} alt={alt}/>
        )
    }

    return (
        <div className="testimony-list-img">
            {element}
            {element}
            {element}
            {element}
            {element}
        </div>
    )
}

export default Stars;