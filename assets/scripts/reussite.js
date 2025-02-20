document.querySelectorAll('.animalReussite').forEach(img => {
    img.addEventListener('click', ()=>{
        resetBordersReussite();
        resetBrightness();
        img.style.border = "3px lightgreen solid";
        img.style.filter = "brightness(1)";
        changeImage(img.dataset.name, img.dataset.date, img.dataset.description);
    })
});

function changeImage(name, date, description){
    document.getElementById('animalName').innerHTML = `${name}`;
    document.getElementById('animalDescription').innerHTML = `${description}`;
    document.getElementById('animalDate').innerHTML = `${date}`;
}

function resetBordersReussite(){
    document.getElementById('animalLuna').style.border = "none";
    document.getElementById('animalOscar').style.border = "none";
    document.getElementById('animalMax').style.border = "none";
}

function resetBrightness(){
    document.getElementById('animalLuna').style.filter = "brightness(0.4)";
    document.getElementById('animalOscar').style.filter = "brightness(0.4)";
    document.getElementById('animalMax').style.filter = "brightness(0.4)";
}

function init(){
    document.getElementById('animalLuna').style.border = "3px lightgreen solid";
    document.getElementById('animalLuna').style.filter = "brightness(1)";
    changeImage("Luna", "Janvier 2024", "Trouvée dans la rue avec une patte cassée, Luna a été soignée et a retrouvée sa joie de vivre. Elle coule maintenant des jours heureux dans sa nouvelle famille.");
}

init();