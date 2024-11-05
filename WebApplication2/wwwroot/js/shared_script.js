
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var header = document.getElementById('header-top');
        var scrollTop = window.scrollY;
        var maxScroll = 250;

        var opacity = Match.min(scrollTop / maxScroll, 1);
        header.style.backgroundColor = 'rgba(255, 165, 0, ${opacity})';
    });
});

.container {
    width: 82 %;
    border: 2px solid #cacaca;
    border - radius: 3px;
    box - shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
}