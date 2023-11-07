// find_an_object_in_an_array_by_one_of_its_properties
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#find_an_object_in_an_array_by_one_of_its_properties

function updateArticleView() {
    const articleId = model.app.pages.articlePage.articleId;
    const pageNumber = model.app.pages.articlePage.articlePageNumber;
      
    const articleObject = model.articles.find(({ id }) => id === articleId);
    const atomIndexes = articleObject.atoms[pageNumber-1];

    const articleName = articleObject.name;
    const articleContent = renderArticleAtoms(atomIndexes);
    const articlePagination = renderArticlePagination(articleObject);

    return /*html*/`
        <div id="articlePage">
            ${renderLeftBox()}
            ${renderMiddleBox(articleName, articleContent, articlePagination)}
            ${renderRightBox()}
        </div>
    `;
}

function renderLeftBox() {
    let html = /*html*/`
        <div id="articlePageLeftBox">

            <div id="articlePageLeftBoxTitle">
                Notater
            </div>

            <div id="articlePageLeftBoxInput">
                <textarea>Notater skrives her</textarea>
            </div>

        </div>
    `;
    return html;
}

function renderMiddleBox(articleName, articleContent, articlePagination) {
    let html = /*html*/`
        <div id="articlePageMiddleBox">

            <div id="articlePageMiddleBoxView">

                <div id="articlePageMiddleBoxViewArticleName">
                    ${articleName}
                </div>

                <div id="articlePageMiddleBoxViewArticleContent">
                    ${articleContent}
                </div>

                <div id="articlePageMiddleBoxNavigation">
                    ${articlePagination}
                </div>

            </div>

        </div>
    `;
    return html;
}

function renderRightBox() {
    let html = /*html*/`
        <div id="articlePageRightBox">

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

        </div>
    `;
    return html;
}

function renderArticleAtoms(atomIndexes) {
    let html = '';
    for (const atomIndex of atomIndexes) {
        const atom = model.atoms.find(({ id }) => id === atomIndex);
        html +=
          (atom.type === 'text')       ? articleAtomText(atom.title, atom.text)
        : (atom.type === 'imageHTTP')  ? articleAtomImageHTTP(atom.title, atom.text, atom.ref)
        : (atom.type === 'youtube')    ? articleAtomYoutube(atom.title, atom.text, atom.ref)
        : (atom.type === 'imageAsset') ? articleAtomImageAsset(atom.title, atom.text, atom.ref)
        : (atom.type === 'videoAsset') ? articleAtomVideoAsset(atom.title, atom.text, atom.ref)
        : (atom.type === 'askChoices') ? articleAtomAskChoices(atom.ask, atom.correct, atom.choices)
        : null;
    }
    return html;
}

function renderArticlePagination(articleObject) {
    let paginationCount = articleObject.atoms.length;
    let pageNumber = model.app.pages.articlePage.articlePageNumber;
    return `
        <button>◀</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>▶</button>
    `;
}
