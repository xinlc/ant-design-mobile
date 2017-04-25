import React from 'react';
import tsPropsType from './PropsType';

export default class ScrollView extends React.Component<tsPropsType, any> {
  static defaultProps = {
    prefixCls: 'am-scroll-view',
  };
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}
