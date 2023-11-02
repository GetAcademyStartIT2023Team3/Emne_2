function updateMainView() {
    let getArticle = (id) => { for(let article of model.articles) if (article.id == id) return article; }
    let getTopic = (id) => { console.log(id); for(let topic of model.topics) if(topic.id == id) return topic; }

    let mainHtml = "";
    for(let topic of model.topics) {
        mainHtml += /*html*/`<details><summary>${topic.name}</summary><div class="hflex"><div class="vflex">`;
        for(let article of model.articles) if (article.topicId == topic.id) {
            mainHtml += /*html*/`<a href="">${article.name}</a>`;
        }
        mainHtml += /*html*/`</div><div class="inset">${topic.description}</div></details>`;
    }
    let weekHtml = "";
    for(let week of model.curriculum.weekPlan) if(week.week == model.app.pages.mainPage.weekId) {
        let days = {
            "Mandag" : "monday",
            "Tirsdag": "tuesday",
            "Onsdag" : "wednesday",
            "Torsdag": "thursday",
            "Fredag" : "friday",
        }
        for(let [NO, EN] of Object.entries(days)) {
            weekHtml += /*html*/`${NO}:<div class="vflex">`;
            
            for(let article of week[EN]) weekHtml += /*html*/`<a href="">${getTopic(getArticle(article).topicId).name} - ${getArticle(article).name}</a>`;
            weekHtml += /*html*/`</div>`;
        }
    }
    let recentHtml = "";
    let comp = (a,b) => a.seenDate > b.seenDate;
    let lastSeen = model.fakeUser.seenArticles.toSorted(comp);
    if(lastSeen.length > 10) lastSeen.length = 10;
    for(let seen of lastSeen) {
        recentHtml += /*html*/`<div>${getTopic(getArticle(seen.articleId).topicId).name} - <a href="">${getArticle(seen.articleId).name}</a></div>`;
    }
    return /*html*/`
        <div class="hflex center">
            <div class="container" style="flex: 3; height: 600px">
                <div style="position: relative">
                    <div class="inset" style="position: absolute; right: 20px; width: 300px;">
                        <!-- Position relative triks -->
                        ${weekHtml}
                    </div>
                </div>
                <h1>Nøkkelkompetanse</h1>
                <p style="width: calc(100% - 340px)">I nøkkelkompetanse emnet vil du lære om...
                metakognisjon, blablabla sammarbeid, blablabla<br><br>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus, ipsum eget tempor ullamcorper, dui ante cursus neque, pretium imperdiet tellus justo vel lorem. Suspendisse blandit, velit ut dapibus accumsan, nibh sapien blandit nibh, accumsan mollis lorem ex imperdiet diam. Curabitur ac turpis ex.
                </p>
                <hr>
                <div class="alternating vflex">
                    ${mainHtml}
                </div>
            </div>
            <div class="alternating container" style="flex: 1">
                <h2>Nyeste lest</h2>
                ${recentHtml}
            </div>
        </div>
    `;
}
