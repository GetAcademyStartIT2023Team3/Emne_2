function sidebarContent(topicId, articleId) {
    let html = '';
    html += /*HTML*/`
    <div class="item-3">
        <div class="item item-3-1">
            <div class="item-3-1_header">
                <h5>${model.topics[topicId].name}</h5>
            </div>
            <div class="item-3-1_content">
                <ul>
                    ${createTopicSidebarContent(model.topics[topicId])}
                </ul>
            </div>
        </div>
        <div class="item item-3-2">
            <div class="item-3-2_header">
                <h5>Relaterte Artikler</h5>
            </div>
            <div class="item-3-2_content">
                <ul>
                    ${createRelatedArticlesSidebarContent(model.articles[articleId])}
                </ul>
            </div>
        </div>
    </div>
    `;
    return html;
}

function createTopicSidebarContent(currentTopic) {
    let html = ''
    for (let i = 0; i < model.articles.length; i++) {
        if (model.articles[i].topicId == currentTopic.id) {
            html += `<li><a href="">${model.articles[i].name}</a></li>`;
        }
    }
    return html;
}

function createRelatedArticlesSidebarContent(currentArticle) {
    let html = ''
    for(let article of model.articles) if(article.id != currentArticle.id) {
        for(let keyword of article.keywords) if(currentArticle.keywords.includes(keyword)) {
            html += `<li><a href="">${article.name}</a></li>`;
        }
    }
    return html;
}