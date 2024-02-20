document.addEventListener('DOMContentLoaded', function () {
    const animatedTextElements = document.querySelectorAll('.animated-text');

    animatedTextElements.forEach(function (element) {
        setTimeout(function () {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 500);
    });
});
