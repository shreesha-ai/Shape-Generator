const generateButton = document.getElementById("generate"); 
const numberInput = document.getElementById("number");
const shapeContainer = document.getElementById("shapeContainer");

generateButton.onclick = () => {
    const shape = document.querySelector('input[name="shape"]:checked');
    const count = Number(numberInput.value);


    if (!shape) {
        alert("Please select a shape!");
        return;
    }

    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    for (let i = 0; i < count; i++) {
        const shapeDiv = document.createElement("div");
        shapeDiv.style.display = "inline-block";
        shapeDiv.style.margin = "10px";

        if (shape.value === "circle") {
            shapeDiv.style.width = "50px";
            shapeDiv.style.height = "50px";
            shapeDiv.style.background = "pink";
            shapeDiv.style.borderRadius = "50%";
        } else if (shape.value === "square") {
            shapeDiv.style.width = "50px";
            shapeDiv.style.height = "50px";
            shapeDiv.style.background = "yellow";
        } else if (shape.value === "rectangle") {
            shapeDiv.style.width = "80px";
            shapeDiv.style.height = "40px";
            shapeDiv.style.background = "lightblue";
        }

        shapeContainer.appendChild(shapeDiv);
    }
};
