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
    Ajout_barre_nom("  Nom de l'ingrédient :", "Nom", "nom");
    // 0 le produit n'est pas local, 1 le produit l'est
    let option_menu_deroulant = ["Est-ce que l'ingrédient est local ?", "L'ingrédient n'est pas local", "L'ingrédient est local"];
    Ajout_menu_deroulant(option_menu_deroulant, "local");
    Ajout_barre_nom("  Prix de l'ingrédient :", "Prix", "prix");
    Bouton_submit("Ajouter");

    // ajout d'un listener sur le bouton submit
    let click_submit = document.getElementById('submit');
    click_submit.addEventListener('click', Clic_submit_ingredient);
};

let Clic_submit_ingredient = function () {
    if (document.forms["nom"].elements[1].value != "" && document.forms["local"].elements[0].value != "Est-ce que l'ingrédient est local ?" && document.forms["prix"].elements[1].value != "") {
        ingredients.push({idIng: String(ingredients.length), name: document.forms["nom"].elements[1].value, local: (document.forms["local"].elements[0].value != "Est-ce que l'ingrédient est local ?") ? document.forms["local"].elements[0].value : "0", prix: document.forms["prix"].elements[1].value});

        if (document.getElementById("ingredient_ajoute") != null) {
            let a_suppr = document.getElementById("ingredient_ajoute");
            a_suppr.remove();
        }
        Ajout_texte("L'ingrédient " + document.forms["nom"].elements[1].value + ", " + ((document.forms["local"].elements[0].value == 0) ? "non local" : "local") + ", a bien été ajouté au prix de " + document.forms["prix"].elements[1].value + " euros", "ingredient_ajoute");

        document.forms["nom"].elements[1].value = "";
        document.forms["local"].elements[0].value = "Est-ce que l'ingrédient est local ?";
        document.forms["prix"].elements[1].value = "";

        if (document.getElementById("erreur_ajout_ingredient") != null) {
            let erreur = document.getElementById("erreur_ajout_ingredient");
            erreur.remove();
        }
    }
    else {
        if (document.getElementById("erreur_ajout_ingredient") == null) {
            if (document.getElementById("ingredient_ajoute") != null) {
                let a_suppr = document.getElementById("ingredient_ajoute");
                a_suppr.remove();
            }
            Ajout_texte("Merci de rentrer un nom, de choisir si le produit est local ou pas, ainsi que de donner le prix de l'ingrédient", "erreur_ajout_ingredient");
        }
    }
};