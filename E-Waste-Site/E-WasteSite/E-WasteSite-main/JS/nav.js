//Credited to Telisa DP, Accenture Internship, Code First Girls 2022

fetch('../pages/Elements/navBar.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})