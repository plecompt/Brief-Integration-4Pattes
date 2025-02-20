document.getElementById('logo').addEventListener('click', ()=>{
    loadHome(0);
});

document.getElementById('ctaAccueil').addEventListener('click', ()=>{
    loadHome(0);
});

document.getElementById('ctaContact').addEventListener('click', ()=>{
    loadContact();
});

document.getElementById('donationButton').addEventListener('click', ()=>{
    document.getElementById('dons').scrollIntoView();
})