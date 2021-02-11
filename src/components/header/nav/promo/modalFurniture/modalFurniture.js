
import React from 'react';
import './modalFurniture.css';

const ModalFurniture = ({modalState}) => {

    let clazz = "modal";

    if (modalState) {
        clazz = `${clazz} open`
    }

    return (
        <div className={clazz}>
            <h3>Explore Furniture</h3>
        </div>
    )
}

export default ModalFurniture;