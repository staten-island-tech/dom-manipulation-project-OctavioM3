const DOMSelectors = {
    box: document.getElementById("firstbox"),
    h2s: document.querySelectorAll("h2"),
    button: document.getElementById("clear"),
    NameInput: document.querySelector(".name-input"),
    formName: document.querySelector("#formName"),
    submit: document.getElementById("submit"),
    clear: document.getElementById("clearbox")
};

function backandtext(background) {
    background.style.backgroundColor = "blue";
};

DOMSelectors.formName.addEventListener("submit", function(event) {
    event.preventDefault();
    backandtext(DOMSelectors.box);
});

DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    'Rank Then From Best To Worst'
);

function changes() {
    let albums = ``;
    DOMSelectors.h2s.forEach((h2s) => {
        h2s.addEventListener("click", function () {
            h2s.textContent = "";
    });
    });
}
changes();

DOMSelectors.formName.addEventListener("submit", function () {
    let input = DOMSelectors.NameInput.value;
    DOMSelectors.box.insertAdjacentHTML("beforeend", `<h2> ${input} </h2>`);
    console.log(DOMSelectors.NameInput.value);
    DOMSelectors.NameInput.value = "";
});

DOMSelectors.button.addEventListener("click", function () {
    
});
