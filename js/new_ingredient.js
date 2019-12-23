let Event_click_new_ingredient = function () {
    let click_ajout_plat = document.getElementById('new_ingredient');
    click_ajout_plat.addEventListener('click', Nouvel_ingredient)
}

let Nouvel_ingredient = function () {
    console.log("ca marche");
};