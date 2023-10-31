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

function createArticleMainContent(index) {
    let html = '';
    let currentArticle = index - 1;
    let articleAtoms = model.articles[currentArticle].atoms
    let atoms = model.atoms

    for (let array of articleAtoms) {
        console.log(array)
        for (let element of array) {
            for (let obj of atoms) {
                if (element == obj.id) {
                    html += functionFromType(obj)
                }
            }
        }
    }

    // for (let j = 0; j < model.atoms.length; j++) {
    //     if (element == model.atoms[j].id) {
    //         html += functionFromType(model.atoms[j])
    //     }
    // }

    // for (let i = 0; i < model.articles[currentArticle].atoms[0].length; i++) {
    //     let articleAtom = model.articles[currentArticle].atoms[0][i];
    //     // console.log(articleAtom);
    //     for (let j = 0; j < model.atoms.length; j++) {
    //         console.log(model.atoms[j])
    //         if (articleAtom == model.atoms[j].id) {
    //             html += functionFromType(model.atoms[j])
    //         }
    //     }
    // }
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