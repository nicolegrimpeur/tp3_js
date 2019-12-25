let Debut_form = function () {
    let currentDiv = document.getElementById('new');

    let div = document.createElement("div");
    currentDiv.appendChild(div);
    div.setAttribute('id', 'div_globale');
};

let Ajout_barre_nom = function (value_string) {
    let div = document.getElementById('div_globale')

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
    input2.setAttribute('id', 'inputNom');
    input2.setAttribute('placeholder', 'Nom');
}