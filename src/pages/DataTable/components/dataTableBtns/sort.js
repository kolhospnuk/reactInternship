//
// import React from 'react';
//
// const Sort = ({eventsArr, copyEventsArr}) => {
//
//     const sort = (eventsArr, copyEventsArr) => {
//         copyEventsArr.forEach((item, i, arr) => {
//             if (i + 1 < arr.length && arr[i].date > arr[i + 1].date) {
//                 arr.push(item);
//                 arr.splice(i, 1);
//                 sort(copyEventsArr);
//             }
//         })
//         console.log(eventsArr);
//         console.log(copyEventsArr);
//     }
//
//     return (
//         <button type="button"
//                 onClick={() => sort(eventsArr, copyEventsArr)}>
//             Sort
//         </button>
//     )
// }
// export default Sort;