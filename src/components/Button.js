import React, { Component, PropTypes } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultValue: this.props.defaultValue,
      onPress: this.props.onPress
    };
}
  render () {
    return (
      <button className="btn btn-primary mybutton btn-lg" name={this.state.defaultValue} value={this.state.defaultValue} onClick={this.props.onPress}>{this.state.defaultValue}</button>
    );
  }
}

Button.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Button;
