"use strict";

function changePage(pageId) {
    graph = null;
    model.app.selectedPage = pageId;
    updateView();
}