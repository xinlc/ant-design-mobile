// export { Text as default } from 'react-native';

import React from 'react';
import { Text as RNText } from 'react-native';
import tsProps from './PropsType';

const SIZE = {
  large: 16,
  medium: 14,
  small: 12,
}

export default class Text extends React.Component<tsProps, any> {
  static defaultProps = {
    size: 'medium',
    color: '#333333',
    style: {},
  }
  constructor(props) {
    super(props);
  }

  render() {
    const { size, color, style, children, ...restProps } = this.props;
    
    const textStyle = {
      fontSize: typeof size === 'string' ?  SIZE[size] : size, // size 类型是string获取对应数值
      color,
    };
    const textStyles = [
      textStyle,
      style,
    ];
    return(
      <RNText style={textStyles} { ...restProps }>
        {children}
      </RNText>
    );
  }
}