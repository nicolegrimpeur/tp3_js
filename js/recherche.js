let Event_click_recherche = function () {
    let click_ajout_plat = document.getElementById('recherche');
    click_ajout_plat.addEventListener('click', Nouvel_recherche)
};

let Nouvel_recherche = function () {
    let currentDiv = document.getElementById('new');
    let div = document.getElementById('div_globale');
    currentDiv.removeChild(div);
    Affichage_recherche();
};

let Affichage_recherche = function () {
    Debut_form();
    Ajout_barre_nom("  Votre recherche :", "Nom");
    Bouton_submit("Rechercher");

};