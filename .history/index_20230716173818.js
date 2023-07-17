let button = document.getElementById("submit-button");
button.addEventListener("click", function () {

    let newDiv1 = document.createElement("div");
    newDiv1.attributes.class = "div-checkbox-container";
    newDiv1.attributes.id = "div-checkbox-container";
    
    let newDiv2 = document.createElement("div");
    newDiv2.attributes.class = "div-checkbox-container";
    newDiv2.attributes.id = "div-checkbox-container";

    let newDiv3 = document.createElement("div");
    newDiv3.attributes.class = "text";
    newDiv3.attributes.id = "text";

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
});

