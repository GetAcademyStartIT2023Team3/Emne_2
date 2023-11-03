function changePage(pageId) {
    model.app.selectedPage = pageId;
    updateView();
}

function changeArticle(articleId) {
    let articlePage = model.app.pages.articlePage;
    articlePage.selectedArticle = articleId;
    articlePage.selectedPage = 1;
    articlePage.topicIndex = getArticle(articleId).topicId;
}