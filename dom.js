const DOMSelectors = {
    box: document.getElementById("firstbox"),
    l1s: document.querySelectorAll("h1"),
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

DOMSelectors.formName.addEventListener("submit", function () {
    let input = DOMSelectors.NameInput.value;
    DOMSelectors.box.insertAdjacentHTML("beforeend", `<ol><l1> ${input} </l1></ol>`);
    console.log(DOMSelectors.NameInput.value);
    DOMSelectors.NameInput.value = "";
});

DOMSelectors.button.addEventListener("click", function () {
    
});

