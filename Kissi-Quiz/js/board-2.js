function arrow() {
    var a;
    a = document.querySelector("#div1");
    a.innerHTML = "&#xf01e;";
    setTimeout(() => {
        a.innerHTML = "&#xf2f1;";
    }, 1000);
    setTimeout(() => {
        a.innerHTML = "&#xf01e;";
    }, 2000);
}

arrow();
setInterval(arrow, 3000);