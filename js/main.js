let Add = function (array, id_debut) {
    Debut_tableau(id_debut);
    for (let i = 0; i < array.length; ++i) {
        Add_titre(i);
        Add_type(i, array);
    }
};

let New = function () {
    Event_click_recherche();
    Event_click_new_plat();
    Event_click_new_ingredient();
    Event_click_add_ingredient();
};

