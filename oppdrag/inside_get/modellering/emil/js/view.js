let pages = {
    tema: '<a href="hovedside.html">Hovedside</a>'
};

function updateView() {
    let html = '';
    html += '<p>Pages</p>';
    html += pages.tema;
    document.getElementById('app').innerHTML = html;
}
