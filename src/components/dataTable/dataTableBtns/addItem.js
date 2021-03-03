
import React from 'react';

const AddItem = ({eventsArr, ageArr}) => {

    const addItem = () => {
        for (let i = 0; i < ageArr.length; i++) {
            eventsArr[i].age = ageArr[i];
        }
        console.log(eventsArr);
    }

    return (
        <button type="button"
                onClick={addItem}>
            Method "sort"
        </button>
    )
}
export default AddItem;