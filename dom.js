const DOMSelectors = {
    box: document.getElementById("firstbox"),
    l1s: document.querySelectorAll("l1"),
    button: document.getElementById("clear"),
    NameInput: document.querySelector(".name-input"),
    formName: document.querySelector("#formName"),
    submit: document.getElementById("submit"),
    clear: document.getElementById("clearbox"),
    ImgInput: document.querySelector(".img-input"),
};

function backandtext(background) {
    background.style.backgroundColor = "blue";
    l1s.style.fontSize = "200px";
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
DOMSelectors.formName.addEventListener("submit", function () {
    let pic = DOMSelectors.ImgInput.src;
    DOMSelectors.box.insertAdjacentElement("beforeend", `<ol><img> ${pic} </img></ol>`);
    console.log(DOMSelectors.ImgInput.value);
    DOMSelectors.ImgInput.value = "";
})

DOMSelectors.button.addEventListener("click", function () {
    document.location.reload();
});



