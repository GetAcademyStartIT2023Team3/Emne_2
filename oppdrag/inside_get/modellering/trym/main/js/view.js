function updateView() {
    let page = model.app.selectedPage;
    if (page === 'main') updateViewMain();
    else if (page === 'week') updateViewWeek();
    else if (page === 'graph') updateViewGraph();
    else if (page === 'article') updateViewArticle();
}