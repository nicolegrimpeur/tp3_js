// lance l'affichage du tableau array
let Add = function (array, id_debut, id_tab) {
    // lance la création de la div principale qui contiendra le tableau
    Debut_tableau(id_debut, id_tab);

    // affiche les plats type par type (entré puis plat puis dessert)
    for (let i = 0; i < array.length; ++i) {
        // vérifie que le tableau n'est pas vide
        if (array[i].length != 0) {
            // affiche le type
            Add_titre(i);
            // affiche le tableau en fonction du type
            Add_type(i, array);
        }
    }
};

// lance les listeners permettant de savoir lorsque l'on clique sur un des boutons de la barre
let New = function () {
    Event_click_recherche();
    Event_click_new_plat();
    Event_click_new_ingredient();
    Event_click_add_ingredient();
};

