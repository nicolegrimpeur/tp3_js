let Event_click_new_plat = function () {
    let click_ajout_plat = document.getElementById('new_plat');
    click_ajout_plat.addEventListener('click', Nouveau_plat)
};

let Nouveau_plat = function () {
    let currentDiv = document.getElementById('new');
    let div = document.getElementById('div_globale');
    currentDiv.removeChild(div);
    Affichage_formulaire_nouveau_plat();
};

let Affichage_formulaire_nouveau_plat = function () {
    Debut_form();
    Ajout_barre_nom("  Nom du plat :")

};