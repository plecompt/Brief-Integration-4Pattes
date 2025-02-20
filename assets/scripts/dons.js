document.getElementById('10euros').addEventListener('click', ()=>{
    resetBorders();
    document.getElementById('10euros').style.border = "3px lightgreen solid";
    montant = 10;
    calculateTotal();
});

document.getElementById('20euros').addEventListener('click', ()=>{
    resetBorders();
    document.getElementById('20euros').style.border = "3px lightgreen solid";
    montant = 20;
    calculateTotal();
});

document.getElementById('50euros').addEventListener('click', ()=>{
    resetBorders();
    document.getElementById('50euros').style.border = "3px lightgreen solid";
    montant = 50;
    calculateTotal();
});

document.getElementById('oneTime').addEventListener('click', ()=>{
    resetBackgrounds();
    document.getElementById('oneTime').style.background = "lightGreen";
    frequency = "";
    calculateTotal();
});

document.getElementById('mensuel').addEventListener('click', ()=>{
    resetBackgrounds();
    document.getElementById('mensuel').style.background = "lightGreen";
    frequency = "/ mois";
    calculateTotal();
});

document.getElementById('year').addEventListener('click', ()=>{
    resetBackgrounds();
    document.getElementById('year').style.background = "lightGreen";
    frequency = "/ an";
    calculateTotal();
});

document.getElementById('donate').addEventListener('click', ()=>{
    alert(`Vous avez fait un don de ${montant}€ ${frequency}`);
})

function calculateTotal(){
    let button = document.getElementById('donate');

    button.innerText = `Faites un don de ${montant}€ ${frequency}`; 
}

function resetBackgrounds(){
    document.getElementById('oneTime').style.background = "#EFEFEF";
    document.getElementById('mensuel').style.background = "#EFEFEF";
    document.getElementById('year').style.background = "#EFEFEF";
}

function resetBorders(){
    document.getElementById('10euros').style.border = "none";
    document.getElementById('20euros').style.border = "none";
    document.getElementById('50euros').style.border = "none";
}

// par defaut
function init(){
    document.getElementById('50euros').style.border = "3px lightgreen solid";
    document.getElementById('mensuel').style.background = "lightgreen";
    calculateTotal();
}

init();