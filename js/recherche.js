// listener pour savoir lorsque l'on clique sur la barre rechercher
let Event_click_recherche = function () {
    let click_ajout_plat = document.getElementById('recherche');
    click_ajout_plat.addEventListener('click', Nouvel_recherche)
};

let Nouvel_recherche = function () {
    // supprime la partie sous la barre
    let currentDiv = document.getElementById('new');
    let div = document.getElementById('div_globale');
    currentDiv.removeChild(div);
    // affiche le formulaire de recherche sous la barre
    Affichage_recherche();
};

// affiche le formulaire
let Affichage_recherche = function () {
    // affiche le formulaire
    Debut_form();
    Ajout_barre_nom("  Votre recherche :", "Nom", "nom");
    Bouton_submit("Rechercher");

    // ajout d'un listener sur le bouton submit
    let click_submit = document.getElementById('submit');
    click_submit.addEventListener('click', Tableau_recherche);
};

// permet d'actualiser le tableau lors de la recherche
let Tableau_recherche = function () {
    let search_value = document.forms["nom"].elements[1].value;
    let array = [[], [], []];
    let nom_plat = "";
    let noms_ingredient = [];

    // parcours le tableau plat pour déterminer si la recherche effectué existe dans le tableau plat
    for (let i = 0; i < plats.length; ++i) {
        for (let j = 0; j < plats[i].length; ++j) {
            nom_plat = plats[i][j].name;
            // teste si le nom correspond à la recherche
            if (nom_plat.toLowerCase().search(search_value.toLowerCase()) != -1) {
                array[i].push(plats[i][j]);
            }
            else
            {
                // teste si un des ingrédients correspond à la recherche
                noms_ingredient = plats[i][j].ingredients;
                for (let count = 0; count < noms_ingredient.length; ++count) {
                    if (ingredients[noms_ingredient[count]].name.toLowerCase().search(search_value.toLowerCase()) != -1) {
                        array[i].push(plats[i][j]);
                    }
                }
            }
        }
    }

    // si la recherche ne renvoi rien, on affiche que aucun résultat n'a été trouvé
    if (array[0].length == 0 && array[1].length == 0 && array[2].length == 0) {
        if (document.getElementById("aucune_occurence") == null) {
            Ajout_texte("Aucun élément ne correspond à votre recherche", "aucune_occurence");
        }
    }
    else {
        // supprime le message aucun résultat trouvé s'il existe
        if (document.getElementById("aucune_occurence") != null) {
            document.getElementById("aucune_occurence").remove();
        }
        // supprime le tableau du menu
        let currentDiv = document.getElementById("contient_tab");
        if (currentDiv != null) {
            currentDiv.remove();
        }
        // affiche le nouveau tableau avec les éléments obtenu à la recherche
        Add(array, "tableau_menu", "contient_tab");
    }
};