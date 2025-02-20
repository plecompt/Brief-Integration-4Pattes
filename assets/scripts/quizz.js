document.getElementById('q1True').addEventListener('click', ()=>{
    let buttonTrue = document.getElementById('q1True');
    
    document.getElementById('q1False').style.display = 'none'; //on cache faux
    buttonTrue.innerHTML = `Faux ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.`;
    buttonTrue.style.backgroundColor = '#FFE2E2';
    q1 = true;
    checkDone();
});

document.getElementById('q2True').addEventListener('click', ()=>{
    let buttonTrue = document.getElementById('q2True');
    
    document.getElementById('q2False').style.display = 'none'; //on cache faux
    buttonTrue.innerHTML = `Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé. Chaque vie compte !`;
    buttonTrue.style.backgroundColor = '#FFE2E2';
    q2 = true;
    checkDone();
});

document.getElementById('q3True').addEventListener('click', ()=>{
    let buttonTrue = document.getElementById('q3True');
    
    document.getElementById('q3False').style.display = 'none'; //on cache faux
    buttonTrue.innerHTML = `Faux ! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d'animaux.`;
    buttonTrue.style.backgroundColor = '#FFE2E2';
    q3 = true;
    checkDone();
});

document.getElementById('q1False').addEventListener('click', ()=>{
    let buttonTrue = document.getElementById('q1True');

    document.getElementById('q1False').style.display = 'none'; //on cache faux
    buttonTrue.innerHTML = `Vrai ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.`;
    buttonTrue.style.backgroundColor = '#DCFCE6';
    score += 1;
    q1 = true;
    checkDone();
});

document.getElementById('q2False').addEventListener('click', ()=>{
    let buttonTrue = document.getElementById('q2True');

    document.getElementById('q2False').style.display = 'none'; //on cache faux
    buttonTrue.innerHTML = `Vrai ! Nous accueillons tous les animaux, quel que soit leur état de santé. Chaque vie compte !`;
    buttonTrue.style.backgroundColor = '#DCFCE6';
    score += 1;
    q2 = true;
    checkDone();
});

document.getElementById('q3False').addEventListener('click', ()=>{
    let buttonTrue = document.getElementById('q3True');

    document.getElementById('q3False').style.display = 'none'; //on cache faux
    buttonTrue.innerHTML = `Vrai ! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d'animaux.`;
    buttonTrue.style.backgroundColor = '#DCFCE6';
    score += 1;
    q3 = true;
    checkDone();
});

function checkDone(){
    if (q1 && q2 && q3){
            if (score >= 2)
                alert(`Vous avez fait un score de ${score}. Bravo !`);
            else
                alert(`Vous avez fait un score de ${score}. Reessayez !`);
    }
}

function init(){
    q1 = false;
    q2 = false;
    q3 = false;
    score = 0;
}

init();