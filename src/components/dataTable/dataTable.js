import React from 'react';
import './dataTable.css';

const DataTable = () => {

    let eventsArr = [
        {date: 2000, events: 'Study at school №26'},
        {date: 2017, events: 'Get marry'},
        {date: 1993, events: 'Birth in Kropyvnytsky'},
        {date: 2015, events: 'Passed the military department'},
        {date: 2010, events: 'Enter the flight academy'}
    ]

    const datesCol = eventsArr.map((item) => {
        return (
            <tr>{item.date}</tr>
        )
    })

    const eventsCol = eventsArr.map((item) => {
        return (
            <tr>{item.events}</tr>
        )
    })

    function sort() {
        eventsArr.forEach((item, i, arr) => {
            if (i + 1 < arr.length && arr[i].date > arr[i + 1].date) {
                arr.push(item);
                arr.splice(i, 1);
                sort();
            }
        })
        console.log(eventsArr);
    }

    function sortFunction() {
        eventsArr.sort((a, b) => a.date > b.date ? 1 : -1);
        console.log(eventsArr);
    }

    function addItem() {
        eventsArr.push({date: 2020, events: 'Enter the react internship'});
        console.log(eventsArr);
    }

    function deleteItem() {
        eventsArr.pop();
        console.log(eventsArr);
    }

    return (
        <div className="table">
            <table>
                <td>
                    {datesCol}
                </td>
                <td>
                    {eventsCol}
                </td>
            </table>
            <div className='btn'>
                <button type="button"
                        onClick={sort}>
                    Sort
                </button>
                <button type="button"
                        onClick={sortFunction}>
                    Sort Function
                </button>
                <button type="button"
                        onClick={addItem}>
                    Add item
                </button>
                <button type="button"
                        onClick={deleteItem}>
                    Delete Item
                </button>
            </div>
        </div>
    )
}

export default DataTable;


// <DataTableBtn sort={sort}
//               sortFunction={sortFunction}
//               addItem={addItem}
//               deleteItem={deleteItem}/>