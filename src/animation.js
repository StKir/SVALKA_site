// functions
function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
// end

// anim-loading

//end

//anim-start

//end

document.addEventListener('mousemove', (e) => {
    gsap.to('.cursor1', {
        left: e.clientX-3,
        top: e.clientY-3,
        ease: "none",
        duration: 0,
        display: 'block',
        position: 'fixed',

    })
    gsap.to('.cursor', {
        left: e.clientX-50,
        top: e.clientY-50,
        ease: "slow(0.7, 0.7, false)",
        display: 'block',
        position: 'fixed',
    })
})
gsap.from('.social-icon', {
    x:-500,
    rotate: 50,
    duration: 1,
    delay: .3,
    stagger: .2,
})
gsap.from('.logotype', {
    y:-500,
    rotate: 50,
    duration: 1,
    delay: .5,
    stagger: .2,
})
gsap.from('.overlay-menu', {
    x:500,
    rotate: 50,
    duration: 1,
    delay: .5,
    stagger: .2,
})
gsap.from('.main-offer__h1', {
    x: -1000,
    duration: 1,
    delay: .5,
    stagger: .2,
    ease: "slow(0.7, 0.7, false)",
})
// const sectionAnimateOffer = document.querySelector('.section-txt-offer');
// sectionAnimateOffer.addEventListener('mouseout', () => {
//     gsap.to('.animation-txt-intro', {
//         left: -20000,
//         duration: 40,
//         ease: 'none',
//     })
//     gsap.to('.animation-txt-intro2', {
//         right: -20000,
//         duration: 40,
//         ease: 'none',
//     })
// })
// anim-background
const setionLock = document.querySelector('.section-what-interesting');

let backgroundChange = false;

const bodyForChangeColor = document.querySelector('body');
const cursorOne = document.querySelector('.cursor1'),
      cursorTwo = document.querySelector('.cursor');
window.addEventListener('scroll', () => {
    if(scrollY > offset(setionLock).top - 300){
        backgroundChange = true;
    } 
    else {backgroundChange = false};

    if(backgroundChange == true){
        bodyForChangeColor.classList.add('white-style');
        cursorOne.classList.add('swap-cursor2');
        cursorTwo.classList.add('swap-cursor1');
    } else {
        bodyForChangeColor.classList.remove('white-style');
        cursorOne.classList.remove('swap-cursor2');
        cursorTwo.classList.remove('swap-cursor1');
    }

})

// anim-locomotive
gsap.registerPlugin(ScrollTrigger);
const contentTxtOffer = document.querySelectorAll('.content-txt-offer');
      contentImgOffer = document.querySelectorAll('.content-img');

contentTxtOffer.forEach(el => {
    console.log(el.children);
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            scrub: 3,
            start: "20% 90%",
            end: '30% 50%',
        },
        rotate: 0,
        opacity: 1,
        y: -100,
        duration: 4,
        ease: "slow(0.7, 0.7, false)",
    })
})
contentImgOffer.forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            scrub: 2,
            start: "bottom bottom",
        },
        y: -100,
        duration: 4,
        ease: "slow(0.7, 0.7, false)",
    })
})
document.addEventListener('mousemove', (e) => {
    let onTildWidth = window.innerWidth;
    let onTildHeight = window.innerHeight;
    let positionX = (e.clientX/onTildWidth) - 0.55;
    let positionY = (e.clientY/onTildHeight) - 0.55;

    gsap.to('.content-img', {
        rotationY: positionX * 30,
        rotationX: -positionY * 30,
        ease: 'none',

        })
})
//end