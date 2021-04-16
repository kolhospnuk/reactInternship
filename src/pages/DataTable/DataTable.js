import React from 'react';
import './scss/dataTable.css';

const DataTable = () => {

    const eventsArr = [
        {
            date: 'Date',
            events: {
                name: 'Events name',
                firstFact: 'Facts'
            }
        },
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

    const btnArr = [
        {key: 'add', name: 'Add Item'},
        {key: 'delete', name: 'Delete item'},
        {key: 'sort', name: 'Sort'},
        {key: 'sortM', name: ' Sort method'}
    ]

    function getResult(btn, copyEventsArr) {

        switch (btn) {
            case 'add':
                let speakEvent = {
                    date: copyEventsArr[1].date,
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

    const table = eventsArr.map((item, i) => {
        const {name, firstFact, secondFact} = item.events;

        if (i === 0) {
            return (
                <thead key={name}>
                    <tr>
                        <th>{item.date}</th>
                        <th>{name}</th>
                        <th>{firstFact}</th>
                    </tr>
                </thead>
            )
        } else {
            return (
                <tbody key={name}>
                    <tr>
                        <td>{item.date}</td>
                        <td>{name}</td>
                        <td>
                            <table className='table-main-second'>
                                <tbody>
                                <tr>
                                    <td>{firstFact}</td>
                                </tr>
                                <tr>
                                    <td>{secondFact}</td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            )
        }
    })

    const btn = btnArr.map((item) => {
        const {key, name} = item;
        return (
            <button key={name}
                    onClick={() => getResult(key, [...eventsArr])}>
                {name}
            </button>
        )
    })

    return (
        <div className="table">
            <table className='table-main'>
                {table}
            </table>
            <div className='btn'>
                {btn}
            </div>
        </div>
    )
}

export default DataTable;