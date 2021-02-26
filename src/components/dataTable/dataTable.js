import React from 'react';
import './dataTable.css';

const DataTable = () => {

    let eventsArr = [
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
            date: 2010,
            events: {
                name: 'Enter the flight academy',
                firstFact: 'Faculty - Search and rescue',
                secondFact: 'Football students team'
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
            date: 2017,
            events: {
                name: 'Get marry',
                firstFact: "Wife's name Anna",
                secondFact: 'I am happy'
            }
        }
    ]

    let ageArr = [0, 7, 17, 23, 25];

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

    function addItem() {
        for (let i = 0; i < ageArr.length; i++) {
            eventsArr[i].age = ageArr[i];
        }
        console.log(eventsArr);
    }

    function deleteItem() {
        for (let i = 0; i < ageArr.length; i++) {
            delete eventsArr[i].age;
        }
        console.log(eventsArr);
    }

    function makeNewObj() {
        let newObj = {...eventsArr[0], date: 1995};
        console.log(newObj);
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
                <button type="button"
                        onClick={addItem}>
                    Add item
                </button>
                <button type="button"
                        onClick={deleteItem}>
                    Delete Item
                </button>
                <button type="button"
                        onClick={makeNewObj}>
                    New Object
                </button>
            </div>
        </div>
    )
}

export default DataTable;