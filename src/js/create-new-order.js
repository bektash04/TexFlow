
document.getElementById('attention-icon').addEventListener('click', function() {
    const attentionContainer = document.getElementById('attention-container');
    attentionContainer.style.display = 'block'; 
  });


  document.getElementById('close-text').addEventListener('click', function() {
    const attentionContainer = document.getElementById('attention-container');
    attentionContainer.style.display = 'none'; 
  });





  const photoInput = document.getElementById('photo-input');
  const photoPreview = document.getElementById('photo-preview');
  const addText = document.getElementById('add-text');


  document.querySelector('.add-photo').addEventListener('click', function() {
    photoInput.click(); 
  });

 
  photoInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
      
        photoPreview.src = e.target.result;
       
        photoPreview.style.width = '150px';
        photoPreview.style.height = '166px';
     
        addText.style.display = 'none';
      }
      reader.readAsDataURL(file); 
    }
  });


  const selectTrigger = document.querySelector('.custom-select-trigger');
const selectOptions = document.querySelector('.custom-options');
const customOptions = document.querySelectorAll('.custom-option');


selectTrigger.addEventListener('click', function() {
  selectOptions.style.display = selectOptions.style.display === 'block' ? 'none' : 'block';
});


customOptions.forEach(option => {
  option.addEventListener('click', function() {
    selectTrigger.textContent = this.textContent;
    selectOptions.style.display = 'none';
  });
});


document.addEventListener('click', function(e) {
  if (!selectTrigger.contains(e.target) && !selectOptions.contains(e.target)) {
    selectOptions.style.display = 'none';
  }
});




  const productInput = document.getElementById('product-name');
  const suggestionsList = document.getElementById('suggestions-list');

  const products = [
    'Брюки',
    'Блузка',
    'Ботинки',
    'Ветровка',
    'Галстук',
    'Джинсы',
    'Жакет',
    'Кардиган',
    'Кепка',
    'Кофта',
    'Кроссовки',
    'Куртка',
    'Леггинсы',
    'Майка',
    'Носки',
    'Обувь',
    'Перчатки',
    'Пиджак',
    'Платье',
    'Пуховик',
    'Рубашка',
    'Сапоги',
    'Свитер',
    'Топ',
    'Футболка',
    'Шапка',
    'Шарф',
    'Шорты'
  ];


  function updateSuggestions() {
    const input = productInput.value.toLowerCase();
    suggestionsList.innerHTML = ''; 

   
    const filteredProducts = products.filter(product => product.toLowerCase().startsWith(input));

  
    filteredProducts.forEach(product => {
      const listItem = document.createElement('li');
      listItem.textContent = product;

 
      listItem.addEventListener('click', function() {
        productInput.value = product; 
        suggestionsList.innerHTML = ''; 
      });

      suggestionsList.appendChild(listItem);
    });


    if (filteredProducts.length > 0) {
      suggestionsList.style.display = 'block';
    } else {
      suggestionsList.style.display = 'none';
    }
  }
  productInput.addEventListener('input', updateSuggestions);


  productInput.addEventListener('blur', function() {
    setTimeout(() => {
      suggestionsList.style.display = 'none';
    }, 200);
  });
  productInput.addEventListener('focus', function() {
    if (productInput.value) {
      updateSuggestions();
    }
  });



  const colorButtons = document.querySelectorAll('.color-btn');
  const dropdowns = document.querySelectorAll('.dropdown');
  
  colorButtons.forEach((button, index) => {
      const dropdown = dropdowns[index];
      const colorInput = document.getElementById(`colorInput${index + 1}`);
      const colorPreview = button.querySelector('.color-preview');
  
      dropdown.style.display = 'none';
  
      button.addEventListener('click', () => {
          dropdown.style.display = dropdown.style.display === 'grid' ? 'none' : 'grid';
      });
  
      const colorOptions = dropdown.querySelectorAll('.color-option');
      colorOptions.forEach(option => {
          option.addEventListener('click', () => {
              const selectedColor = option.getAttribute('data-color');
              colorPreview.className = `color-preview ${selectedColor}`;
              colorInput.value = selectedColor; 
              dropdown.style.display = 'none'; 
          });
      });
  });
  
  window.addEventListener('click', (e) => {
      colorButtons.forEach((button, index) => {
          const dropdown = dropdowns[index];
          if (!button.contains(e.target) && !dropdown.contains(e.target)) {
              dropdown.style.display = 'none';
          }
      });
  });




  // js для моделного окно 
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
  const openModalButton = document.getElementById('openModalClinet');
  const closeModalButton = document.getElementById('closeModalClinet');
  const modal = document.getElementById('newsletterModalClient');


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
  const openModalButton = document.getElementById('runModal');
  const closeModalButton = document.getElementById('closeModalRun');
  const modal = document.getElementById('RunNewsletterModal');


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







// Функция для открытия выпадающего списка
function openDropdown() {
  var dropdown = document.getElementById('clientDropdown');
  var arrowIcon = document.getElementById('arrowIcon');

  dropdown.classList.add('active');  
  arrowIcon.classList.add('rotate'); 
}
function closeDropdown() {
  var dropdown = document.getElementById('clientDropdown');
  var arrowIcon = document.getElementById('arrowIcon');

  dropdown.classList.remove('active'); 
  arrowIcon.classList.remove('rotate');
}

document.querySelector('.client-btn').addEventListener('click', openDropdown);
document.getElementById('clientTitle').addEventListener('click', closeDropdown);
