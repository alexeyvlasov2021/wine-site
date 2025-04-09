// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!

    const tl = gsap.timeline()

    tl
    .from('li', {
        y: -700,
        stagger: 0.2,
        duration: 1.5,
    })

    .from('.vertical', {
        y: -700,
        duration: 0.5,
    })

    .from('img', {
        y: -700,
        duration: 0.5,
    },'+=0.5')

    .from('button', {
        y: -1200,
        duration: 0.5,
    },'+=0.5')

   });