let btn = document.querySelector("button");
let text = document.querySelector("p");

function toggleDarkmode() {
    document.body.classList.toggle('darkmode');
    document.body.classList.toggle('abcd');

    if (document.body.classList.contains("darkmode")) {
        btn.textContent = "Lightmode";
        text.textContent = "HI world";

    } else {
        btn.textContent = "Darkmode";
        text.textContent = "HELLO world";
    }
}
