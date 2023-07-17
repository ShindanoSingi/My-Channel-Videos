let button = document.getElementById("submit-button");
button.addEventListener("click", function () {

    let newDiv1 = document.getElementById("div-checkbox-container");
    
    let newDiv2 = document.createElement("div");
    newDiv2.setAttribute('div', "div-checkbox-container");
    newDiv2.setAttribute("id", "div-checkbox-container");
    
    let newDiv3 = document.createElement("div");
    newDiv3.setAttribute("div", "text");
    newDiv3.setAttribute("id", "text");
    newDiv3.innerHTML = "I agree to the terms and conditions";

    let newDiv4 = document.createElement("div");
    newDiv4.setAttribute("div", "checkbox-icon");
    newDiv4.setAttribute("id", "checkbox-icon");
    
    let input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute("class", "checkbox");
    input.setAttribute("id", "checkbox");

    let i = document.createElement("i");
    i.attributes.class = "check-mark fa-solid fa-check";
    i.attributes.id = "check-mark";

    newDiv4.appendChild(input);
    newDiv4.appendChild(i);

    newDiv3.appendChild(newDiv4);

    newDiv2.appendChild(newDiv3);

    newDiv1.appendChild(newDiv2);

    console.log(newDiv1);
});

