function changePage(pageId) {
    model.app.selectedPage = pageId;
    updateView();
}

function changeArticle(articleId) {
    let articlePage = model.app.pages.articlePage;
    articlePage.articleId = articleId;
    articlePage.articlePageNumber = 1;
}
