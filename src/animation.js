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
const sectionAnimateOffer = document.querySelector('.section-txt-offer');
sectionAnimateOffer.addEventListener('mouseout', () => {
    gsap.to('.animation-txt-intro', {
        left: -20000,
        duration: 40,
        ease: 'none',
    })
    gsap.to('.animation-txt-intro2', {
        right: -20000,
        duration: 40,
        ease: 'none',
    })
})
// let changeColortoScroll = false;
// window.addEventListener('scroll', ()=> {
//     const bodyTag = document.querySelector('body');
//     if(scrollY > 90 && changeColortoScroll == false) {
//         changeColortoScroll = true;
//         gsap.to(bodyTag, {
//             backgroundColor: '#E4F422',
//             duration: 1,
//             delay: .5,
//             ease: "slow(0.7, 0.7, false)",
//         })
//     } 
//     // else (
//     //     gsap.from(bodyTag, {
//     //         backgroundColor: '#0C0C0C',
//     //         duration: 1,
//     //         delay: .5,
//     //         ease: "slow(0.7, 0.7, false)",
//     //     })
//     // )
// })