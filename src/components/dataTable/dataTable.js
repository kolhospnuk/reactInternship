import React from 'react';
import './dataTable.css';
// import AddItem from "./dataTableBtns/addItem";
// import DeleteItem from "./dataTableBtns/deleteItem";
// import Sort from "./dataTableBtns/sort";
// import SortMethod from "./dataTableBtns/sortMethod";

const DataTable = () => {

    const eventsArr = [
        {
            date: 1993,
            events: {
                name: 'Birth in Kropyvnytsky',
                firstFact: 'Name - Anton',
                secondFact: 'Surname - Momot'
            }
        },
        {
            date: 2000,
            events: {
                name: 'Study at school №26',
                firstFact: 'Study at junior school',
                secondFact: 'Study at high school'
            }
        },
        {
            date: 2015,
            events: {
                name: 'Passed the military department',
                firstFact: "Very hard",
                secondFact: 'I am a strong man'
            }
        },
        {
            date: 2010,
            events: {
                name: 'Enter the flight academy',
                firstFact: 'Faculty - Search and rescue',
                secondFact: 'Football students team'
            }
        },
        {
            date: 2017,
            events: {
                name: 'Get marry',
                firstFact: "Wife's name Anna",
                secondFact: 'I am happy'
            }
        }
    ];

    const datesCol = eventsArr.map((item) => {
        return (
            <tr className='date'>{item.date}</tr>
        )
    })

    const eventsCol = eventsArr.map((item) => {
        const {firstFact, secondFact} = item.events;

        return (
            <tr>
                {item.events.name}
                <table className='table-main-in'>
                    <td>
                        <tr>{firstFact}</tr>
                    </td>
                    <td>
                        <tr>{secondFact}</tr>
                    </td>
                </table>
            </tr>
        )
    })

    function getResult(btn, copyEventsArr) {

        switch (btn) {
            case 'add':
                let speakEvent = {
                    date: copyEventsArr[0].date,
                    events: {...copyEventsArr.events, name: 'First words', firstFact: "Mom", secondFact: "Dad"}
                };
                copyEventsArr.push(speakEvent);
                break;

            case 'delete':
                copyEventsArr.pop();
                break;

            case 'sort':

            function sort() {
                copyEventsArr.forEach((item, i, arr) => {
                    if (i + 1 < arr.length && arr[i].date > arr[i + 1].date) {
                        arr.push(item);
                        arr.splice(i, 1);
                        sort(copyEventsArr);
                    }
                })
            }

                sort();
                break;

            case 'sortM':
                copyEventsArr.sort((a, b) => a.date > b.date ? 1 : -1);
                break

            default:
                console.log('error');
        }

        console.log(eventsArr);
        console.log(copyEventsArr);
    }

    return (
        <div className="table">
            <table className='table-main'>
                <td>
                    {datesCol}
                </td>
                <td>
                    {eventsCol}
                </td>
            </table>
            <div className='btn'>
                <button onClick={() => getResult('add', [...eventsArr])}>
                    Add item
                </button>
                <button onClick={() => getResult('delete', [...eventsArr])}>
                    Delete item
                </button>
                <button onClick={() => getResult('sort', [...eventsArr])}>
                    Sort
                </button>
                <button onClick={() => getResult('sortM', [...eventsArr])}>
                    Sort method
                </button>
            </div>
        </div>
    )
}

export default DataTable;