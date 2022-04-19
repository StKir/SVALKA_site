gsap.registerPlugin(ScrollTrigger);
// end

// anim-loading

//end

//anim-start

//end
//anim-blocks
const animStyleOne = document.querySelectorAll('.anim-style-1');
const btnTypeAnimation = document.querySelectorAll('.btntype2');


animStyleOne.forEach(el => {
    gsap.from(el, {
        scrollTrigger:{
            trigger: el,
        },
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "slow(0.7, 0.7, false)",
    })
})


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
    opacity: 0,
    y: 10,
    duration: 1,
    delay: .5,
    stagger: .2,
    ease: "slow(0.7, 0.7, false)",
})
gsap.from('.btn-type1', {
    opacity: 0,
    delay: .5,
    duration: 1,
    ease: "none",
})
gsap.from('.main-offer__nav-menu a', {
    opacity: 0,
    duration: 1,
    delay: .5,
    stagger: .2,
    ease: "slow(0.7, 0.7, false)",
})



const setionLock = document.querySelector('.section-what-interesting');
const setionBack = document.querySelector('.section-form');

let backgroundChange = false;

const bodyForChangeColor = document.querySelector('body');
const cursorOne = document.querySelector('.cursor1'),
      cursorTwo = document.querySelector('.cursor');
window.addEventListener('scroll', () => {
    if(scrollY > offset(setionLock).top - 400 && scrollY < offset(setionBack).top -400){
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
const contentTxtOffer = document.querySelectorAll('.content-txt-offer');
      contentImgOffer = document.querySelectorAll('.content-img');

contentTxtOffer.forEach(el => {
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

// functions
function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}