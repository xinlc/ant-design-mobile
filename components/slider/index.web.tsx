import React from 'react';
import RcSlider from 'rc-slider';
import SliderProps from './PropsType';

const Handle = RcSlider.Handle;

export default class Slider extends React.Component<SliderProps, any> {
  static defaultProps = {
    prefixCls: 'am-slider',
  };
  render() {
    const { min, max } = this.props;
    const handle = (props) => {
      const { disabled, value, ...restProps } = props;
      delete restProps.dragging;
      return (
        <Handle
          role="slider"
          aria-valuenow={value}
          aria-disabled={disabled}
          aria-valuemax={max}
          aria-valuemin={min}
          {...restProps}
        />
      );
    };
    return (
      <div className={`${this.props.prefixCls}-wrapper`}>
        <RcSlider {...this.props} handle={handle} />
      </div>
    );
  }
}
