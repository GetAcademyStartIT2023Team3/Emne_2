let views = {
    "main": updateGraphView,
    "map": updateGraphView,
    "plan": updateGraphView,
    "article": updateGraphView,
};

function updateView() {
    views[model.app.selectedPage]();
}
