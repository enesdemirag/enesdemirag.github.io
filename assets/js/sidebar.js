document.addEventListener('DOMContentLoaded', function (event) { 
    onResize();
});

window.addEventListener('resize', onResize);

function onResize () {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');
    if (width < 880) {
        sidebar.style.right = '' + -sidebar.offsetWidth + 'px';
        content.style.width = '90%';

    } else {
        sidebar.style.right = '0';
        content.style.width = '62%';
    }
}