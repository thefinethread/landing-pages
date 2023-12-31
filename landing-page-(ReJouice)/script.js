gsap.registerPlugin(ScrollTrigger);
const cursor = document.querySelector('.cursor');
const section1 = document.querySelector('#section-1');
const heading = document.querySelector('.heading');
const spans = document.querySelectorAll('#section-2 .content span');
const sections = document.querySelectorAll('.large-txt-animation-section');

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

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

sections.forEach((section) => {
  section.querySelectorAll('.top span').forEach((span) => {
    gsap.from(span, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.02,
      delay: 0.2,
      ease: 'Power4.out',
      scrollTrigger: {
        trigger: section.querySelector('.top'),
        scrub: false,
        toggleActions: 'restart none restart reverse',
      },
    });
  });
  gsap.to(section.querySelector('.divider'), {
    width: '100%',
    delay: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: section.querySelector('.divider'),
      scrub: false,
      toggleActions: 'restart none restart reverse',
    },
  });

  // section-2 main text animation
  section.querySelectorAll('.content span').forEach((span) => {
    gsap.from(span, {
      y: '100%',
      opacity: 0,
      delay: 0.2,
      duration: 0.6,
      stagger: 0.02,
      ease: 'Power4.out',
      scrollTrigger: {
        trigger: section.querySelector('.content'),
        scrub: false,
        toggleActions: 'restart none restart reverse',
      },
    });
  });
});

// section-3
document.querySelectorAll('#section-3 .bottom p').forEach((p) => {
  gsap.from(p, {
    y: '100%',
    opacity: 0,
    delay: 0.2,
    duration: 0.6,
    stagger: 0.02,
    scrollTrigger: {
      trigger: '#section-3 .bottom',
      start: 'top bottom',
      scrub: false,
      toggleActions: 'restart none restart reverse',
    },
  });
});

// section-5
gsap.to('.txt-animate', {
  translateY: '-40%',
  duration: 2.2,
  delay: 0.1,
  ease: 'Power4.inOut',
  scrollTrigger: {
    trigger: '.txt-animate',
    scrub: false,
    start: '30% bottom',
    end: '60% top',
    toggleActions: 'restart none restart reset',
  },
});

section1.addEventListener('mousemove', followMouse);
section1.addEventListener('mouseleave', removeCursorEffect);
section1.addEventListener('mouseenter', addCursorEffect);
