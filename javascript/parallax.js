window.addEventListener("scroll",() => {
    const scrollPosition = window.scrollY;
    document.getElementById("background1").style.backgroundPositionY = 
    scrollPosition * .75 + "px," +
    scrollPosition * .375 +"px," +
    scrollPosition * .25 +"px";
})