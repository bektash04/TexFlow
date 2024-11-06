

 // js для моделного окно 

 document.addEventListener('DOMContentLoaded', function() {
    const makeModalButton = document.getElementById('makeopenModalFus');
    const closeModalButton = document.getElementById('makeCloseModal');
    const modal = document.getElementById('makeNewsletterModal');


    makeModalButton.addEventListener('click', function() {
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
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');
    const closeFooterBuuton = document.getElementById('closeFooter')
    const modal = document.getElementById('newsletterModal');


    openModalButton.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    
    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    closeFooterBuuton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const openInviteModalButton = document.getElementById('openInviteModal');
    const closeInviteModalButton = document.getElementById('closeInviteModal');
    const inviteModal = document.getElementById('inviteModal');
  
   
    openInviteModalButton.addEventListener('click', function() {
        inviteModal.style.display = 'flex';
    });
  
   
    closeInviteModalButton.addEventListener('click', function() {
        inviteModal.style.display = 'none';
    });
  
    
    window.addEventListener('click', function(event) {
        if (event.target === inviteModal) {
            inviteModal.style.display = 'none';
        }
    });
  });

//   ---end -----





const menuDots = document.getElementById('menuDots');
const buttonsContainer = document.querySelector('.card-btns');


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

