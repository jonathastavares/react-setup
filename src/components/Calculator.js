import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

function Op({ operation }) {
  return (
    <button type="button" className="operation">
      {operation}
    </button>
  );
}

function Number({ num }) {
  const style = {};
  if (num === '0') {
    style['grid-column'] = 'span 2';
  }

  return (
    <button type="button" style={style} className="number">
      {num}
    </button>
  );
}

Number.propTypes = {
  num: PropTypes.string.isRequired,
};

Op.propTypes = {
  operation: PropTypes.string.isRequired,
};

const numberSectionButtons = [];
['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].forEach((el) => {
  numberSectionButtons.push(<Number num={`${el}`} />);
});

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <input className="quote" placeholder="0" />
        <div className="buttons">
          <div className="number-section">
            {numberSectionButtons}
          </div>
          <div className="operation-section">
            <Op operation="÷" />
            <Op operation="X" />
            <Op operation="-" />
            <Op operation="+" />
            <Op operation="=" />
          </div>
        </div>
      </div>

    );
  }
}

export default Calculator;
