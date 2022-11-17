import {
  AriaRole,
  createElement,
  CSSProperties,
  forwardRef,
  ReactNode,
} from 'react';
import { splitProps } from './splitProps';
import { sprinkles, Sprinkles } from './sprinkles.css';

interface Props extends Sprinkles {
  as?: string;
  className?: string;
  children?: ReactNode;
  UNSAFE_style?: CSSProperties;
  role?: AriaRole;
}

export const Box = forwardRef(
  ({ as, className = '', UNSAFE_style, ...props }: Props, ref) => {
    const { atomProps, nativeProps } = splitProps(props);
    const classNames = sprinkles(atomProps);
    const component = as ?? 'div';

    return createElement(component, {
      ref,
      style: UNSAFE_style,
      className: `${classNames} ${className}`,
      ...nativeProps,
    });
  },
);

Box.displayName = 'Box';
