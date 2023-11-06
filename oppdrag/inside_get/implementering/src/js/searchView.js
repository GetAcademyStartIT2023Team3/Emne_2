function textChange(search_string) {
    let result = fuse.search(search_string);
    let html = "";
    for(let r of result) if(r.score < 0.35) {
        for(let article of model.articles) if(article.keywords.some((e) => e == r.refIndex)) {
            html += /*html*/`${createArticleLink(article.id, "above", "graph = null")}\n`;
        }
    }
    console.log(html);
}

function search(event, query) {
    if(event.key == "Enter") {
        model.app.selectedPage = "search";
        model.app.pages.searchPage.query = query;
        updateView();
    }
}

function updateSearchView() {
    let searchHtml = "";
    let result = fuse.search(model.app.pages.searchPage.query);
    for(let r of result) if(r.score < 0.5) {
        for(let article of model.articles) if(article.keywords.some((e) => e == r.refIndex)) {
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