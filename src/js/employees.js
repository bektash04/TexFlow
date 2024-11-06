document.getElementById('searchInput').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#employeeTable tr');
    
    rows.forEach(row => {
      const id = row.getAttribute('data-id');
      if (id.includes(searchValue)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });

  const rowsPerPage = 10; 
  let currentPage = 1;

  const rows = document.querySelectorAll('#employeeTable tr');
  const totalPages = Math.ceil(rows.length / rowsPerPage);

  function displayRows(page) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    rows.forEach((row, index) => {
      row.style.display = (index >= start && index < end) ? '' : 'none';
    });
  }

  function setupPagination() {
    const pagination = document.getElementById('pagination');
    const nextPage = document.getElementById('next-page');
    const prevPage = document.getElementById('prev-page');

    for (let i = 1; i <= totalPages; i++) {
      const pageItem = document.createElement('li');
      pageItem.classList.add('page-item');
      pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      pageItem.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = i;
        displayRows(currentPage);
        updatePagination();
      });
      pagination.insertBefore(pageItem, nextPage);
    }
    
    prevPage.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        displayRows(currentPage);
        updatePagination();
      }
    });

    nextPage.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        displayRows(currentPage);
        updatePagination();
      }
    });

    updatePagination();
  }

  function updatePagination() {
    const paginationItems = document.querySelectorAll('.pagination .page-item');
    paginationItems.forEach((item, index) => {
      if (index === currentPage) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    document.getElementById('prev-page').classList.toggle('disabled', currentPage === 1);
    document.getElementById('next-page').classList.toggle('disabled', currentPage === totalPages);
  }

  document.getElementById('searchInput').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    rows.forEach(row => {
      const id = row.getAttribute('data-id');
      if (id.includes(searchValue)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });

  displayRows(currentPage);
  setupPagination();

  function updatePagination() {
    const paginationItems = document.querySelectorAll('.pagination .page-item');
    paginationItems.forEach((item, index) => {
      if (index === currentPage) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }



  document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');
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

  const copyLinkButton = document.getElementById('copyLink');
  const inviteLinkInput = document.getElementById('invite-link');

  copyLinkButton.addEventListener('click', function() {
      inviteLinkInput.select();
      inviteLinkInput.setSelectionRange(0, 99999);
      document.execCommand('copy');
      alert('Ссылка скопирована: ' + inviteLinkInput.value);
  });
});











const menuDots = document.getElementById('menuDots');
const buttonsContainer = document.querySelector('.button-em');


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


