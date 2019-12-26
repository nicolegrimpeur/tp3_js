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
    Ajout_barre_nom("  Nom du plat :", "Nom", "nom");
    //0 entré, 1 plat, et 2 dessert
    Ajout_menu_deroulant(["Type de plat", "Entré", "Plat", "Dessert"], "type");
    Ajout_barre_nom("  Temps de préparation  :", "En minutes", "time");

    Ajout_texte("  Ingrédients : ", "ingredients");
    for (let i = 0; i < ingredients.length; ++i) {
        Ajout_multiple_box(ingredients[i].name, i);
    }
    Ajout_barre_nom("  Prix de la préparation :", "Prix", "prix");
    Bouton_submit("Ajouter");

    // ajout d'un listener sur le bouton submit
    let click_ajouter = document.getElementById('submit');
    click_ajouter.addEventListener('click', Clic_ajouter_plat);
};

let Clic_ajouter_plat = function () {
    if (document.forms["nom"].elements[1].value != "" && document.forms["type"].elements[0].value != "Type de plat" && document.forms["time"].elements[1].value != "" && document.forms["prix"].elements[1].value != "") {
        let id;
        let tab_ingredients = [];
        for (let i = 0; i < ingredients.length; ++i) {
            id = document.getElementById("inlineCheckbox"+String(i));
            if (id.checked == true) {
                tab_ingredients.push(String(i));
            }
        }

        plats[document.forms["type"].elements[0].value].push({name: document.forms["nom"].elements[1].value, preparation: document.forms["time"].elements[1].value, ingredients: tab_ingredients, prixPreparation: document.forms["prix"].elements[1].value});

        if (document.getElementById("plat_ajoute") != null) {
            let a_suppr = document.getElementById("plat_ajoute");
            a_suppr.remove();
        }
        Ajout_texte("Le plat " + document.forms["nom"].elements[1].value + " a bien été ajouté", "plat_ajoute");


        document.forms["nom"].elements[1].value = "";
        document.forms["type"].elements[0].value = "Type de plat";
        document.forms["time"].elements[1].value = "";
        for (let i = 0; i < ingredients.length; ++i) {
            id = document.getElementById("inlineCheckbox"+String(i));
            id.checked = false;
        }
        document.forms["prix"].elements[1].value = "";

        if (document.getElementById("erreur_ajout_ingredient") != null) {
            let erreur = document.getElementById("erreur_ajout_ingredient");
            erreur.remove();
        }
    }
    else {
        if (document.getElementById("erreur_ajout_ingredient") == null) {
            if (document.getElementById("plat_ajoute") != null) {
                let a_suppr = document.getElementById("plat_ajoute");
                a_suppr.remove();
            }
            Ajout_texte("Merci de remplir chaque case", "erreur_ajout_ingredient");
        }
    }
};