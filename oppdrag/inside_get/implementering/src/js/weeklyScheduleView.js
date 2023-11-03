function updateWeeklyScheduleView() {
    return /*HTML*/`
    <div class="w_container">
        <div class="w_content w_item">
            ${updateWeeklyListView()}
            ${updateWeeklyNavbarView()}
        </div>
        ${updateWeeklySidebarView()}
    </div>`;
}

function updateWeeklyListView() {
    let html =/*HTML*/`
    <div class="w_content_box-1">
        <ul class="w_list">
            <li>
                <h3 class="w_list_header">Mandag</h3>
                <div class="w_flex">
                    <a href="#" style="flex: 1">
                        <div class="w_bold">Sammarbeid og kommunkasjon</div>
                        <div>Kommunkasjon</div>
                    </a>
                    <a href="#" style="flex: 1">
                        <div class="w_bold">XXXXX</div>
                        <div>XXXXX</div>
                    </a>
                </div>
            </li>
            <li>
                <h3>Tirsdag</h3>
                <div class="w_flex">
                    <a href="#" style="flex: 1">
                        <div class="w_bold">Tenknin og læring</div>
                        <div>Nevroplastisitet</div>
                    </a>
                    <a href="#" style="flex: 1">
                        <div class="w_bold">XXXXX</div>
                        <div>XXXXX</div>
                    </a>
                </div>
            </li>
            <li>
                <h3>Onsdag</h3>
                <div class="w_flex">
                    <a href="#" style="flex: 1">
                        <div class="w_bold">Sammarbeid og kommunkasjon</div>
                        <div>Kritisk tenkning</div>
                    </a>
                    <a href="#" style="flex: 1">
                        <div class="w_bold">XXXXX</div>
                        <div>XXXXX</div>
                    </a>
                </div>
            </li>
            <li>
                <h3>Torsdag</h3>
                <div class="w_flex" style="flex: 1">
                    <a href="#">
                        <div class="w_bold">Sammarbeid og kommunkasjon</div>
                        <div>Kommunkasjon</div>
                    </a>
                </div>
            </li>
            <li>
                <h3>Fredag</h3>
                <div class="w_flex" style="flex: 1">
                    <a href="#">
                        <div class="w_bold">Sammarbeid og kommunkasjon</div>
                        <div>Kommunkasjon</div>
                    </a>
                </div>
            </li>
        </ul>
    </div>`;
    return html;
}

function updateWeeklyNavbarView() {
    let html = /*HTML*/`
    <div class="w_content_box-2">
        <div class="w_navbar">
            <h2 class="w_list_header">Uke 42 - 2023:</h2>
            <div>Uke 3 av 20</div>
            <button>◀◀</button>
            <button>◀</button>
            <button>▶</button>
            <button>▶▶</button>
        </div>
        <div class="w_tip">
            <div class="bubble">
                Dagens Tips!<br>
                Gjør ett eller annet.
            </div>
            <div style="position: relative">
                <div class="tail" style="position: absolute; left: 65px; top: -1px"></div>
            </div>
            <img class="eskil" src="https://getacademy.no/hs-fs/hubfs/GetAcademy-NHO_398.jpg?width=749&height=500&name=GetAcademy-NHO_398.jpg">
        </div>
    </div>`;
    return html;
}

function updateWeeklySidebarView() {
    let html = /*HTML*/`
    <div class="w_sidebar w_center">
        <h2 class="w_header">Nyeste lest</h2>
        <ul class="w_list w_alternating">
            ${generateLatestReadArticles()}
        </ul>
    </div>`;
    return html;
}

function generateLatestReadArticles() {
    let latestReadArticlesHTML = '';

    let sortedSeenArticles = [...model.fakeUser.seenArticles];
    
    sortedSeenArticles.sort((a, b) => new Date(b.seenDate) - new Date(a.seenDate));

    for (let i = 0; i < sortedSeenArticles.length; i++) {
        let seenArticle = sortedSeenArticles[i];
        let articleId = seenArticle.articleId;

        for (let j = 0; j < model.articles.length; j++) {
            let article = model.articles[j];

            if (article.id === articleId) {
                let topicId = article.topicId;

                for (let k = 0; k < model.topics.length; k++) {
                    let topic = model.topics[k];

                    if (topic.id === topicId) {
                        latestReadArticlesHTML += /*HTML*/`
                            <li>
                                <a href="#">
                                    <div class="w_bold">${topic.name}</div>
                                    <div>${article.name}</div>
                                </a>
                            </li>
                        `;
                        break;
                    }
                }
            }
        }
    }
    return latestReadArticlesHTML;
}