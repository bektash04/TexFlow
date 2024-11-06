 // js для моделного окно 
 document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('openModalLogout');
    const closeModalButton = document.getElementById('closeLogout');
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
    const openModalButton = document.getElementById('openModalRedax');
    const closeModalButton = document.getElementById('closeModalRedax');
    const modal = document.getElementById('newsletterModalRedax');


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



const menuDots = document.getElementById('menuDots');
const buttonsContainer = document.querySelector('.adminProfile-bnt');


menuDots.addEventListener('click', function(event) {
    buttonsContainer.classList.toggle('show-buttons'); 
    event.stopPropagation(); 
});

document.addEventListener('click', function() {
    if (buttonsContainer.classList.contains('show-buttons')) {
        buttonsContainer.classList.remove('show-buttons');
    }
});

buttonsContainer.addEventListener('click', function(event) {
    event.stopPropagation();
});

