//variables globales, à refaire.
//Dons
let montant = 50;
let frequency = "/ mois";
//Quizz
let q1, q2, q3;
let score = 0;


function loadPage(page, script, id) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
            document.getElementById(id).classList.remove("hidden");
            applyStyle();
            if (script)
                loadScript(script);
        });
}

function loadScript(scriptName) {
    let script = document.createElement('script');
    
    script.src = `./assets/scripts/${scriptName}`;
    script.defer = true;
    document.body.appendChild(script);
}

//Efface le contenu html et les scripts JS
function unloadPage(id, scripts) {
    let element = document.getElementById(id);
    let scriptsQuery = document.querySelectorAll(`script[src="./assets/scripts/${scripts}"]`);
    
    element.innerHTML = '';
    element.classList.add("hidden"); //cache la section.
    scriptsQuery.forEach(script => script.remove()); // supprime les scripts associés. Ne décharge pas vraiment les variables... à refaire.
}

// Applique fontSize et fontWeight
function applyStyle() {
    document.querySelectorAll('[fontSize]').forEach(function(el) {
        let fontSize = el.getAttribute('fontSize') + 'px';
        el.style.setProperty('--fontSize', fontSize);
    });

    document.querySelectorAll('[fontWeight]').forEach(function(el) {
        let fontWeight = el.getAttribute('fontWeight');
        el.style.setProperty('--fontWeight', fontWeight);
    });
}

// Charge les differentes sections de la page principale
function loadHome(first){
    loadPage("assets/views/navigation.html", "navigation.js", "navigation");
    loadPage("assets/views/hautpage.html", "", "hautpage");
    loadPage("assets/views/dons.html", "dons.js", "dons");
    loadPage("assets/views/mission.html", "", "mission");
    loadPage("assets/views/reussite.html", "reussite.js", "reussite");
    loadPage("assets/views/quizz.html", "quizz.js", "quizz");
    loadPage("assets/views/temoignages.html", "", "temoignages");
    loadPage("assets/views/footer.html", "", "footer");
    // Décharge la partie contact si first == true;
    if (!first)
        unloadPage("contact", "contact.js");
}

// Charge la section contact et décharge le reste
function loadContact(){
        // Décharge les sections de la page principale
        unloadPage("hautpage", "");
        unloadPage("dons", "dons.js");
        unloadPage("mission", "");
        unloadPage("reussite", "reussite.js");
        unloadPage("quizz", "quizz.js");
        unloadPage("temoignages", "");
        // Charge la page contact
        loadPage("assets/views/contact.html", "contact.js", "contact");
}

// Pour ce projet specifique loader/deloader les pages et les scripts ne semble pas très pertinent d'un point de vue performance. De plus, Le code est difficilement maintenable. Avec plus de temps, j'aurai implémenté un router qui charge et decharge les parties specifique des pages en fonction de si ces pages sont chargées.
// Chaque page devrait être sous la forme d'une liste de composants
// home: { view: "home", components: ["navigation", "hautpage", ... , "footer"] },
// contact: { view: "contact", components: ["navigation, "contact", "footer""] }

// Pour le premier chargement, pas besoin de deload contact.
loadHome(1); 