// Getting HTML in an variable to access 
let colorButton = document.querySelectorAll(".color");
let body = document.querySelector("body");
let originalColor = document.querySelector(".original");

// Getting clicked on different colors for background change
colorButton.forEach((boxer) => {
    let details = boxer.getAttribute("id");
    boxer.addEventListener("click", () => {
        if(details === "red") {
            body.style.backgroundColor = "#780000";
        } else if( details === "green") {
            body.style.backgroundColor = "#606C38";
        }else if( details === "orange") {
            body.style.backgroundColor = "#fb5607";
        }else if( details === "blue") {
            body.style.backgroundColor = "#0077b6";
        }        
        // console.log(`Clicked button ${details}`);        
    });
});

// Getting back to original color
originalColor.addEventListener("click", () => {
    body.style.backgroundColor = "#FFFFFF";
});