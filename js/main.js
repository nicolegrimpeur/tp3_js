let Add = function (array, id_debut, id_tab) {
    Debut_tableau(id_debut, id_tab);
    for (let i = 0; i < array.length; ++i) {
        if (array[i].length != 0) {
            Add_titre(i);
            Add_type(i, array);
        }
    }
};

let New = function () {
    Event_click_recherche();
    Event_click_new_plat();
    Event_click_new_ingredient();
    Event_click_add_ingredient();
};

