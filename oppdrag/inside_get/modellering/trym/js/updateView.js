updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="container">
        ${updateHeaderView()}
        ${updateViewMain()}
        ${updateSidebarView()}
    </div>`;
}