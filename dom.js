const DOMSelectors = {
    form: document.querySelector("#form"),
    textinput: document.querySelector(".text-input"),
    h2s: document.querySelectorAll("h2"),
};

document.body.style.backgroundColor = "black";
document.getElementById("box").style.color = "white";


DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(DOMSelectors.textinput.value);
    DOMSelectors.h2s.forEach(
        (el) => el.textContent = DOMSelectors.textinput.value
    );
});