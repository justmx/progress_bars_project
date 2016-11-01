import React, {PropTypes} from 'react';
import ProgressBar from './ProgressBar';

const ProgressBars = ({barOptions}) => {
  let key;
  const _progrssBars = barOptions.map(function(option,index){
    return (
        <ProgressBar key={'bar'+ index} percent={option.percent} color={option.color}/>
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
