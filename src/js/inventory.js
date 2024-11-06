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
    const openModalButton = document.getElementById('openModalInven');
    const closeModalButton = document.getElementById('closeModalInven');
    const modal = document.getElementById('newsletterModalInven');


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
    const openModalButton = document.getElementById('openModalSubTitile');
    const closeModalButton = document.getElementById('closeModalSubTitile');
    const modal = document.getElementById('newsletterModalInvenSubTitile');


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
    const openModalButton = document.getElementById('openModaldetails');
    const closeModalButton = document.getElementById('closeModaldetails');
    const modal = document.getElementById('opencloseModaldetails');


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
    const openModalButton = document.getElementById('openModalFrame');
    const closeModalButton = document.getElementById('closeModalFrame');
    const modal = document.getElementById('closeModalFramesq');


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


