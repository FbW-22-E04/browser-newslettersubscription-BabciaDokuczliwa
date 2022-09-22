const body = document.querySelector("body");
window.addEventListener("mousemove", (e) => {
  if (e.clientY > 10) {
    body.style.display = "flex";
  }
});
