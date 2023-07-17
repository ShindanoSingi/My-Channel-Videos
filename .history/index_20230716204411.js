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
    
    let input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute("class", "checkbox");
    input.setAttribute("id", "checkbox");
    
    let i = document.createElement("i");
    i.setAttribute("class", "check-mark fa-solid fa-check");
    i.attributes.id = "check-mark";
    
    newDiv4.appendChild(input);
    newDiv4.appendChild(i);
    
    newDiv2.appendChild(newDiv3);
    newDiv2.appendChild(newDiv4);
    
    console.log(newDiv3)
    if (!inputValue.value) {
        alert("Please enter the text!")
        return
    }

    newDiv1.appendChild(newDiv2);
    
    newDiv1.scrollTop = newDiv1.scrollHeight;

    inputValue.value = ''
});

const showCheckMark = () => {
    let checkbox
}

