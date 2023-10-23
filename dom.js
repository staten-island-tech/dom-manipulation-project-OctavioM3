const DOMSelectors = {
    formName: document.querySelector("#formName"),
    NameInput: document.querySelector(".name-input"),
    h2s: document.querySelectorAll("h2"),
    box: document.getElementById("back-box"),
};

function back(background) {
    background.style.backgroundColor = "beige";
};

DOMSelectors.formName.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(DOMSelectors.NameInput.value);
    const newObj = createAlbum(name);
    displayObject(newObj);
    clearInputFields();
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

    function Clear() {
        DOMSelectors.NameInput.value = "";
    }

    function Remove(obj) {
        obj.Remove();
    }
