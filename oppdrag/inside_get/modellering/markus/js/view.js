"use strict";

//View
function updateView() {
    let app = document.getElementById("app");
    let html = "";
    html += /*html*/`
        <div class = "horizontal">
            <a href="javascript:model.pages.articlePage.selectedArticle=2; updateView();">Articles</a>
            &nbsp;|&nbsp; 
            Toggle present-mode: <input type="checkbox" onclick="toggleMode()" />
        </div>
        ${articleView()}
    `;
    app.innerHTML = html;
}

function articleView() {
    let html ="";
    let pages = [];
    if(model.pages.articlePage.isPresenting) {
        html += /*html*/`<div class ="presentation body">`;
        for(const presentation of model.presentations) if(presentation.articleID == model.pages.articlePage.selectedArticle) {
            pages = presentation.pages;
            break;
        }
    } else {
        html += /*html*/`<div class ="article body">`;
        for(const article of model.articles) if(article.articleID == model.pages.articlePage.selectedArticle) {
            pages.push(article.atoms);
            break;
        }
    };

    for(const atomId of pages[model.pages.articlePage.selectedPage-1]) for(const atom of model.atoms) if(atom.id == atomId) {
        html += atom.makeHtmlFunction(atom.details);
    }
    html += /*html*/`</div>`;

    if(pages.length > 1) {
        html += /*html*/`<div class="horizontal">`;
        for(let i = 0; i < pages.length; i++) {
            html += /*html*/`<button onclick="changePage(${i+1})">${i+1}</button>`;
        }
        html += /*html*/`</div>`;
    }
    html += /*html*/`<div class = "scroll_section">`;
    return html;
}