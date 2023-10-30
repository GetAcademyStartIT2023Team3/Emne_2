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
            ${createArticleMainContent(4)}
        </div>
    </div>
    `;
    return html;
}

console.log(createArticleMainContent(4))
function createArticleMainContent(index) {
    let currentArticle = index - 1;
    let html = '';
    /*
    Iterere gjennom model.articles[i],
    deretter iterere atoms[i].

    Sjekke verdiene(id) i listen under atoms.

    Iterere gjennom model.atoms[i]
    Sjekke om id er lik, 
    hvis id er lik, 
    sjekk type,
    deretter generere HTML. (type==text) html += <p>atom.text</p>
    */
   

    for (let i = 0; i < model.articles[currentArticle].atoms[0].length; i++) {
        let articleAtom = model.articles[currentArticle].atoms[0][i];
        for (let j = 0; j < model.atoms.length; j++) {
            if (articleAtom == model.atoms[j].id) {
                if (model.atoms[j].type == 'text') {
                    html += `<p>${model.atoms[j].atom.text}</p>`;
                } else if (model.atoms[j].type == 'imageHTTP') {
                    html += `<img src="${model.atoms[j].atom.ref}" 
                    alt="${model.atoms[j].atom.text}" width="75%">`;
                }
            }
        }
    }
    return html;
}

/* <p class="content-text">
${atoms[0].atom.text}
</p>
<img src="${atoms[1].atom.ref}" alt="${atoms[1].atom.text}" width="75%">
<p class="content-text">
${atoms[2].atom.text} ${atoms[2].atom.ref}
</p>
<p>
${atoms[3].atom.text}
</p>
<p>
${atoms[4].atom.text}
</p>
<p>
${atoms[5].atom.title} ${atoms[5].atom.ref}
</p> */