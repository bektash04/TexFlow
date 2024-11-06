// js для моделного окно 
document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('openModalColors');
    const closeModalButton = document.getElementById('closeModalColors');
    const modal = document.getElementById('newsletterModal');


    openModalButton.addEventListener('click', function() {
        modal.style.display = 'flex';
    });


    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('openModalbox');
    const closeModalButton = document.getElementById('closeModalbox');
    const modal = document.getElementById('newsletterModalbox');


    openModalButton.addEventListener('click', function() {
        modal.style.display = 'flex';
    });


    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});