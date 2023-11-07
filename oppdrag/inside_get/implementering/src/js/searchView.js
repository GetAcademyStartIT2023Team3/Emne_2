function search(event, query) {
    if(event.key == "Enter") {
        model.app.selectedPage = "search";
        model.app.pages.searchPage.query = query;
        updateView();
    }
}

function updateSearchView() {
    let searchHtml = "";
    let result = main_fuse.search(model.app.pages.searchPage.query);
    for(let r of result) if(r.score < 0.6) {
        for(let article of model.articles) if(article.keywords.some(e => getKeyword(e).name == r.item.keyword) || article.name == r.item.article_name) {
            searchHtml += /*html*/`${createArticleLink(article.id, "above", "graph = null")}\n`;
        }
    }
    return /*html*/`
        <h2>Relaterte artikler:</h2>
        <div class="container">
            ${searchHtml}
        </div>
    `;
}