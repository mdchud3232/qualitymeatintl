function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}


gsap.from(".country1",{
    y:-100,
    opacity:0,
    stagger:0.5,
    ease:'power1',

})




gsap.from(".navigation ul li ",{
    x:-50,
    opacity:0,
    duration:1,
    delay:2,
    
})