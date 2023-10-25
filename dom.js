const DOMSelectors = {
    box: document.getElementById("back-box"),
    formName: document.querySelector("#formName"),
    text: document.querySelector(`#name-input`),
    h2s: document.querySelectorAll("h2"),
    box: document.getElementById("back-box"),
    formClear: document.querySelector("#formClear"),
    Clear: document.getElementById("clear"),
};

function back(background) {
    background.style.backgroundColor = "beige";
};

DOMSelectors.formName.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(DOMSelectors.NameInput.value);
    DOMSelectors.box.insertAdjacentHTML("afterward", `<p> ${name-input}</p>`);
    DOMSelectors.h2s.forEach(
        (el) => el.textContent = DOMSelectors.NameInput.value
    );
    });

DOMSelectors.back-box.insertAdjacentHTML(
    "beforebegin",
    'Add text into an HTML file by writing in JS!'
)
