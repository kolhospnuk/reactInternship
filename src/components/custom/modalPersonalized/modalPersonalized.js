
import React from 'react';
import './modalPersonalized.css';

const ModalPersonalized = ({modalState}) => {

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

export default ModalPersonalized;