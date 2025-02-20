document.getElementById('logo').addEventListener('click', ()=>{
    loadHome();
});

document.getElementById('ctaAccueil').addEventListener('click', ()=>{
    loadHome();
});

document.getElementById('ctaContact').addEventListener('click', ()=>{
    loadContact();
});

document.getElementById('donationButton').addEventListener('click', ()=>{
    document.getElementById('dons').scrollIntoView();
})