let childCount = 0

// Show check mark
const showCheckMark = () => {
    let checkMark = document.getElementById("check-mark");
    checkMark.style.display = "block";
    checkMark.style.transform = 'scale(1.2)';
    checkMark.style.transform = 'scale(1.1)';
    checkMark.style.transform = 'scale(1)';
    checkMark.style.transform = 'scale(0.9)';
};

// Hide check mark
const hideCheckMark = () => {
    let checkMark = document.getElementById("check-mark");
    checkMark.style.display = "none";
};

// Strike through
let text = document.getElementById("text");
const strikeThrough = () => {
    text.style.textDecoration = "line-through";
}

const updateCounter = () => {
    const parentDiv = document.getElementById('div-checkbox-containers-parent');
    const childCount = parentDiv.children.length;
    const updateCounter = childCount - 1;
    console.log(updateCounter);
    document.getElementById('counter').innerHTML = updateCounter;
}

const updateParentLength = () => {
    const parentDiv = document.getElementById('div-checkbox-containers-parent');
    const childCount = parentDiv.children.length;
    document.getElementById('counter').innerHTML = updateCounter;
}

let button = document.getElementById("submit-button");
button.addEventListener("click", function () {

    let newDiv1 = document.getElementById("div-checkbox-containers-parent");

    let inputValue = document.getElementById("input-field");

    let newDiv2 = document.createElement("div");
    newDiv2.setAttribute('class', "div-checkbox-container");
    newDiv2.setAttribute("id", "div-checkbox-container");

    let newDiv3 = document.createElement("div");
    newDiv3.setAttribute("class", "text");
    newDiv3.setAttribute("id", "text");
    newDiv3.textContent = inputValue.value;

    let newDiv4 = document.createElement("div");
    newDiv4.setAttribute("class", "checkbox-icon");
    newDiv4.setAttribute("id", "checkbox-icon");

    let input = document.createElement("div");
    input.setAttribute("class", "checkbox");
    input.setAttribute("id", "checkbox");

    let i = document.createElement("i");
    i.setAttribute("class", 'check-mark fa-solid fa-check');
    i.setAttribute('id','check-mark');

    newDiv4.appendChild(input);
    newDiv4.appendChild(i);

    newDiv2.appendChild(newDiv3);
    newDiv2.appendChild(newDiv4);

    updateParentLength();

    if (!inputValue.value) {
        alert("Please enter the text!")
        return
    }

    newDiv1.appendChild(newDiv2);

    newDiv1.scrollTop = newDiv1.scrollHeight;

    inputValue.value = ''

    // Counting the number of items
    const parentDiv = document.getElementById('div-checkbox-containers-parent');
    childCount = parentDiv.children.length;
    console.log(childCount);
    // Assign the counter the tag with id="counter"
    document.getElementById('counter').innerHTML = childCount;
});


// Click on checkbox
const parentContainer = document.getElementById('div-checkbox-containers-parent');
parentContainer.addEventListener('click', function(event) {
  const clickedElement = event.target.closest('.checkbox-icon');
  if (clickedElement) {
   clickedElement.parentElement.children[1].children[1].style.display = "block";
   clickedElement.parentElement.children[0].style.textDecoration = "line-through";
    updateCounter();
  }
});




















