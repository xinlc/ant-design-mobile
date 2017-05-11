import React from 'react';

interface Props {
  children?: any;
  onScroll?: Function;
  style?: React.CSSProperties;
  horizontal?: boolean;
  /** below RN only */
  contentContainerStyle?: React.CSSProperties;
  keyboardDismissMode?: 'none'|'interactive'|'on-drag';
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
