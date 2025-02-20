document.getElementById('formulaire').addEventListener('submit', (e)=>{
    e.preventDefault(); // empeche l'actualisation
    checkForm(); //verifie que le formulaire est valide
})

function checkForm(){
    let valid = true;

    resetError(); // Supprime les anciens messages d'erreurs

    //Verification mail valide et input vide
    valid = isValidEmail('mail', 'mailError') ? valid : 0;
    valid = checkNotEmpty('name', 'nameError') ? valid : 0;
    valid = checkNotEmpty('mail', 'mailError') ? valid : 0;
    valid = checkNotEmpty('message', 'messageError') ? valid : 0;

    if(valid)
        alert('Votre message a bien été envoyé !');

    resetInputs(); // Reset les inputs entre deux try
}

function checkNotEmpty(input, error){
    let value = document.getElementById(input).value;

    if (!value){
        document.getElementById(error).innerHTML = 'Ce champ est obligatoire.'
        return 0;
    }
    return 1;
}

function isValidEmail(idMail, error){
    let chaine=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!chaine.test(String(document.getElementById(idMail).value).toLowerCase())){
        document.getElementById(error).innerHTML = 'Mail non valide.';
        return false;
    }
    return true;
}    

function resetError(){
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('mailError').innerHTML = '';
    document.getElementById('messageError').innerHTML = '';
}

function resetInputs(){
    document.getElementById('name').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('message').value = '';
}