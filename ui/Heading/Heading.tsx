import { createElement, ReactNode } from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import { root, fontSizes, sprinkles, Sprinkles } from './Heading.css';
import type { FontSize } from './Heading.css';

type TextElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';

type Props = {
  align?: Sprinkles['align'];
  size: FontSize;
  as?: TextElements;
  children: ReactNode;
  className?: string;
};

export const Heading: FC<Props> = ({
  align,
  as,
  size,
  className,
  ...props
}) => {
  const component = as ?? size;

  return createElement(component, {
    ...props,
    className: clsx(className, root, fontSizes[size], sprinkles({ align })),
  });
};
