// listener pour savoir lorsque l'on clique sur la barre rechercher
let Event_click_add_ingredient = function () {
    let click_ajout_plat = document.getElementById('add_ingredient');
    click_ajout_plat.addEventListener('click', Ajouter_ingredient);
};

let Ajouter_ingredient = function () {
    // supprime la partie sous la barre
    let currentDiv = document.getElementById('new');
    let div = document.getElementById('div_globale');
    currentDiv.removeChild(div);
    // affiche le formulaire sous la barre
    Affichage_formulaire_ajouter_ingredient();
};

// affiche le formulaire
let Affichage_formulaire_ajouter_ingredient = function () {
    // affiche le formulaire
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

    // listener pour savoir lorsque l'on modifie le nom du plat
    let click_nom_plat = document.forms['nom_plat'];
    click_nom_plat.addEventListener('click', Modification_list_ingredients);

    // permet d'éviter que le bouton soit à côté des ingrédients mais en dessous
    Ajout_texte("", "vide");
    Bouton_submit("Modifier");

    // ajout d'un listener sur le bouton modifier
    let click_modifier = document.getElementById('submit');
    click_modifier.addEventListener('click', Clic_modifier_ingredient);
};

// fonction qui coche ou décoche les ingrédients en fonction du plat sélectionné
let Modification_list_ingredients = function () {
    // vérifie qu'un nom a été rentré pour le plat
    if (document.forms["nom_plat"].elements[0].value != "Nom du plat") {
        let id;
        let compteur = 0;
        let list_ingredient;
        // ajoute à liste_ingredient la liste des ingrédients du plat demandé
        for (let i = 0; i < plats.length; ++i) {
            for (let j = 0; j < plats[i].length; ++j, ++compteur) {
                if (compteur == document.forms["nom_plat"].elements[0].value) {
                    list_ingredient = plats[i][j].ingredients;
                }
            }
        }
        // coche ou decoche la case en fonction de si l'ingrédient est utilisé dans le plat ou non
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
    // si aucun plat n'a été demandé toutes les cases sont décochés
    else {
        let id;
        for (let i = 0; i < ingredients.length; ++i) {
            id = document.getElementById("inlineCheckbox"+String(i));
            id.checked = false;
        }
    }
};

let Clic_modifier_ingredient = function () {
    // vérifie qu'un nom a été rentré pour le plat
    if (document.forms["nom_plat"].elements[0].value != "Nom du plat") {
        let id;
        let tab_ingredients = [];
        // ajoute à tab_ingrédients la liste des ingrédients
        for (let i = 0; i < ingredients.length; ++i) {
            id = document.getElementById("inlineCheckbox"+String(i));
            if (id.checked == true) {
                tab_ingredients.push(String(i));
            }
        }

        let compteur = 0;
        // modifie la liste des ingrédients du plat
        for (let i = 0; i < plats.length; ++i) {
            for (let j = 0; j < plats[i].length; ++j, ++compteur) {
                // teste si le compteur est égal à l'indice du plat demandé
                if (compteur == document.forms["nom_plat"].elements[0].value) {
                    plats[i][j].ingredients = tab_ingredients;

                    // ajout du texte pour dire que l'ingrédient a bien été rajouté (et suppression de l'ancien texte s'il existait déjà
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

        // suppression du message d'erreur s'il existe
        if (document.getElementById("erreur_modif_ingredient") != null) {
            let erreur = document.getElementById("erreur_modif_ingredient");
            erreur.remove();
        }
    }
    // sinon affichage d'un message demandant de remplir toutes les cases
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

    // fonction pour supprimer et rafficher le tableau avec le nouveau plat
    Raffraichir_menu();
};