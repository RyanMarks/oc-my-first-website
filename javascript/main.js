fetch("components/nav.html")
.then(response => response.text())
.then(data => {
    document.getElementById("nav-bar-placeholder").innerHTML = data;
})
.catch(error => console.error("failed to load nav", error));