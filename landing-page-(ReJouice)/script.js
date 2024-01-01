gsap.registerPlugin(ScrollTrigger);
const heading = document.querySelector('.heading');
const spans = document.querySelectorAll('#section-2 .content span');
const sections = document.querySelectorAll('.large-txt-animation-section');
const circleContainers = document.querySelectorAll('.circle-container');
const largeTextUnderlineSections = document.querySelectorAll(
  '.large-text-underline-section'
);

const tl = gsap.timeline();

//lenis scroll trigger  *****************************************************
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

//*****************************************************************************

// welcome page animation   ***************************************************
const words = new SplitType('.welcome-page p');

tl.from('.word', {
  x: 50,
  duration: 1,
  stagger: 0.1,
  opacity: 0,
});

tl.to('.word', {
  delay: 0.4,
  x: -50,
  duration: 1,
  stagger: 0.1,
  opacity: 0,
});

tl.to('.welcome-page', {
  opacity: 0,
  duration: 0.8,
});

tl.to('.main', {
  opacity: 1,
  delay: -1,
});

//*****************************************************************************

// rejouice main heading animation  *******************************************
new SplitType('#section-1 .heading');

tl.from('#section-1 .char', {
  delay: -0.5,
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
largeTextUnderlineSections.forEach((section) => {
  section.querySelectorAll('.bottom p').forEach((p) => {
    gsap.from(p, {
      y: '100%',
      opacity: 0,
      delay: 0.2,
      duration: 0.6,
      stagger: 0.02,
      scrollTrigger: {
        trigger: section.querySelector('.bottom'),
        start: 'top bottom',
        scrub: false,
        toggleActions: 'restart none restart reverse',
      },
    });
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

// circle animation

const moveCircle = (e) => {
  const container = e.currentTarget;
  const boundingRect = container.getBoundingClientRect();
  // clientY gives distance from top of the global viewPort in px
  // and boundingRect.top gives the distance of top of our section from global viewport
  // so if we subtract then we will get the distance of our cursor wrt our section's viewport
  // and this we need in y in gsap

  const mouseX = e.clientX - boundingRect.left;
  const mouseY = e.clientY - boundingRect.top;

  gsap.to(container.querySelector('.circle'), {
    opacity: 1,
    duration: 0.5,
    x: mouseX,
    y: mouseY,
  });
};

const collapseCircle = (e) => {
  const container = e.currentTarget;
  gsap.to(container.querySelector('.circle'), {
    scale: 0,
    opacity: 0,
  });
};

const scaleUpCircle = (e) => {
  const container = e.currentTarget;
  gsap.to(container.querySelector('.circle'), {
    scale: 1,
    opacity: 1,
  });
};

circleContainers.forEach((container) => {
  container.addEventListener('mousemove', moveCircle);
  container.addEventListener('mouseleave', collapseCircle);
  container.addEventListener('mouseenter', scaleUpCircle);
});

// swiper js
const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 14,
  loop: true,
  autoplay: true,
  freeMode: {
    enabled: true,
    momentumVelocityRatio: 1,
  },
});

// footer heading animation **********************************

const chars = new SplitType('#section-10 .heading div');

gsap.from('#section-10 .char', {
  y: '-100%',
  duration: 1,
  stagger: 0.04,
  ease: 'Power4.inOut',
  scrollTrigger: {
    trigger: '#section-10 .heading',
    scrub: false,
    toggleActions: 'restart none none none',
  },
});

gsap.from('#section-10 .top', {
  opacity: 0,
  y: '-100%',
  scrollTrigger: {
    trigger: '#section-10 .top',
    scrub: true,
  },
});
