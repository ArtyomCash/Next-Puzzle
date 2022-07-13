import { CSSProperties } from 'react';

export type LinkButtonProps = {
  lineType?: 'outlined' | 'filled';
  dark?: boolean;
  href: string;
  name: string;
  style?: CSSProperties;
};
