//lenis scroll trigger  *****************************************************
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const tl = gsap.timeline();

const scrollTween = tl.to('#page-1 h1', {
  x: '-75%',
  scrollTrigger: {
    trigger: '#page-1',
    pin: '#page-1',
    scrub: 3,
  },
});

const letters = new SplitType('#page-2 h1');

const chars = document.querySelectorAll('#page-2 h1 .char');

const random = () => Math.random() * (1800 - 100) + 100;

chars.forEach((char) => {
  tl.fromTo(
    char,
    {
      opacity: 0,
      yPercent: -random(),
    },
    {
      yPercent: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#page-2 h1',
        // markers: true,
        scrub: 2,
        start: 'top 100%',

        end: '+=200 bottom',
      },
    }
  );
});

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  const yValue = +img.getAttribute('data-speed');

  tl.to(
    img,

    {
      yPercent: -yValue * 400,
      opacity: 1,
      scrollTrigger: {
        trigger: '#page-2',
        scrub: 2,
        start: 'top center',
      },
    }
  );
});

const h1 = new SplitType('.thanks-container h1');

gsap.from('.thanks-container h1 .char', {
  stagger: 0.1,
  yPercent: -400,
  opacity: 0,
  scrollTrigger: {
    trigger: '.thanks-container h1',
    markers: true,
    scrub: 2,
    end: 'bottom 80%',
    start: 'top bottom',
  },
});
