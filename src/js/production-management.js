 // js для моделного окно 
 document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('openModalEdit');
    const closeModalButton = document.getElementById('closeModalEdit');
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
    const openModalButton = document.getElementById('openModalAll');
    const closeModalButton = document.getElementById('closeModalAll');
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
    const openModalButton = document.getElementById('openModalWont');
    const closeModalButton = document.getElementById('closeModalEditWont');
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
    const openModalButton = document.getElementById('openModalСhange');
    const closeModalButton = document.getElementById('closeModalСhange');
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
    const openModalButton = document.getElementById('openModalEtited');
    const closeModalButton = document.getElementById('closeModalEdited');
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




