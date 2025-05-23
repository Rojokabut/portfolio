import { Variants } from "framer-motion";

type Direction = 'up' | 'down' | 'left' | 'right' | 'none' | '';

export const fadeIn = (direction: Direction, delay: number): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      z: direction === 'none' ? 0 : direction === '' ? 0 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 10,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
