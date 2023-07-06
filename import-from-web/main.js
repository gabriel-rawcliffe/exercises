import { animate, stagger } from 'https://cdn.skypack.dev/motion'
const box = document.getElementsByClassName('box')
animate(
  box,
  { x: 600, rotate: 360 },
  {
    delay: stagger(0.2),
    duration: 3,
    repeat: 4,
    direction: 'alternate',
    easing: 'ease-in-out',
  }
)
