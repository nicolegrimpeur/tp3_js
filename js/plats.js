let plats = [
    // starters
    [
        {name: 'Quesadillas', preparation: '30', ingredients: ['17', '13', '20', '18'], prixPreparation: '3'},
        {name: 'Salade composée', preparation: '5', ingredients: ['12', '13', '14', '15'], prixPreparation: '1'},
        {name: 'Oeuf saumon en cocotte', preparation: '30', ingredients: ['5', '6', '4', '7'], prixPreparation: '6'},
    ],
    // main courses
    [
        { name: 'Croque Monsieur Saumon Boursin', preparation: '15', ingredients: ['19', '6', '16'], prixPreparation: '2' },
        { name: 'Pates Carbonara', preparation: '15', ingredients: ['0', '3', '4', '5', '22'], prixPreparation: '6' },
        { name: 'Pates Bolognaises', preparation: '25', ingredients: ['0', '1', '2', '22'], prixPreparation: '8' },
    ],
    // desserts
    [
        { name: 'Pancakes', preparation: '14', ingredients: ['21', '8', '20', '5'], prixPreparation: '5' },
        { name: 'Brownies', preparation: '45', ingredients: ['5', '8', '9', '10', '11', '20'], prixPreparation: '8' },
    ],
];

// lance la fonction pour chaque sous partie du menu
let Add_type = function(type, array) {
    for (let i = 0; i < array[type].length; i += 2){
        Add_deux_plats(type, i, array);
    }
};

// permet d'afficher les plats pour une sous partie du menu
let Add_deux_plats = function (type, numero, array) {
    // déclaration des variables pour chaque sous division
    let currentDiv, div, article, h5, textname, p, textingredient, prix_total, myImg, div2, list_ingredients, a;

    // add the newly created element and its content into the DOM
    currentDiv = Recherche_div(type);

    div = document.createElement('div');
    currentDiv.appendChild(div);
    div.setAttribute('class', 'row');

    // permet de former deux colonnes
    for (let i = numero; i < numero + 2 && i < array[type].length; ++i){
        article = document.createElement('article');
        div.appendChild(article);
        article.setAttribute('class', 'col-xs-12 col-sm-6 col-md-6 col-lg-6');

        div2 = document.createElement('div');
        article.appendChild(div2);
        div2.setAttribute('class', 'menu-post-img');

        // affichage de l'image
        a = document.createElement('a');
        div2.appendChild(a);
        a.setAttribute('href', String(Add_image(array[type][i].name)));
        a.setAttribute('title', String(Add_image(array[type][i].name)));

        myImg = new Image();
        myImg.src = Add_image(type);
        a.appendChild(myImg);
        myImg.setAttribute('width', '400');
        myImg.setAttribute('height', '400');
        myImg.setAttribute('src', String(Add_image(array[type][i].name)));
        myImg.setAttribute('alt', 'Image');


        div2 = document.createElement('div');
        article.appendChild(div2);
        div2.setAttribute('class', 'menu-post-desc');

        h5 = document.createElement('h5');
        div2.appendChild(h5);
        h5.setAttribute('class', 'plats');

        // calcul le prix total du produit
        prix_total = Prix_total_plat(type, i, array);

        textname = document.createTextNode(array[type][i].name + " : " + prix_total + "€");
        h5.appendChild(textname);

        p = document.createElement('p');
        div2.appendChild(p);
        p.setAttribute('class', 'menu-text');

        // liste tous les ingrédients utiles au plat
        list_ingredients = '';
        for (let j = 0; j < array[type][i].ingredients.length; ++j){
            if (j < array[type][i].ingredients.length - 1){
                list_ingredients += ingredients[array[type][i].ingredients[j]].name + ' / ';
            }
            else{
                list_ingredients += ingredients[array[type][i].ingredients[j]].name;
            }
        }
        textingredient = document.createTextNode(list_ingredients);
        p.appendChild(textingredient);

    }
};

// permet de retrouver la div dont on a besoin pour afficher le tableau de plat au bon endroit
let Recherche_div = function (type) {
    switch (type) {
        case 0:
            return document.getElementById('Starters');
        case 1:
            return document.getElementById('Main-Courses');
        case 2:
            return document.getElementById('Desserts');
        case 3:
            return document.getElementById('Starters');
    }
};

// retourne l'emplacement de l'image demandé
/**
 * @return {string}
 */
let Add_image = function (image) {
    switch (image) {
        case "Quesadillas":
            return 'image/quesadilla.jpg';
        case 'Salade composée':
            return 'image/salad.jpg';
        case "Oeuf saumon en cocotte":
            return 'image/oeuf_saumon.jpg';
        case "Croque Monsieur Saumon Boursin":
            return 'image/croque_monsieur_saumon_boursin.jpeg';
        case "Pates Carbonara":
            return 'image/patecarbo.jpg';
        case "Pates Bolognaises":
            return 'image/pate_bolo.jpg';
        case "Pancakes":
            return 'image/pancakes.jpeg';
        case "Brownies":
            return 'image/brownie.jpg';
        default:
            return 'image/pasdimage.jpg';
    }
};

/**
 * @return {number}
 */
let Prix_total_plat = function (type, i, array){
    let prix_total;
    prix_total = Number(array[type][i].prixPreparation);

    for (let s = 0; s < array[type][i].ingredients.length; ++s){
        prix_total += Number(ingredients[array[type][i].ingredients[s]].prix);
    }
    return prix_total;
};

let Debut_tableau = function (id_debut, id_tab) {
    let currentDiv= document.getElementById(id_debut);

    let div = document.createElement("div");
    currentDiv.appendChild(div);
    div.setAttribute("id", id_tab);
};

let Add_titre = function (type) { // type : 0 pour entré, 1 pour plat, 2 pour dessert
    let currentDiv= document.getElementById("contient_tab");

    let div = document.createElement("div");
    currentDiv.appendChild(div);
    if (type == 0) {
        div.setAttribute("id", "Starters");
    }
    else if (type == 2) {
        div.setAttribute("id", "Desserts");
    }
    else
    {
        div.setAttribute("id", "Main-Courses");
    }

    let div_titre = document.createElement("div");
    div.appendChild(div_titre);
    div_titre.setAttribute("class", "titre");

    let h2 = document.createElement("h2");
    div_titre.appendChild(h2);

    if (type == 0) {
        h2.appendChild(document.createTextNode("Entrées"));
    }
    else if (type == 2) {
        h2.appendChild(document.createTextNode("Desserts"));
    }
    else
    {
        h2.appendChild(document.createTextNode("Plats"));
    }

    div_titre.appendChild(document.createElement('br'));
    div_titre.appendChild(document.createElement('br'));
};

let Raffraichir_menu = function () {
    let currentDiv = document.getElementById("contient_tab");
    currentDiv.remove();
    Add(plats, "tableau_menu", "contient_tab");
};