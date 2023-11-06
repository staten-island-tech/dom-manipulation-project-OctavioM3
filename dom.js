const DOMSelectors = {
  box: document.getElementById("firstbox"),
  NameInput: document.querySelector(".name-input"),
  formName: document.querySelector("#formName"),
};

DOMSelectors.formName.addEventListener("submit", function (event) {
  event.preventDefault();
  enter();
  clear();
  clearInputspace();
});

function enter() {
  let input = DOMSelectors.NameInput.value;
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div><ul><li> ${input}
    <button id="clear">Clear</button></li></ul></div>`
  );
  console.log(input);
}

function clear() {
  let remove = document.querySelectorAll("#clear");
  remove.forEach((erase) => {
    erase.addEventListener("click", function (secondevent) {
      secondevent.target.parentElement.remove();
    });
  });
}

function clearInputspace() {
  DOMSelectors.NameInput.value = "";
}
