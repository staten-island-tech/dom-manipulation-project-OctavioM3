const DOMSelectors = {
    formName: document.querySelector("#formName"),
    NameInput: document.querySelector(".name-input"),
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
    DOMSelectors.h2s.forEach(
        (el) => el.textContent = DOMSelectors.NameInput.value
    );
    Enter();
    Remove();
    Clear();
    });

    function createAlbum(name) {
        return {name};
    };
DOMSelectors.Clear.addEventListener("click", function () {
    DOMSelectors.name.value = "";
});

    function Remove(obj) {
        obj.Remove();
    };
