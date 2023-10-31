let views = {
    "main": updateMainpageView,
    "map": updateMappageView,
    "plan": updatePlanpageView,
    "article": updateArticlepageView,
};

function updateView() {
    views[model.app.selectedPage]();
}
