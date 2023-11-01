let views = {
    "main": updateMainView,
    "graph": updateGraphView,
    "weeklySchedule": updateGraphView,
    "article": updateArticleView,
};

function updateView() {
    let app = document.getElementById("app");
    app.innerHTML = views[model.app.selectedPage]();
    if (model.app.selectedPage == "graph") {
        graph = new Graph();
        graph.setup();
    }
}

