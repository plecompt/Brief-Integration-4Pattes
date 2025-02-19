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
    
    element.innerHTML = '';
    element.classList.add("hidden");

    let scriptsQuery = document.querySelectorAll(`script[src="./assets/scripts/${scripts}"]`);
        scriptsQuery.forEach(script => script.remove());
}

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
loadPage("navigation.html", "navigation.js", "navigation");
loadPage("hautpage.html", "", "hautpage");
loadPage("dons.html", "", "dons");
loadPage("mission.html", "", "mission");
loadPage("reussite.html", "reussite.js", "reussite");
loadPage("quizz.html", "quizz.js", "quizz");
loadPage("temoignages.html", "", "temoignages");
loadPage("footer.html", "", "footer");