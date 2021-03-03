
import React from 'react';

const Sort = ({eventsArr}) => {

    const sort = () => {
        eventsArr.forEach((item, i, arr) => {
            if (i + 1 < arr.length && arr[i].date > arr[i + 1].date) {
                arr.push(item);
                arr.splice(i, 1);
                sort(eventsArr);
            }
        })
        console.log(eventsArr);
    }

    return (
        <button type="button"
                onClick={sort}>
            Sort
        </button>
    )
}
export default Sort;