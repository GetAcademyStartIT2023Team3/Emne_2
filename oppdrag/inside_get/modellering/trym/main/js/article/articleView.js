function updateViewArticle() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="container-main">
        ${updateHeaderView()}
        ${updateMainView()}
        ${updateFooterView()}
    </div>
    `;
}

function updateHeaderView() {
    let html = /*HTML*/`
    <div class="container-1">
            <div class="header-1">
                <img src="img/logo.png" alt="GET Academy logo" width="10%">
                <div>
                    <details>
                        <summary>
                            Ola.Nordmann@getacademy.no
                        </summary>
                        <a>Logg ut</a>
                    </details>
                    <hr>
                </div>
            </div>

            <div class="header-2">
                <ul class="navbar-1">
                    <li><a href="">Student</a></li>
                    <li><a href="">Emne 1</a></li>
                    <li><a href="">Emne 2</a></li>
                    <li><a href="">Emne 3</a></li>
                    <li><a href="">NK</a></li>
                    <li><a href="">Bonus</a></li>
                    <li><a href="">Oblig</a></li>
                    <li><a href="">Opptak</a></li>
                </ul>
                <div class="navbar-2">
                    <div class="nav-item-1">
                        <a href="">Tilbake til Ukeplan</a>
                    </div>
                    <div class="nav-item-2">
                        <div class="nav-buttons">
                            <button>🠈</button>
                            <button>🠊</button>
                        </div>
                        <div class="searchbar">
                            <input type="text" placeholder="Search..">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return html;
}

function updateFooterView() {
    let html = /*HTML*/`
    <div class="container-3">
            <div class="footer">
                <button>◀</button>
                <div class="text">1</div>
                <div class="text">2</div>
                <div class="text">3</div>
                <button>▶</button>
            </div>
        </div>
    `;
    return html;
}

function updateMainView() {
    let html = /*HTML*/`
    <div class="container-2">
            <div class="item item-1">
                <h2>Notater</h2>
                <textarea class="article-notes"></textarea>
            </div>
            ${mainContent()}
            ${sidebarContent(0, 3)}
        </div>
    `;
    return html;
}

function mainContent(atomId) {
    let html = '';
    let atoms = model.atoms
    html += /*HTML*/`
    <div class="item item-2">
        <div class="item-2-header">
        <h1>${atoms[0].atom.title}</h1>
        </div>
        <div class="item-2-content">
            ${createArticleMainContent(4, 1)}
        </div>
    </div>
    `;
    return html;
}

function createArticleMainContent(index, page) {
    let html = '';
    let currentArticle = index - 1;
    let articleAtoms = model.articles[currentArticle].atoms
    let atoms = model.atoms

    for (let array of articleAtoms) {
        for (let element of array) {
            for (let obj of atoms) {
                if (element == obj.id) {
                    html += functionFromType(obj);
                }
            }
        }
    }

    return html;
}
function functionFromType(atomIndex) {
    let type = atomIndex.type
    let atom = atomIndex.atom
    if(type == "text") return `<p>${atom.text} ${atom.ref}</p>`;
    else if(type == "imageHTTP") return `<img src="${atom.ref}" alt="${atom.text}" width="75%">`;
    else if(type == "imageAsset") return `<img src="${atom.ref}" alt="${atom.text}" width="75%">`;
    else if(type == "youtube") return `<h2>${atom.title}</h2><iframe src="${atom.ref}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`;
    else if(type == "askChoices") return ``;
}

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