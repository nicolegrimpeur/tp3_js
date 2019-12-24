let Event_click_new_ingredient = function () {
    let click_ajout_plat = document.getElementById('new_ingredient');
    click_ajout_plat.addEventListener('click', Nouvel_ingredient);
};



let Nouvel_ingredient = function () {
    console.log("ca marche");
    let currentDiv = document.getElementById('new');
    let div = document.getElementById('div_globale');
    console.log(currentDiv);
    currentDiv.removeChild(div);
    console.log(currentDiv);
    Affichage_formulaire_nouveau_ingredient();
};

let Affichage_formulaire_nouveau_ingredient = function () {
    let currentDiv = document.getElementById('new');

    let div = document.createElement("div");
    currentDiv.appendChild(div);
    div.setAttribute('id', 'div_globale');

    let form = document.createElement("form");
    div.appendChild(form);
    form.setAttribute('class', 'form-inline');

    let div2 = document.createElement("div");
    form.appendChild(div2);
    div2.setAttribute('class', 'form-group mb-2');

    let input = document.createElement("input");
    div2.appendChild(input);
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'form-control-plaintext');
    input.setAttribute('readonly','');
    input.setAttribute('value', "  Nom de l'ingrédient :");

    let div3 = document.createElement("div");
    form.appendChild(div3);
    div3.setAttribute('class', 'form-group mx-sm-3 mb-2');

    let input2 = document.createElement("input");
    div3.appendChild(input2);
    input2.setAttribute('type', 'text');
    input2.setAttribute('class', 'form-control');
    input2.setAttribute('id', 'inputNom');
    input2.setAttribute('placeholder', 'Nom');
};