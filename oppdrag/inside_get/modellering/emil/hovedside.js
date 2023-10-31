function navigationBox() {
    return `
        <div id="navigationBox">
            <div class="rowButtons selectedColor">Hovedside</div>
            <div class="rowButtons">Ukeplan</div>
            <div class="rowButtons">Temakart</div>
            <div class="rowButtons">Info</div>
        </div>
    `;
}

function mainBox() {
    return '<div id="mainBox">' +
           mainBoxInfo() +
           mainBoxTopics() +
           '</div>';

}

function mainBoxInfo() {
    return `
        <div id="mainBoxInfo">
            <div style="border: solid white 1px; width: 60%;">
                <p>I nøkkelkompetanse lærer man</p>
            </div>
            <div style="border: solid white 1px; width: 40%;">
                <p>Denne uken</p>
            </div>
        </div>
    `;
}

function mainBoxTopics() {
    return `
        <div id="mainBoxTopics">
            <div>mainBoxTopics 1</div>
            <div>mainBoxTopics 2</div>
            <div>mainBoxTopics 3</div>
            <div>mainBoxTopics 3</div>
        </div>
    `;
}

function main() {
    let html = '';
    html += navigationBox();
    html += mainBox();
    document.getElementById('main').innerHTML = html;
}
