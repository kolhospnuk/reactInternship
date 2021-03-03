
import React from 'react';

const DeleteItem = ({eventsArr, ageArr}) => {

    const deleteItem = () => {
        for (let i = 0; i < ageArr.length; i++) {
            delete eventsArr[i].age;
        }
        console.log(eventsArr);
    }

    return (
        <button type="button"
                onClick={deleteItem}>
            Delete Item
        </button>
    )
}
export default DeleteItem;