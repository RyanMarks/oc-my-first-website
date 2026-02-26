fetch("components/nav.html")
.then(response => response.text())
.then(data => {
    document.getElementById("nav-bar-placeholder").innerHTML = data;

    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("navbar");

    hamburger.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
})
.catch(error => console.error("failed to load nav", error));

fetch("components/linkbox.html")
.then(response => response.text())
.then(data => {
    const lis = document.querySelectorAll(".link-box-placeholder")
    lis.forEach((node) =>{
        node.innerHTML = data;
    })
})
.catch(error => console.error("failed to load linkbox", error));

fetch("components/footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer-placeholder").innerHTML = data
})
.catch(error => console.error("failed to load footer", error));