"use strict";

//Controller
function toggleMode() {
    model.pages.articlePage.isPresenting = !model.pages.articlePage.isPresenting;
    updateView();
}

function changePage(id) {
    model.pages.articlePage.selectedPage = id;
    updateView();
}