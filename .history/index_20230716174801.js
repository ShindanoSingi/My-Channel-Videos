let button = document.getElementById("submit-button");
button.addEventListener("click", function () {

    let newDiv1 = document.getElementById("div-checkbox-container");
    
    let newDiv2 = document.createElement("div");
    newDiv2.attributes.class = "div-checkbox-container";
    newDiv2.attributes.id = "div-checkbox-container";

    let newDiv3 = document.createElement("div");
    newDiv3.attributes.class = "text";
    newDiv3.attributes.id = "text";
    newDiv3.innerHTML = "I agree to the terms and conditions";

    let newDiv4 = document.createElement("div");
    newDiv4.attributes.class = "checkbox-icon";
    newDiv4.attributes.id = "checkbox-icon";
    
    let input = document.createElement("input");
    input.type = "checkbox";
    input.attributes.class = "checkbox";
    input.attributes.id = "checkbox";

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

