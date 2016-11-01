import React, {PropTypes} from 'react';

const ProgressBars = ({barOptions}) => {
  let key;
  const _progrssBars = barOptions.map(function(option,index){
    key = "bar" + index;
    let divStyle = {
      width: option.percent + '%',
      background: option.color
    };
    return (
      <div className="myProgress" key={key}>
        <div className="myBar" style={divStyle}>
        </div>
        <div className="myText">
          {option.percent}%
        </div>
      </div>
    );
    });
    return (
      <div>
        {_progrssBars}
      </div>
    );
  };

  ProgressBars.propTypes = {
    barOptions: PropTypes.array.isRequired
  };

export default ProgressBars;
