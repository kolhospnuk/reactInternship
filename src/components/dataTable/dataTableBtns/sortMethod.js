
import React from 'react';

const SortMethod = ({eventsArr}) => {

    const sortMethod = () => {
        eventsArr.sort((a, b) => a.date > b.date ? 1 : -1);
        console.log(eventsArr);
    }

    return (
        <button type="button"
                onClick={sortMethod}>
            Method "sort"
        </button>
    )
}
export default SortMethod;