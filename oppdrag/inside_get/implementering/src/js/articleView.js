function updateArticleView() {
    let articleId = model.app.pages.articlePage.articleId;
    let articleObject = getArticle(articleId);

    let article = renderArticleAtoms(articleObject);
    let pagination = renderArticlePagination(articleObject);

    return /*html*/`
        <div id="articlePage">
            ${renderLeftBox()}
            ${renderMiddleBox(article, pagination)}
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

function renderMiddleBox(article, pagination) {
    let html = /*html*/`
        <div id="articlePageMiddleBox">

            <div id="articlePageMiddleBoxView">
                ${article}
            </div>

            <div id="articlePageMiddleBoxNavigation">
                ${pagination}
            </div>

        </div>  
    `;
    return html;
}

function renderRightBox() {
    let html = /*html*/`
        <div id="articlePageRightBox">

            <div>Steder</div>

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

function renderArticleAtoms(articleObject) {
    let html = '';
    let pageNumber = model.app.pages.articlePage.articlePageNumber;
    let atomIndexes = articleObject.atoms[pageNumber-1];
    for (const atomIndex of atomIndexes) {
        let atom = getAtom(atomIndex);
        console.log('renderArticleAtoms() atom type =', atom.type);
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
