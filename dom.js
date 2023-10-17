const DOMSelectors = {
    form: document.querySelector("#form"),
    textinput: document.querySelector(".text-input"),
    h2s: document.querySelectorAll("h2"),
    box: document.getElementById("back-box"),
};

function back(background) {
background.style.backgroundColor = "black";
};

back(DOMSelectors.box);

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(DOMSelectors.textinput.value);
    DOMSelectors.h2s.forEach(
        (el) => el.textContent = DOMSelectors.textinput.value
    );
});