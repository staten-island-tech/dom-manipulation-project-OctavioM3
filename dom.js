const DOMSelectors = {
    form: document.querySelector("#form"),
    textinput: document.querySelector(".text-input"),
    h2s: document.querySelectorAll("h2"),
    box: document.getElementById("Box"),
};

function backgroundAndText(background, textinput) {
    background.style.backgroundColor = "blue";
    textinput.innerHTML = "Something";
}

backgroundAndText(DOMSelectors.box, DOMSelectors.textinput);

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(DOMSelectors.textinput.value);
    DOMSelectors.h2s.forEach(
        (el) => el.textContent = DOMSelectors.textinput.value
    );
});