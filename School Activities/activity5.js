let btn = document.querySelector("button");
let text = document.querySelector("p");

function toggleOutput() {
    document.body.classList.toggle("output");

    if (document.body.classList.contains("output")) {
        text.textContent = "Hello Learn Javascript with me!!"
    } else {
        text.textContent = "Lets now Learn Laravel..."
    }

    
}

btn.addEventListener("click", toggleOutput);