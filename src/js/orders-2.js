$('#date-range-picker').daterangepicker({
    opens: 'right',
    locale: {
      format: 'DD.MM.YYYY',
      daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      firstDay: 1
    },
    startDate: '01.12.2023',
    endDate: '12.12.2023',
    autoApply: true,
    singleDatePicker: false,
    linkedCalendars: false,
    showCustomRangeLabel: false
  }, function(start, end, label) {
  
    $('.daterangepicker td.end-date').removeClass('end-date');
    
    $('td.active.end-date').removeClass('active').addClass('end-date');
  });
  
  
  $('#date-range-picker').on('show.daterangepicker', function() {
    $('img[src="./img/arrow-down.png"]').addClass('rotate-180');
  });
  
  $('#date-range-picker').on('hide.daterangepicker', function() {
    $('img[src="./img/arrow-down.png"]').removeClass('rotate-180');
  });


  // const searchContainer = document.getElementById('searchContainer');
  // const newOrderBtn = document.getElementById('newOrderBtn');
  
 
  // function toggleSizes(elementToExpand, elementToShrink) {
  //   elementToExpand.style.width = '254px';
  //   elementToShrink.style.width = '64px'; 
  // }
  
  
  // searchContainer.addEventListener('click', function() {
  //   toggleSizes(searchContainer, newOrderBtn);
  // });
  
  // newOrderBtn.addEventListener('click', function() {
  //   toggleSizes(newOrderBtn, searchContainer);
  // });


  document.querySelectorAll('td[data-label="НАЗВАНИЕ ТОВАРА"]').forEach(function(td) {
    const label = td.getAttribute('data-label');
    // Добавляем <br> в текст атрибута data-label
    td.setAttribute('data-label', label.replace('НАЗВАНИЕ ТОВАРА', 'НАЗВАНИЕ<br/>ТОВАРА'));
  });