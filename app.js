
//Select rating buttons
const btns = document.querySelectorAll(".btn");
let selectedRating = null;

btns.forEach((selectedBtn) => {
    selectedBtn.addEventListener("click", () => {
        btns.forEach((selectedBtn) => {
            selectedBtn.classList.remove("selected");
        });

        selectedRating = selectedBtn.innerHTML;
        selectedBtn.classList.add("selected");
    });
});

// Switch cards
document.querySelector(".btn-submit").addEventListener("click", () => {
    document.getElementById("grade").textContent = selectedRating;
    document.getElementById("rating").classList.add("hide");
    document.getElementById("thanks").classList.remove("hide");
});
    




