gsap.registerPlugin(ScrollTrigger);

//loader
let mask = document.querySelector('.load');
    window.addEventListener('load', ()=>{
    mask.classList.add('hide-preloader');
    });
setTimeout(() => {mask.remove();}, 1000);
//end


// anim-change-color

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

//end
//open overlay
const OpenOverlay = document.querySelectorAll('.overlay-menu');
const CloseOverlay = document.querySelector('.close-modal-btn');
const NavHrefs = document.querySelectorAll('.menu-navigation a');

OpenOverlay.forEach(el => {
    el.addEventListener('mouseover', () => {
        gsap.to(el, {
            y: -5,
        })
    })
    el.addEventListener('mouseout', () => {
        gsap.to(el, {
            y: 0,
        })
    })
    el.addEventListener('click', () => {
        gsap.to('.overlay-menu-nav', {
            delay: .5,
            top:0,
            ease: "slow(0.7, 0.7, false)",
        })
        gsap.to('body', {
            overflow: "hidden",
        })
    })
})
CloseOverlay.addEventListener('click', () => {
    gsap.to('body', {
        overflow: "visible",
    })
    gsap.to('.overlay-menu-nav', {
        delay: .5,
        top: "-100%",
        ease: "slow(0.7, 0.7, false)",
    })
})
NavHrefs.forEach(el => {
    el.addEventListener('click', () => {
        gsap.to('body', {
            overflow: "visible",
        })
        gsap.to('.overlay-menu-nav', {
            delay: .5,
            top: "-100%",
            ease: "slow(0.7, 0.7, false)",
        })
    })
})

//anim-start

//end

//anim-up to menu block
const startBlock = document.querySelector('.about__h1');
const upToMenuBlock = document.querySelector('.up-to-menu');


window.addEventListener('scroll', () => {
    if(scrollY > offset(startBlock).top - 300 && screen.width > 576){
        gsap.to(upToMenuBlock, {
            opacity: 1,
            duration: 0.5,
            left: "92%",
            zIndex: 100,
        }) 
    } else {
        if(screen.width < 576 &&  scrollY > offset(startBlock).top - 300){
            gsap.to(upToMenuBlock, {
                opacity: 1,
                duration: 0.5,
                left: "75%",
                zIndex: 100,
            }) 
        }
        else {
            gsap.to(upToMenuBlock, {
                opacity: 0,
                duration: 0.5,
                left: "110%",
                
            }) 
        }
    }
})
upToMenuBlock.addEventListener('mouseover', ()=>{
    gsap.to(upToMenuBlock, {
        top: "83%",
        duration: 0.5,
    })
})
upToMenuBlock.addEventListener('mouseout', ()=>{
    gsap.to(upToMenuBlock, {
        top: "85%",
        duration: 0.5,
    })
})

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