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
