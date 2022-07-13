import { RefObject } from 'react';

export const scrollToBlock = (ref: RefObject<HTMLElement>): void => {
  if (ref.current) {
    const top = ref.current?.getBoundingClientRect().top;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};
