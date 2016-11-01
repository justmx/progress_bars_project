import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import ProgressBar from '../components/ProgressBar';

function setup(key,percent,color) {
  let props = {
    key: key,
    percent: percent,
    color: color
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<ProgressBar {...props}/>);
  let output = renderer.getRenderOutput();
  return {
    props,
    output,
    renderer
  };
}

describe('ProgressBar via React Test Utils', () => {
  it('renders two div with className m', () => {
    const { output } = setup('bar1','67','#3FC7FA');
    expect(output.type).toBe('div');
    let [ div ] = output.props.children;
    expect(div.type).toBe('div');
  });

  it('div with className "myBar" and background with "#3FC7FA"', () => {
    const { output } = setup('bar1','67','#3FC7FA');
    let [ div ] = output.props.children;
    expect(div.props.className).toBe('myBar');
    expect(div.props.style.background).toBe('#3FC7FA');
  });
});
