import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './Calculator.css';

function Op({ operation, cb }) {
  return (
    <button type="button" className="operation" onClick={cb}>
      {operation}
    </button>
  );
}

function Number({ num, cb }) {
  const style = {};
  if (num === '0') {
    style['grid-column'] = 'span 2';
  }

  return (
    <button type="button" style={style} className="number" onClick={cb}>
      {num}
    </button>
  );
}

Number.propTypes = {
  num: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
};

Op.propTypes = {
  operation: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.numberSectionButtons = [];
    ['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].forEach((el) => {
      this.numberSectionButtons.push(<Number num={`${el}`} cb={this.handleClick} />);
    });
  }

  handleClick(e) {
    this.setState((oldState) => calculate(oldState, e.target.innerText));
  }

  render() {
    let val = 0;
    const { total, next } = this.state;
    if (next) {
      val = next;
    } else if (total) {
      val = total;
    }
    return (
      <div className="calculator">
        <input className="quote" placeholder="0" value={val} readOnly />
        <div className="buttons">
          <div className="number-section">
            {this.numberSectionButtons}
          </div>
          <div className="operation-section">
            <Op operation="÷" cb={this.handleClick} />
            <Op operation="x" cb={this.handleClick} />
            <Op operation="-" cb={this.handleClick} />
            <Op operation="+" cb={this.handleClick} />
            <Op operation="=" cb={this.handleClick} />
          </div>
        </div>
      </div>

    );
  }
}

export default Calculator;
