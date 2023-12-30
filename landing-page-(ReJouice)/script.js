gsap.registerPlugin(ScrollTrigger);
const cursor = document.querySelector('.cursor');
const section1 = document.querySelector('#section-1');
const heading = document.querySelector('.heading');
const spans = document.querySelectorAll('#section-2 .content span');

const followMouse = (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
  });
};

const removeCursorEffect = () => {
  gsap.to(cursor, {
    opacity: 0,
    scale: 0,
  });
};

const addCursorEffect = () => {
  gsap.to(cursor, {
    opacity: 1,
    scale: 1,
  });
};

// rejouice main heading animation
gsap.from('#section-1 .heading span', {
  delay: 0.2,
  y: '100%',
  opacity: 0,
  stagger: 0.08,
});

// section-2 main text animation
spans.forEach((span) => {
  gsap.fromTo(
    span,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.02,
      delay: 0.4,
      ease: 'Power4.out',
      scrollTrigger: {
        trigger: '#section-2 .content',
        scrub: false,
        markers: true,
        toggleActions: 'restart none restart reverse',
      },
    }
  );
});

section1.addEventListener('mousemove', followMouse);
section1.addEventListener('mouseleave', removeCursorEffect);
section1.addEventListener('mouseenter', addCursorEffect);
