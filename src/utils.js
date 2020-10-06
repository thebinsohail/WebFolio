import { useSpring } from 'react-spring';

export const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20, 1.1];

export const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
export const [props, set] = useSpring(() => (
  {
    xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 },
  }));
export const fade = useSpring(
  {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
);
