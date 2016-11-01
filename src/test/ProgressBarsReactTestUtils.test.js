import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import ProgressBars from '../components/ProgressBars';

function setup(barOptions) {
  let props = {
    barOptions: barOptions
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<ProgressBars {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('ProgressBars via React Test Utils', () => {
  it('renders two div', () => {
    let _barOptions = [{percent: 67, barValue: 'p1', color: '#3FC7FA'},{percent: 105, barValue: 'p2', color: '#FF0000'},{percent: 97, barValue: 'p3', color: '#3FC7FA'}];
    const { output } = setup(_barOptions);
    expect(output.type).toBe('div');
    let [ div ] = output.props.children;
    expect(div.type).toBe('div');
    let div1 = output.props.children[0];
     expect(div1.props.className).toBe('myProgress');
  });
});
