import React from 'react';

interface Props {
  children?: any;
  onScroll?: Function;
  style?: React.CSSProperties;
  /** below RN only */
  contentContainerStyle?: React.CSSProperties;
  keyboardDismissMode?: 'none'|'interactive'|'on-drag';
  horizontal?: boolean;
  keyboardShouldPersistTaps?: 'always'|'never'|'handled';
  onContentSizeChange?: Function;
  removeClippedSubviews?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
  /** below web only */
  className?: string;
  prefixCls?: string;
}

export default Props;
