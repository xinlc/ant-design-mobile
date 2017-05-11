
interface TextProps {
  size?: 'large' | 'medium' | 'small' | number;
  color?: string;
  style?: Object | Array<Object>;

  /** rn only */
  onPress?: (x?: any) => void;
  onLongPress?: (x?: any) => void;

}

export default TextProps;