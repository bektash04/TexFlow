document.addEventListener('DOMContentLoaded', function() {
    const menuDots = document.getElementById('menuDots');
    const buttonsContainer = document.querySelector('.button-info');

    menuDots.addEventListener('click', function(event) {
        buttonsContainer.classList.toggle('show-buttons');
        event.stopPropagation(); // Остановить распространение события
    });

    document.addEventListener('click', function() {
        if (buttonsContainer.classList.contains('show-buttons')) {
            buttonsContainer.classList.remove('show-buttons');
        }
    });

    buttonsContainer.addEventListener('click', function(event) {
        event.stopPropagation(); // Остановить закрытие при клике внутри
    });
});
