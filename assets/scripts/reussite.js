let mainImage = document.getElementById('animalImg')
let mainDesc = document.getElementById('animalDescription')

document.querySelectorAll('.animalReussite').forEach(img => {
    img.addEventListener('click', ()=>{
        img.style.border = "5px lightgreen solid";
        changeImage(img.dataset.name, img.dataset.date, img.dataset.description);
    })
});

function changeImage(name, date, description){
    console.log(name);
    console.log(date);
    console.log(description);
}