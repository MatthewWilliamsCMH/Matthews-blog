const state = document.querySelector("#checkbox");
state.addEventListener("click", function(event) {
        const currentTheme = document.getElementById("theme");
        currentTheme.classList.toggle("dark-mode");
});