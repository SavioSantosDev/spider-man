document.addEventListener('DOMContentLoaded', () => {

  let tl = gsap.timeline();

  tl.fromTo('.splash',
    { width: '100%' },
    { width: '0%', delay: 5, ease: Expo.easeInOut, duration: 2 })

  .fromTo('.video-bg',
    { width: '0%', opacity: 0 },
    { width: '100%',  opacity: 1, ease: Expo.easeInOut, duration: 2 },
    '-=1')
    // -=1, Esta timiline vai iniciar 1 segundo antes de finalizar a anterior

  .fromTo(['.fade-1'],
    { y: -50, opacity: 0 },
    { y: 0,  opacity: 1, ease: Expo.easeInOut, duration: 0.7 },
    '-=0.5')

    .fromTo('.fade-2',
    { y: -50, opacity: 0 },
    { y: 0,  opacity: 1, ease: Expo.easeInOut, duration: 0.7 },
    '-=0.5')

    .fromTo('.fade-3',
    { y: -50, opacity: 0 },
    { y: 0,  opacity: 1, ease: Expo.easeInOut, duration: 0.7 },
    '-=0.5')

    .fromTo('.fade-4',
    { y: -50, opacity: 0 },
    { y: 0,  opacity: 1, ease: Expo.easeInOut, duration: 0.7 },
    '-=0.5')

    .fromTo('.fade-5',
    { y: -50, opacity: 0 },
    { y: 0,  opacity: 1, ease: Expo.easeInOut, duration: 0.7 },
    '-=0.5')

    .fromTo('.fade-6',
    { y: -50, opacity: 0 },
    { y: 0,  opacity: 1, ease: Expo.easeInOut, duration: 0.7 },
    '-=0.5')

    .fromTo('.fade-7',
    { y: -50, opacity: 0 },
    { y: 0,  opacity: 1, ease: Expo.easeInOut, duration: 0.7 },
    '-=0.5')

    .fromTo('.fade-8',
    { y: -50, opacity: 0 },
    { y: 0,  opacity: 1, ease: Expo.easeInOut, duration: 0.7 },
    '-=0.5')

});
