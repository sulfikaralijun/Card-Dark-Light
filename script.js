const sec = document.querySelector(".sec");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
    sec.classList.toggle("dark");
})