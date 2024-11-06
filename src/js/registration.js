document
  .getElementById("languageToggle")
  .addEventListener("click", function () {
    const menu = document.getElementById("languageMenu");
    menu.style.display =
      menu.style.display === "none" || menu.style.display === ""
        ? "block"
        : "none";
  });

document.querySelectorAll(".language-menu li").forEach((item) => {
  item.addEventListener("click", function () {
    const selectedLanguage = this.getAttribute("data-language");
    document.getElementById("languageToggle").childNodes[0].nodeValue =
      this.innerText + " ";

    document.getElementById("languageMenu").style.display = "none";
  });
});

window.addEventListener("click", function (event) {
  if (!event.target.closest(".language-dropdown")) {
    document.getElementById("languageMenu").style.display = "none";
  }
});

const phoneInput = document.getElementById('phoneInput');

phoneInput.addEventListener('focus', function() {
    if (phoneInput.value === '') {
        phoneInput.value = '+996';
    }
});

phoneInput.addEventListener('blur', function() {
    if (phoneInput.value === '+996' || phoneInput.value === '') {
        phoneInput.value = '';
        phoneInput.placeholder = '+996 502800202';
    }
});



const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');
const eyeIcon = document.getElementById('eyeIcon');

togglePassword.addEventListener('click', function () {
  
    if (passwordInput.type === "password") {
        passwordInput.type = "text"; 
        eyeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
        </svg>`;
    } else {
        passwordInput.type = "password"; 
        eyeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
        </svg>`;
    }
});



const passwordInsol = document.getElementById('passwordInsol');
const togglePassds = document.getElementById('togglePassds');
const eyeIcons = document.getElementById('eyeIcons');

togglePassds.addEventListener('click', function () {
  
    if (passwordInsol.type === "password") {
        passwordInsol.type = "text"; 
        eyeIcons.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
        </svg>`;
    } else {
        passwordInsol.type = "password"; 
        eyeIcons.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
        </svg>`;
    }
});





document
        .getElementById("positionToggle")
        .addEventListener("click", function () {
            const menu = document.getElementById("positionMenu");
            menu.style.display =
                menu.style.display === "none" || menu.style.display === ""
                    ? "block"
                    : "none";
        });

    document.querySelectorAll(".position-menu li").forEach((item) => {
        item.addEventListener("click", function () {
            const selectedPosition = this.getAttribute("data-position");
            document.getElementById("positionToggle").childNodes[0].nodeValue =
                this.innerText + " ";

            document.getElementById("positionMenu").style.display = "none";
        });
    });

    window.addEventListener("click", function (event) {
        if (!event.target.closest(".position-dropdown")) {
            document.getElementById("positionMenu").style.display = "none";
        }
    });