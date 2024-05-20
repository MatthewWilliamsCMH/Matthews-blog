const state = document.querySelector("#slider");
state.addEventListener("click", function(event) {
    // event.preventDefault();
    console.log(state.style.backgroundColor);
    if (state.style.backgroundColor === "eee") {
        alert("light moed");
    }
});


//if .slider background color is 2196fe load dark-mode stylesheet
//if .slider background-color is eee load light-mode stylesheet
