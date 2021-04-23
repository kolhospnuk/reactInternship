import React from 'react';
import PropTypes from 'prop-types';
import '../scss/tableMain.css';

const TableMain = ({ eventsArr }) => {
  const table = eventsArr.map((item, i) => {
    const { name, firstFact, secondFact } = item.events;

    return (
      i === 0 ? (
        <thead key={name}>
          <tr>
            <th>{item.date}</th>
            <th>{name}</th>
            <th>{firstFact}</th>
          </tr>
        </thead>
      ) : (
        <tbody key={name}>
          <tr>
            <td>{item.date}</td>
            <td>{name}</td>
            <td>
              <table className="table-main-second">
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
    );
  });

  return (
    <table className="table-main">
      {table}
    </table>
  );
};

TableMain.propTypes = {
  eventsArr: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TableMain;
