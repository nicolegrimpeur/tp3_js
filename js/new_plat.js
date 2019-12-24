let Event_click_new_plat = function () {
    let click_ajout_plat = document.getElementById('new_plat');
    click_ajout_plat.addEventListener('click', Nouveau_plat)
};

let Nouveau_plat = function () {
    console.log("ca marche plat");
    let currentDiv = document.getElementById('new');
    let div = document.getElementById('div_globale');
    console.log(currentDiv);
    currentDiv.removeChild(div);
    console.log(currentDiv);
};