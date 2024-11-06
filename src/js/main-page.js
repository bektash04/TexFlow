document.getElementById("activeTab").addEventListener("click", function () {
  document.getElementById("activeRequests").style.display = "block";

  document.getElementById("historyRequests").style.display = "none";

  this.classList.add("active");
  document.getElementById("historyTab").classList.remove("active");
});

document.getElementById("historyTab").addEventListener("click", function () {
  document.getElementById("historyRequests").style.display = "block";

  document.getElementById("activeRequests").style.display = "none";

  this.classList.add("active");
  document.getElementById("activeTab").classList.remove("active");
});
