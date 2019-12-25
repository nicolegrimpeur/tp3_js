let Event_click_new_ingredient = function () {
    let click_ajout_plat = document.getElementById('new_ingredient');
    click_ajout_plat.addEventListener('click', Nouvel_ingredient);
};

let Nouvel_ingredient = function () {
    let currentDiv = document.getElementById('new');
    let div = document.getElementById('div_globale');
    currentDiv.removeChild(div);
    Affichage_formulaire_nouveau_ingredient();
};

let Affichage_formulaire_nouveau_ingredient = function () {
    Debut_form();
    Ajout_barre_nom("  Nom de l'ingrédient :");

};