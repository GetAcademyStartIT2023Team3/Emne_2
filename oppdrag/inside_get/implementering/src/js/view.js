function updateView() {
    let app = document.getElementById("app");
    app.innerHTML = /*html*/`
        <div class="hflex center">
            <div style="flex: 1"></div>
            <div style="flex: 3">
                ${createTopbarHtml()}
                ${views[model.app.selectedPage]()}
            </div>
            <div style="flex: 1"></div>
        </div>
    `;
    if (model.app.selectedPage == "graph") {
        graph = new Graph();
    }
}

