const toggleSubMenu = document.getElementById('toggleSubMenu');
const subItems = document.querySelectorAll('.sub-item');


let isSubmenuVisible = true; 

toggleSubMenu.addEventListener('click', function(e) {
    e.preventDefault();  


    isSubmenuVisible = !isSubmenuVisible; 

    subItems.forEach(item => {
        item.style.display = isSubmenuVisible ? 'block' : 'none';
    });
});


// js для моделного окно 
document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('openModalSalary');
    const closeModalButton = document.getElementById('closeModalSalary');
    const modal = document.getElementById('newsletterModalSalary');


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
    const openModalButton = document.getElementById('openModalAdvance');
    const closeModalButton = document.getElementById('closeModalAdvance');
    const modal = document.getElementById('newsletterModalAdvance');


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
    const openModalButton = document.getElementById('openModalSuc');
    const closeModalButton = document.getElementById('closeModalSuccessful');
    const modal = document.getElementById('newsletterModalSuccessful');


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
    const openModalButton = document.getElementById('openModalSuccessful');
    const closeModalButton = document.getElementById('closeModalSuccessful');
    const modal = document.getElementById('newsletterModalSuccessful');


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
const buttonsContainer = document.querySelector('.salaryBtns-of');


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

