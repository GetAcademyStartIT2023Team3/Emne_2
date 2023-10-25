function changePage(page) {
    model.app.selectedPage = page;
    updateMainpageView(0);
}

function createTopbarHtml() {
    function createLinkHtml(text, page) {
        return model.app.selectedPage != page ? /*html*/`<a href="javascript: changePage('${page}'); updateMainpageView(0)">${text}</a>` : `${text}`;
    }
    return /*html*/`
        <div class ="hrz center">
            <img src="https://inside.getacademy.no/img/logo.png" style="width: 9rem"/><div style="width:900px"></div><details><summary>xxxxxxx@getacademy.no</summary><a href="">Logg ut</a></details>
        </div>
        <nav>
            <pre><a href="">Student</a> | </pre>
            <pre><a href="">Emne 1</a> | </pre>
            <pre><a href="">Emne 2</a> | </pre>
            <pre><a href="">Emne 3</a> | </pre>
            <pre><a href="">NK</a> | </pre>
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

function updateMainpageView(weekIdx) {
    let app = document.getElementById("app");

    let weekHtml = "";
    let weekContent = model.curriculum.weekPlan[weekIdx].content;
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
        <div class="hrz">
            <div style="flex:1">
            </div>
            <div class="container" style="min-height:1000px; flex:3">
                <h2>Nøkkelkompetanse</h2>
                <pre>I Nøkkelkompetanse lærer vi om blablabla<br/>blablablablablabla blablabla blablablablablabla blablabla blablabla<br/>blablablablablablablablablablablablablablabla<br/>blablabla blablabla blablabla blablabla</pre>
                <div class="dark" style="position:absolute; top:220px; left: 60%; width: 300px;">
                    ${weekHtml}
                </div>
                ${topicsHtml}
            </div>
            <div style="flex:1">
            </div>
        </div>
        </div>
    `;
}