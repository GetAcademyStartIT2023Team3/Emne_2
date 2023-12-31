
function updateArticleView() {
    const articleId = model.app.pages.articlePage.articleId;
    const pageNumber = model.app.pages.articlePage.articlePageNumber;

    // Find an object in an array by one of its properties.
    // MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#find_an_object_in_an_array_by_one_of_its_properties
    const articleObject = model.articles.find( ({ id }) => (id === articleId) );
    const atomIndexes = articleObject.atoms[pageNumber-1];

    // Filtering invalid entries from json (or JS-object)
    // MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#filtering_invalid_entries_from_json
    const articleAtoms = model.atoms.filter( ({ id }) => atomIndexes.includes(id) );

    const articleName = articleObject.name;
    const articleContent = renderArticleAtoms(articleAtoms);
    const articlePagination = renderArticlePagination(articleObject);

    return /*html*/`
        <div id="articlePage">

            <div id="articlePageLeftBox">
                ${renderLeftBox()}
            </div>

            <div id="articlePageMiddleBox">
                ${renderMiddleBox(articleName, articleContent, articlePagination)}
            </div>

            <div id="articlePageRightBox">
                ${renderRightBox()}
            </div>

        </div>
    `;
}

function renderLeftBox() {
    let html = /*html*/`
        <div id="articlePageLeftBoxTitle">
            Notater
        </div>

        <div id="articlePageLeftBoxInput">
            <textarea>Notater skrives her</textarea>
        </div>
    `;
    return html;
}

function renderMiddleBox(articleName, articleContent, articlePagination) {
    let html = /*html*/`
        <div id="articlePageMiddleBoxArticleName">
            ${articleName}
        </div>

        <div id="articlePageMiddleBoxArticleContent">
            ${articleContent}
        </div>

        <div id="articlePageMiddleBoxPagination">
            ${articlePagination}
        </div>
    `;
    return html;
}

function renderRightBox() {
    let html = /*html*/`
        <div id="articlePageRightBoxTitle">
            Steder
        </div>

        <div id="articlePageRightBoxTopics">
            <div>
                Sammarbeid og kommunikasjon
                <ul>
                    <li><a href="">Problemløsning</a></li>
                    <li><a href="">Læring</a></li>
                    <li><a href="">Pomodoro</a></li>
                </ul>
            </div>
        </div>

        <div id="articlePageRightBoxRelatedArticles">
            <div>
                Relaterte Artikler
                <ul>
                    <li><a href="">Focused/diffused mindset</a></li>
                    <li><a href="">Pomodoro</a></li>
                </ul>
            </div>
        </div>
    `;
    return html;
}

function renderArticleAtoms(articleAtoms) {
    let html = '';

    // For all objects in array, call function.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
    articleAtoms.every((atomObject) => html += renderArticleAtom(atomObject));

    return html;
}

function renderArticleAtom(atom) {
    return (atom.type === 'text')      ? articleAtomText(atom.title, atom.text)
        : (atom.type === 'imageHTTP')  ? articleAtomImageHTTP(atom.title, atom.text, atom.ref)
        : (atom.type === 'youtube')    ? articleAtomYoutube(atom.title, atom.text, atom.ref)
        : (atom.type === 'imageAsset') ? articleAtomImageAsset(atom.title, atom.text, atom.ref)
        : (atom.type === 'videoAsset') ? articleAtomVideoAsset(atom.title, atom.text, atom.ref)
        : (atom.type === 'askChoices') ? articleAtomAskChoices(atom.ask, atom.correct, atom.choices)
        : null;
}

function renderArticlePagination(articleObject) {
    let html = '';
    let idString = '';

    let maxPage = articleObject.atoms.length;
    let articlePageNumber = model.app.pages.articlePage.articlePageNumber;

    if (articlePageNumber !== 1) html += `<button onclick="articleControllerPageFlip(${-1});">◀</button>`;

    for (let page = 1; page <= maxPage; page++) {
        idString = (page === articlePageNumber) ? 'id="articlePageMiddleBoxPaginationSelected"' : '';
        html += `<button ${idString} onclick="articleControllerPageSelect(${page});">${page}</button>`;
    }

    if (articlePageNumber !== maxPage) html += `<button onclick="articleControllerPageFlip(${1});">▶</button>`;

    return html;
}
