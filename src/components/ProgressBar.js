import React, {PropTypes} from 'react';

const ProgressBar = ({key, percent, color}) => {
  let divStyle = {
    width: percent + '%',
    background: color
  };
    return (
      <div className="myProgress" key={key}>
        <div className="myBar" style={divStyle}>
        </div>
        <div className="myText">
          {percent}%
        </div>
      </div>
    );
  };


    ProgressBar.propTypes = {
      key: PropTypes.string.isRequired,
      percent: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    };

  export default ProgressBar;
