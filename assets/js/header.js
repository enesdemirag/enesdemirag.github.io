document.addEventListener('DOMContentLoaded', function (event) { 
    onResize();
});

window.addEventListener('resize', onResize);

function onResize () {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 850) {
        document.getElementById('header-expanded').style.display = 'none';
        document.getElementById('header-collapsed').style.display = 'flex';
    } else {
        document.getElementById('header-expanded').style.display = 'flex';
        document.getElementById('header-collapsed').style.display = 'none';
    }
}