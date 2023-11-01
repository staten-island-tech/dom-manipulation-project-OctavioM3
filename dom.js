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

DOMSelectors.formName.addEventListener("submit", function (event) {
    event.preventDefault()
    enter()
    clear()
    clearInputspace()
})



function enter() {
    let input = DOMSelectors.NameInput.value;
    DOMSelectors.box.insertAdjacentHTML("beforeend", `<div><ol><l1> ${input} </l1></ol>
    <button id="clear">Clear History</button></div>`);
};

function clear() {
    let remove = document.querySelectorAll("#clear")
    remove.forEach((erase) => {
        erase.addEventListener("click", function(secondevent){
            secondevent.target.parentElement.remove()
        });
    });
};

function clearInputspace() {
    DOMSelectors.NameInput.value = "";
}




