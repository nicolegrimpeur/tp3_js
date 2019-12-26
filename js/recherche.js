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
    Ajout_barre_nom("  Votre recherche :", "Nom", "nom");
    Bouton_submit("Rechercher");

    // ajout d'un listener sur le bouton submit
    let click_submit = document.getElementById('submit');
    click_submit.addEventListener('click', Tableau_recherche);
};

let Tableau_recherche = function () {
    let search_value = document.forms["nom"].elements[1].value;
    let array = [[], [], []];
    let nom_plat = "";
    let noms_ingredient = [];
    let nom_ingredient = "";
    for (let i = 0; i < plats.length; ++i) {
        for (let j = 0; j < plats[i].length; ++j) {
            nom_plat = plats[i][j].name;
            if (nom_plat.toLowerCase().search(search_value.toLowerCase()) != -1) {
                array[i].push(plats[i][j]);
            }
            else
            {
                noms_ingredient = plats[i][j].ingredients;
                for (let count = 0; count < noms_ingredient.length; ++count) {
                    console.log(ingredients[noms_ingredient[count]].name);
                    if (ingredients[noms_ingredient[count]].name.toLowerCase().search(search_value.toLowerCase()) != -1) {
                        array[i].push(plats[i][j]);
                    }
                }
            }
        }
    }

    let currentDiv = document.getElementById("contient_tab");
    if (currentDiv != null) {
        currentDiv.remove();
    }
    console.log(array);
    Add(array, "tableau_menu", "contient_tab");
};