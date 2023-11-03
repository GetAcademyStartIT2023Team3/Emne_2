"use strict";

let getArticle = (id) => { for(let article of model.articles) if (article.id == id) return article; }
let getTopic = (id) => { for(let topic of model.topics) if(topic.id == id) return topic; }
let getAtom = (id) => { for (const atom of model.atoms) if (atom.id == id) return atom; }

//Topic style kan være "none", "above" eller "inline"
function createArticleLink(articleId, topicStyle, extrajs) {
    let article = getArticle(articleId);
    let topic = getTopic(article.topicId);
    if(!extrajs) extrajs = "";
    
    switch(topicStyle) {
        case "none": return /*html*/`<a href="javascript: ${extrajs}; changeArticle(${articleId}); changePage('article');">${article.name}</a>`;
        case "above": return /*html*/`<h4>${topic.name}</h4><a href="javascript: ${extrajs}; changeArticle(${articleId}); changePage('article');">${article.name}</a>`;
        case "inline": return /*html*/`<a href="javascript: ${extrajs}; changeArticle(${articleId}); changePage('article');">${topic.name} - ${article.name}</a>`
        default: throw new Error("Incorrect value passed to createArticleLink");
    }
}

function createTopbarHtml() {
    function createLinkHtml(text, page) {
        return model.app.selectedPage != page ? /*html*/`<a href="javascript: changePage('${page}')">${text}</a>` : `${text}`;
    }
    return /*html*/`
        <header class="hflex center">
            <div style="flex: 1">
                <img src="https://inside.getacademy.no/img/logo.png" style="width: 9rem; object-fit: contain"/>
            </div>
            <div style="flex:3" class="vflex">
                <nav class="hflex center">
                    <pre><a href="">Student</a> | </pre>
                    <pre><a href="">Emne 1</a> | </pre>
                    <pre><a href="">Emne 2</a> | </pre>
                    <pre><a href="">Emne 3</a> | </pre>
                    <pre>NK | </pre>
                    <pre><a href="">Bonus</a> | </pre>
                    <pre><a href="">Oblig</a> | </pre>
                    <pre><a href="">Opptak</a></pre>
                </nav>
                <nav class="hflex center">
                    <pre>${createLinkHtml("Hovedside", "main")} | </pre>
                    <pre>${createLinkHtml("Ukeplan", "weeklySchedule")} | </pre>
                    <pre>${createLinkHtml("Kart", "graph")}</pre>
                </nav>
            </div>
            <div style="flex: 1" class="vflex">
                <details>
                    <summary>epost@epost.epost</summary>
                    Test
                </details>
                <div class="hflex center">
                    <button>🠈</button>
                    <button>🠊</button>
                    <input type="text" style="width: 100%"/>
                </div>
            </div>
        </header>
    `;
}
