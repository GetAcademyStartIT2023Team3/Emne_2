"use strict";

function createTopbarHtml() {
    function createLinkHtml(text, page) {
        return model.app.selectedPage != page ? /*html*/`<a href="javascript: changePage('${page}')">${text}</a>` : `${text}`;
    }
    return /*html*/`
        <div class ="hrz" style="justify-content: space-between; height: 100px">
            <div class="padding"></div>
            <img src="https://inside.getacademy.no/img/logo.png" style="object-fit: contain; flex: 5"/>
            <div style="flex: 5"></div>
            <details style="flex: 5"><summary>xxxxxxx@getacademy.no</summary><a href="">Logg ut</a></details>
            <div class="padding"></div>
        </div>
        <nav>
            <pre><a href="">Student</a> | </pre>
            <pre><a href="">Emne 1</a> | </pre>
            <pre><a href="">Emne 2</a> | </pre>
            <pre><a href="">Emne 3</a> | </pre>
            <pre>NK | </pre>
            <pre><a href="">Bonus</a> | </pre>
            <pre><a href="">Oblig</a> | </pre>
            <pre><a href="">Opptak</a></pre>
        </nav>
        <nav>
            <pre>${createLinkHtml("Hovedside", "main")} | </pre>
            <pre>${createLinkHtml("Ukeplan", "plan")} | </pre>
            <pre>${createLinkHtml("Kart", "map")}</pre>
        </nav>
    `;
}

function updateMainpageView() {
    let app = document.getElementById("app");

    let weekHtml = "";
    let weekContent;
    for(let week of model.curriculum.weekPlan) if(week.week == model.app.pages.mainpage.weekId) weekContent = week.content;
    for(let [key, value] of Object.entries(weekContent)) {
        weekHtml += `<h5>${key.toUpperCase()}</h5>`;
        for(let articleId of value) {
            for(let article of model.articles) if(articleId == article.id){
                let topicName = model.topics.find((elem) => elem.id == article.topicId).name || "ERROR";
                weekHtml += `<a href="">${topicName} - ${article.name}</a><br>`;
            } 
        }
    }

    let topicsHtml = "";
    for(let topic of model.topics) {
        let articlesHtml = "";
        for(let article of model.articles) if(article.topicId == topic.id) articlesHtml += /*html*/`
            <a href="">${article.name}</a><br>
        `;
        topicsHtml += /*html*/`
            <details>
                <summary>${topic.name}</summary>
                <div class="hrz">
                    <div>
                        ${articlesHtml}
                    </div>
                    <div class="dark">
                        ${topic.description}
                    </div>
                </div>
            </details>
        `;
    }

    app.innerHTML = /*html*/`
        ${createTopbarHtml()}
        <div class="hrz" style="height:1000px">
            <div style="flex: 1; min-width: 20px">
            </div>
            <div class="container" style="flex: 3; min-width: 600px">
                <div style="position:relative;">
                    <div class="dark" style="position:absolute; right: 50px; top: 10px;">
                        ${weekHtml}
                    </div>
                </div>
                <h2>Nøkkelkompetanse</h2>
                <pre>I Nøkkelkompetanse lærer vi om blablabla<br/>blablablablablabla blablabla blablablablablabla blablabla blablabla<br/>blablablablablablablablablablablablablablabla<br/>blablabla blablabla blablabla blablabla</pre>
                
                ${topicsHtml}
            </div>
            <div style="flex: 1; min-width: 20px;">
            </div>
        </div>
        </div>
    `;
}

function updateRelatedSubview() {
    let selected = model.app.pages.mappage.selectedKeyword;
    let related = document.getElementById("related");
    let listHtml = "";
    for(let article of model.articles) if(article.keywords.some((e) => e == selected)) {
        listHtml += /*html*/`<li><a href="javascript: changePage('article'); model.app.pages.articles.selectedId = ${article.id}; updateView();">${article.name}</a></li>`;
    }
    related.innerHTML = /*html*/`
        <div class="container history">
            <h4>${model.keywords[selected].name} er nevnt i disse artiklene:</h4>
            <ul>
                ${listHtml}
            </ul> 
        </div>
    `;
}

function updateMappageView() {
    let app = document.getElementById("app");
    
    app.innerHTML = /*html*/`
        ${createTopbarHtml()}
        <div class="hrz">
            <div style="flex: 1; min-width: 20px"></div>
            <div class="container">
                <div style="position: relative">
                    <div style="position: absolute; right: 20px;">
                        <!-- Position relative triks -->
                    </div>
                </div>
                <div style="flex: 3; min-width: 20px"></div>
                <svg></svg>
            </div>
            <div id="related" style="flex: 1">
                <ul class="history">
                    <a href="">XXXX</a> er nevnt i disse artiklene:
                    <ul>
                        <li><a href="">Nevroplastisitet</a></li>
                        <li><a href="">Focused vs Diffused mindset</a></li>
                        <li><a href="">Oppgave 4</a></li>
                    </ul>
                </ul>
            </div>
            <div style="flex: 1; min-width: 20px"></div>
        </div>
    `;
    graph = new Graph();
    graph.setup();
}

function updateArticlepageView() {
    let app = document.getElementById("app");
    app.innerHTML = "";
}

function updatePlanpageView() {
    let app = document.getElementById("app");
    app.innerHTML = "";s
}

let views = {
    "main": updateMainpageView,
    "map": updateMappageView,
    "plan": updatePlanpageView,
    "article": updateArticlepageView,
};

function updateView() {
    views[model.app.selectedPage]();
}