window.addEventListener("scroll",() => {
    const scrollPosition =window.scrollY;
    document.getElementById("background1").style.backgroundPositionY = scrollPosition * 2 + "px";
    document.getElementById("background2").style.backgroundPositionY = scrollPosition * 1 + "px";
    document.getElementById("background3").style.backgroundPositionY = scrollPosition * .5 + "px";
})