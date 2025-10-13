document.addEventListener("DOMContentLoaded", function(){
    const btnaboutme = document.getElementById("btn-aboutme");
    const divaboutme = document.getElementById("info");

    btnaboutme.addEventListener('click', function(){
        if(divaboutme.classList.contains('hide')) {
            divaboutme.classList.remove('hide');
            btnaboutme.textContent = "Show Less";
        } else {
            divaboutme.classList.add('hide');
            btnaboutme.textContent = "About Me";
        }
    })
});