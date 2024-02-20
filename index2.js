document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы с классом animated-text
    const animatedTextElements = document.querySelectorAll('.animated-text');

    // Добавляем обработчик события для каждого элемента
    animatedTextElements.forEach(function (element) {
        // Когда анимация fadeInUp завершается
        element.addEventListener('animationend', function () {
            // Добавляем класс floating, чтобы запустить вторую анимацию
            element.classList.add('floating');
        });
    });
});
