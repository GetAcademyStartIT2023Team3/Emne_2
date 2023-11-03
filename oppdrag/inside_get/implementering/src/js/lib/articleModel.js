function articleModelGetArticleObject() {
    // based on selected article, extract correct article object from model.articles
    let selectedArticle = model.app.pages.articlePage.articleId;
    let index = model.articles.map( x => x.id ).indexOf(selectedArticle);
    let articleObject = model.articles[index];
    return articleObject;
}

function articleModelGetAtomObjects(articleObject) {
    // based on selected page, extract array with atom id's, it is needed to extract correct atoms
    let pageNumber = model.app.pages.articlePage.articlePageNumber;
    let atomIndexes = articleObject.atoms[pageNumber-1];

    // extract correct atom objects from model.atoms
    let atomObjects = [];
    for (const atomIndex of atomIndexes) {
        let index = model.atoms.map( x => x.id ).indexOf(atomIndex);
        atomObjects.push(model.atoms[index]);
    }
    return atomObjects;
}
