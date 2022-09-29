document.addEventListener('DOMContentLoaded', () => {
    function arrowRotate() {
        let arrow = document.getElementById('div1');
        arrow.innerHTML = "&#xf01e;";

        setTimeout(function () {
            arrow.innerHTML = "&#xf021;";
        }, 500);

        setTimeout(function () {
            arrow.innerHTML = "&#xf01e;";
        }, 1000);

        setTimeout(function () {
            arrow.innerHTML = "&#xf021;";
        }, 1500);
    }
    
    arrowRotate();
    setTimeout(arrowRotate, 2000)
})

