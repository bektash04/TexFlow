

document.addEventListener("DOMContentLoaded", () => {
    const calendarDates = document.querySelector(".calendar-dates");
    const monthYear = document.querySelector(".month-year");
    const prevMonthBtn = document.querySelector(".prev-month");
    const nextMonthBtn = document.querySelector(".next-month");

    let currentDate = new Date();
    let daysState = {}; 

    function renderCalendar(date) {
        calendarDates.innerHTML = "";
        monthYear.textContent = date.toLocaleString('ru-RU', { month: 'long', year: 'numeric' });

        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const startDay = firstDayOfMonth.getDay() || 7;
        const totalDays = lastDayOfMonth.getDate();
        const monthKey = `${date.getFullYear()}-${date.getMonth()}`;

        
        for (let i = 1; i < startDay; i++) {
            const emptyDiv = document.createElement("div");
            calendarDates.appendChild(emptyDiv);
        }

      
        for (let i = 1; i <= totalDays; i++) {
            const dayDiv = document.createElement("div");
            dayDiv.textContent = i;


            const dayKey = `${monthKey}-${i}`;
            const dayState = daysState[dayKey] || "neutral";
            dayDiv.classList.add(dayState);
            
            calendarDates.appendChild(dayDiv);

      
            dayDiv.addEventListener("click", () => {
                if (dayDiv.classList.contains("neutral")) {
                    updateDayState(dayKey, "active");
                    dayDiv.classList.replace("neutral", "active");
                } else if (dayDiv.classList.contains("active")) {
                    updateDayState(dayKey, "absent");
                    dayDiv.classList.replace("active", "absent");
                } else if (dayDiv.classList.contains("absent")) {
                    updateDayState(dayKey, "neutral");
                    dayDiv.classList.replace("absent", "neutral");
                }
            });
        }
    }


    function updateDayState(dayKey, state) {
        daysState[dayKey] = state;
    }

    function changeMonth(direction) {
        currentDate.setMonth(currentDate.getMonth() + direction);
        renderCalendar(currentDate);
    }

    prevMonthBtn.addEventListener("click", () => changeMonth(-1));
    nextMonthBtn.addEventListener("click", () => changeMonth(1));

    renderCalendar(currentDate);
});





document.getElementById('prevMonth').addEventListener('click', function() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

document.getElementById('nextMonth').addEventListener('click', function() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);






 document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('openModal'); 
    const closeModalButton = document.getElementById('closeModal'); 
    const closeFooterButton = document.getElementById('closeFooter'); 
    const closeInviteModalButton = document.getElementById('closeInviteModal'); 
    const modal = document.getElementById('newsletterModal');
    const createModal = document.getElementById('createModal');
    const deleteEmployeeButton = document.getElementById('deleteEmployee'); 

    
    openModalButton.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

 
    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    closeFooterButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    
    closeInviteModalButton.addEventListener('click', function() {
        createModal.style.display = 'none';
    });


    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
        if (event.target === createModal) {
            createModal.style.display = 'none';
        }
    });

    
    deleteEmployeeButton.addEventListener('click', function() {
        modal.style.display = 'none'; 
        createModal.style.display = 'flex'; 
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const openInviteModalButton = document.getElementById('openInviteModal');
    const closeInviteModalBtn = document.getElementById('closeInviteModalBtn');
    const inviteModal = document.getElementById('inviteModal');

    const openNewModalButton = document.getElementById('openNewModal'); 
    const newModal = document.getElementById('newModal');
    const closeNewModalButton = document.getElementById('closeNewModal');


    openInviteModalButton.addEventListener('click', function() {
        inviteModal.style.display = 'flex';
    });


    closeInviteModalBtn.addEventListener('click', function() {
        inviteModal.style.display = 'none';
    });


    openNewModalButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        inviteModal.style.display = 'none'; 
        newModal.style.display = 'flex';    
    });

   
    closeNewModalButton.addEventListener('click', function(event) {
        newModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === inviteModal) {
            inviteModal.style.display = 'none';
        } else if (event.target === newModal) {
            newModal.style.display = 'none';
        }
    });
});

//   ---end -----




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









