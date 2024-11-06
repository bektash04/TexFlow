  // js для моделного окно 
  document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('openModalProduct');
    const closeModalButton = document.getElementById('closeModalProduct');
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
    const openModalButton = document.getElementById('openModalProductEdit');
    const closeModalButton = document.getElementById('closeModalProductEdit');
    const modal = document.getElementById('newsletterModalProductEdit');


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
    const openModalButton = document.getElementById('openModalProductSave');
    const closeModalButton = document.getElementById('closeModalProductSave');
    const modal = document.getElementById('newsletterModalProductSave');


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