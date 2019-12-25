let Debut_form = function () {
    let currentDiv = document.getElementById('new');

    let div = document.createElement("div");
    currentDiv.appendChild(div);
    div.setAttribute('id', 'div_globale');
};

let Ajout_barre_nom = function (value_string, value_string_nom) {
    let div = document.getElementById('div_globale');

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
    input.setAttribute('value', value_string);

    let div3 = document.createElement("div");
    form.appendChild(div3);
    div3.setAttribute('class', 'form-group mx-sm-3 mb-2');

    let input2 = document.createElement("input");
    div3.appendChild(input2);
    input2.setAttribute('type', 'text');
    input2.setAttribute('class', 'form-control');
    input2.setAttribute('placeholder', value_string_nom);
};

let Ajout_menu_deroulant = function (value_array) {
    let div = document.getElementById('div_globale');

    let select = document.createElement("select");
    div.appendChild(select);
    select.setAttribute('class', 'custom-select my-1 mr-sm-2');

    let option = document.createElement("option");
    select.appendChild(option);
    option.setAttribute('selected', '');
    option.appendChild(document.createTextNode(value_array[0]));

    let option_array = [];
    for (let i = 1; i < value_array.length; ++i) {
        option_array.push(document.createElement("option"));
        select.appendChild(option_array[i-1]);
        option_array[i-1].setAttribute('value', String(i));
        console.log()
        option_array[i-1].appendChild(document.createTextNode(value_array[i]));
    }
// <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
//         <option selected>Choose...</option>
//         <option value="1">One</option>
//         <option value="2">Two</option>
//         <option value="3">Three</option>
// </select>
};

let Ajout_texte = function (value_string) {
    let div = document.getElementById('div_globale');

    let input = document.createElement("input");
    div.appendChild(input);
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'form-control-plaintext');
    input.setAttribute('readonly','');
    input.setAttribute('value', value_string);
};

let Ajout_multiple_box = function (value_string, compteur_int) {
    let div = document.getElementById('div_globale');

    let div_form = document.createElement("div");
    div.appendChild(div_form);
    div_form.setAttribute('class', 'form-check form-check-inline');

    let input = document.createElement('input');
    div_form.appendChild(input)
    input.setAttribute('class', 'form-check-input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('value', value_string);
    input.setAttribute('id', "inlineCheckbox"+String(compteur_int));

    let label = document.createElement('label');
    div_form.appendChild(label);
    label.setAttribute('class', 'form-check-label');
    label.setAttribute('for', "inlineCheckbox"+String(compteur_int));

    label.appendChild(document.createTextNode(value_string));
};

let Bouton_submit = function (value_string) {
    let div = document.getElementById('div_globale');

    let button = document.createElement("button");
    div.appendChild(button);
    button.setAttribute('type', 'submit');
    button.setAttribute('class', 'btn btn-primary');

    button.appendChild(document.createTextNode(value_string))
};