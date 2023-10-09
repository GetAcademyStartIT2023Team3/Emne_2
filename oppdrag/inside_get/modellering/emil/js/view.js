function updateView() {
    let html = '';
    displayObject(model);

    document.getElementById('app').innerHTML = html;
}

function displayObject(obj) {
    let html = '';
    html += '<pre style="font-size: 1rem;">';
    html += JSON.stringify(value=obj, replacer=null, space=4);
    html += '</pre>';

    document.getElementById('debug').innerHTML += html;
}
