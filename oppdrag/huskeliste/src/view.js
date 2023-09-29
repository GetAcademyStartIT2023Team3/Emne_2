function updateView() {
    // BLIR ALLTID KALT UANSETT!
    let html ='';
    html += drawSideBar();

    if (model.app.currentPage === 'home') {
        html += updateViewHome();
    } else if (model.app.currentPage === 'calendar') {
        html += 'CALENDER NOT IMPLEMENTED YET';
    }


    document.getElementById('app').innerHTML = html;
}


function drawSideBar() {
    return /*HTML*/`
        <div id="sidebar">
            <ul>
                <li>A</li>
                <li>B</li>
            </ul>
        </div>
    `;
}
