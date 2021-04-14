
import React from 'react';
import '../scss/modalSignUp.css';

const ModalSignUp = ({modalState}) => {

    let clazz = "modal";

    if (modalState) {
        clazz = `${clazz} open`
    }

    return (
        <div className={clazz}>
            <h3>Sign Up</h3>
        </div>
    )
}

export default ModalSignUp;