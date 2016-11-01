import React, {PropTypes} from 'react';
import Button from './Button';
import ProgressBars from './ProgressBars';
import SelectInput from './SelectInput';
import {connect} from 'react-redux';
import StartupActions from '../redux/StartupRedux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonOptions: this.props.buttonOptions,
      barOptions: this.props.barOptions,
      currentBarNo: 'p1',
      limit: this.props.limit
    };
    this.onPress = this.onPress.bind(this);
    this.onChangeSelector = this.onChangeSelector.bind(this);
  }

  componentWillReceiveProps (newProps) {
    if (newProps) {
      this.setState({buttonOptions: newProps.buttonOptions,
                     barOptions:  newProps.barOptions,
                     limit:  newProps.limit});
    }
  }



  onPress(event){
    event.preventDefault();
    const _value = event.target.value;
    const _currentBarNo = this.state.currentBarNo;
    let newbarOptions = this.state.barOptions.map((option, index) => {
      if (option.barValue === _currentBarNo) {
        let newPercent = +option.percent + +_value;
        let percent = newPercent < 0 ? 0 : newPercent;
        percent = percent > this.state.limit ? this.state.limit: percent;
        let color = '';
        if(percent>=100){
          color= '#FF0000';
        }else {
          color= '#3FC7FA';
        }
        return Object.assign({}, option, {
          percent: percent,
          color: color
        });
      }
       return option;
    });
    this.setState({barOptions: newbarOptions});
}

onChangeSelector(event){
  event.preventDefault();
  const _value = event.target.value;
  const _name = event.target.name;
  this.setState({currentBarNo: _value});
}

  render () {
    if(this.state.barOptions){
      let allOptions =  this.state.barOptions.map((option, index) => {
          return {text: '#progress'+(index+1), value: 'p' + (index+1) };
        });
        return (
          <div className="container-fluid">
            <h1>Progress Bars Demo</h1>
            <div>
              <ProgressBars barOptions={this.state.barOptions}/>
            </div>
          <div>
            <SelectInput
            name="ProgressBar"
            value={this.state.currentBarNo}
            onChange={this.onChangeSelector}
            options={allOptions}
            />
              {this.state.buttonOptions.map((option) => {
                return <Button defaultValue={option.toString()} onPress={this.onPress} key={option}/>;
              })
            }
          </div>
        </div>
        );
      } else {
          return (
          <div className="container-fluid">
            <h1>Progress Bars Demo</h1>
          </div>
          );
      }
  }
}

App.propTypes = {
  barOptions: PropTypes.array.isRequired,
  buttonOptions: PropTypes.array.isRequired,
  limit: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  let allbarOptions= [];
  let buttonOptions= [];
  let limit= '';
  if(state.pageState.barInfo){
     allbarOptions = state.pageState.barInfo.bars.map((option, index) => {
        return {percent: option, barValue: 'p' + (index+1), color: option >= 100 ? '#FF0000': '#3FC7FA' };
      });
      buttonOptions = state.pageState.barInfo.buttons;
      limit=state.pageState.barInfo.limit.toString();
  }
  return {
    buttonOptions: buttonOptions,
    barOptions: allbarOptions,
    limit: limit
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
