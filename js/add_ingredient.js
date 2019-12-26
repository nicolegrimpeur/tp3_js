let Event_click_add_ingredient = function () {
    let click_ajout_plat = document.getElementById('add_ingredient');
    click_ajout_plat.addEventListener('click', Ajouter_ingredient);
};

let Ajouter_ingredient = function () {
    let currentDiv = document.getElementById('new');
    let div = document.getElementById('div_globale');
    currentDiv.removeChild(div);
    Affichage_formulaire_ajouter_ingredient();
};

let Affichage_formulaire_ajouter_ingredient = function () {
    Debut_form();

    let liste_plat = ["Nom du plat"];
    for (let i = 0; i < plats.length; ++i) {
        for (let j = 0; j < plats[i].length; ++j) {
            liste_plat.push(plats[i][j].name);
        }
    }
    Ajout_menu_deroulant(liste_plat, "nom_plat");

    Ajout_texte("  Ingrédients : ", "ingredients");
    for (let i = 0; i < ingredients.length; ++i) {
        Ajout_multiple_box(ingredients[i].name, i);
    }

    let click_nom_plat = document.forms['nom_plat'];
    click_nom_plat.addEventListener('click', Modification_list_ingredients);

    Ajout_texte("", "vide");
    Bouton_submit("Modifier");

    // ajout d'un listener sur le bouton submit
    let click_modifier = document.getElementById('submit');
    click_modifier.addEventListener('click', Clic_modifier_ingredient);
};

let Modification_list_ingredients = function () {
    if (document.forms["nom_plat"].elements[0].value != "Nom du plat") {
        let id;
        let compteur = 0;
        let list_ingredient;
        for (let i = 0; i < plats.length; ++i) {
            for (let j = 0; j < plats[i].length; ++j, ++compteur) {
                if (compteur == document.forms["nom_plat"].elements[0].value) {
                    list_ingredient = plats[i][j].ingredients;
                }
            }
        }
        for (let i = 0; i < ingredients.length; ++i) {
            id = document.getElementById("inlineCheckbox"+String(i));
            id.checked = null;
            for (let value of list_ingredient) {
                if (i == value) {
                    id.checked = true;
                }
            }
            if (id.checked == null) {
                id.checked = false;
            }
        }
    }
    else {
        let id;
        for (let i = 0; i < ingredients.length; ++i) {
            id = document.getElementById("inlineCheckbox"+String(i));
            id.checked = false;
        }
    }
};

let Clic_modifier_ingredient = function () {
    if (document.forms["nom_plat"].elements[0].value != "Nom du plat") {
        let id;
        let tab_ingredients = [];
        for (let i = 0; i < ingredients.length; ++i) {
            id = document.getElementById("inlineCheckbox"+String(i));
            if (id.checked == true) {
                tab_ingredients.push(String(i));
            }
        }

        let compteur = 0;
        for (let i = 0; i < plats.length; ++i) {
            for (let j = 0; j < plats[i].length; ++j, ++compteur) {
                if (compteur == document.forms["nom_plat"].elements[0].value) {
                    plats[i][j].ingredients = tab_ingredients;
                    if (document.getElementById("plat_modifie") != null) {
                        let a_suppr = document.getElementById("plat_modifie");
                        a_suppr.remove();
                    }
                    Ajout_texte("Le plat " + plats[i][j].name + " a bien été modifié", "plat_modifie");

                }
            }
        }

        document.forms["nom_plat"].elements[0].value = "Nom du plat";
        for (let i = 0; i < ingredients.length; ++i) {
            id = document.getElementById("inlineCheckbox"+String(i));
            id.checked = false;
        }

        if (document.getElementById("erreur_modif_ingredient") != null) {
            let erreur = document.getElementById("erreur_modif_ingredient");
            erreur.remove();
        }
    }
    else
    {
        if (document.getElementById("erreur_modif_ingredient") == null) {
            if (document.getElementById("plat_modifie") != null) {
                let a_suppr = document.getElementById("plat_modifie");
                a_suppr.remove();
            }
            Ajout_texte("Merci de choisir un plat à modifier", "erreur_modif_ingredient");
        }
    }
};