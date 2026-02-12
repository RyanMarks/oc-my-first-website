window.addEventListener("scroll",() => {
    const scrollPosition =window.scrollY;
    document.body.style.backgroundPositionY = scrollPosition * -.5 + "px"
})