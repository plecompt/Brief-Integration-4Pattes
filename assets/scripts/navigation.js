document.getElementById('logo').addEventListener('click', ()=>{
        // Charge les differentes sections de la page principale
        loadPage("navigation.html", "navigation.js", "navigation");
        loadPage("hautpage.html", "", "hautpage");
        loadPage("dons.html", "", "dons");
        loadPage("mission.html", "", "mission");
        loadPage("reussite.html", "reussite.js", "reussite");
        loadPage("quizz.html", "quizz.js", "quizz");
        loadPage("temoignages.html", "", "temoignages");
        loadPage("footer.html", "", "footer");
        //unload page
        unloadPage("contact", "contact.js");
});

document.getElementById('ctaAccueil').addEventListener('click', ()=>{
    // Charge les differentes sections de la page principale
    loadPage("navigation.html", "navigation.js", "navigation");
    loadPage("hautpage.html", "", "hautpage");
    loadPage("dons.html", "", "dons");
    loadPage("mission.html", "", "mission");
    loadPage("reussite.html", "reussite.js", "reussite");
    loadPage("quizz.html", "quizz.js", "quizz");
    loadPage("temoignages.html", "", "temoignages");
    loadPage("footer.html", "", "footer");
    //unload page
    unloadPage("contact", "contact.js");
});

document.getElementById('ctaContact').addEventListener('click', ()=>{
    //unload pages
    unloadPage("hautpage", "");
    unloadPage("dons", "");
    unloadPage("mission", "");
    unloadPage("reussite", "reussite.js");
    unloadPage("quizz", "quizz.js");
    unloadPage("temoignages", "");

    // load page
    loadPage("contact.html", "contact.js", "contact");
});