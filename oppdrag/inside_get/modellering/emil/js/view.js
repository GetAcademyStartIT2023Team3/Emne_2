let pages = {
    tema: '<a href="tema.html">Tema View</a>'
};

function updateView() {
    let html = '';
    html += '<p>Pages</p>';
    html += pages.tema;
    document.getElementById('app').innerHTML = html;
}
