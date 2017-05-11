import React from 'react';
import classNames from 'classnames';
import tsPropsType from './PropsType';

export default class ScrollView extends React.Component<tsPropsType, any> {
  static defaultProps = {
    prefixCls: 'am-scroll-view',
    horizontal: false,
  };
  render() {
    const { children, className, prefixCls, horizontal } = this.props;
    const wrapCls = {
      [className as string]: className,
      [prefixCls as string]: true,
      [`${prefixCls}-horizontal`]: horizontal,
    };
    return (
      <div
        className={classNames(wrapCls)}
      >
        {children}
      </div>
    );
  }
}
