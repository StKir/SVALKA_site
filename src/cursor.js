
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