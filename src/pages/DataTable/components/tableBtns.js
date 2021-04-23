import React from 'react';
import PropTypes from 'prop-types';
import '../scss/tableBtns.css';

const TableBtns = ({ btnArr, getResult, eventsArr }) => {
  const btn = btnArr.map((item) => {
    const { key, name } = item;
    return (
      <button
        type="button"
        key={name}
        className="table-btn-item"
        onClick={() => getResult(key, [...eventsArr])}
      >
        {name}
      </button>
    );
  });

  return (
    <div className="table-btn">
      {btn}
    </div>
  );
};

TableBtns.propTypes = {
  btnArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  getResult: PropTypes.func.isRequired,
  eventsArr: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TableBtns;
