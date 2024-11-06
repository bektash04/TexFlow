document.querySelectorAll('#employeeTable tr').forEach(function(row) {
    row.addEventListener('click', function() {
      const url = this.getAttribute('data-url');
      if (url) {
        window.location.href = url;
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