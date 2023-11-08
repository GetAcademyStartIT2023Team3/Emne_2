function updateWeeklyScheduleView() {
    return /*HTML*/`
        <div class="w_container">

            <div class="w_content w_item">

                <div class="w_content_box-1">
                    ${updateWeeklyListView()}
                </div>

                <div class="w_content_box-2">

                    <div class="w_navbar">
                        ${updateWeeklyRightNavbarWeekButtonView()}
                    </div>

                    <div class="w_tip">
                        ${updateWeeklyRightNavbarWeekTeacherHintsView()}
                    </div>

                </div>

            </div>

            <div class="w_sidebar w_center">

                <h2 class="w_header">Tidligere leste artikler</h2>

                <ul class="w_list w_alternating">
                    ${generateLatestSeenArticles()}
                </ul>

            </div>

        </div>
    `;
}

function updateWeeklyListView() {
    let currentWeek = model.app.pages.weeklySchedulePage.currentWeek;

    const currentWeekPlan = model.curriculum.weekPlan.find( ({ week }) => (week === currentWeek) );

    let html = '';

    for (let weekday of dateHandlerGetEnglishWeekdayList(5)) {
        html += /*HTML*/`
            <ul class="w_list">

                <li>
                    <h3 class="w_list_header">
                        ${dateHandlerConvertWeekdayToLocale(weekday, model.app.settings.locale )}
                    </h3>

                    <div class="w_flex">
                        ${generateDaySchedule(currentWeekPlan[weekday])}
                    </div>
                </li>

            </ul>
        `;
    }

    return html;
}

function generateDaySchedule(articleIdList) {
    let html = '';

    for (let articleId of articleIdList) {
        const articleObject = model.articles.find( ({ id }) => (id === articleId) );
        const topicObject = model.topics.find( ({ id }) => (id === articleObject.topicId) );
        html += /*HTML*/`
            <a href="#" style="flex: 1">
                <div class="w_bold">${topicObject.name}</div>
                <div>${articleObject.name}</div>
            </a>
        `;
    }

    return html;
}

function updateWeeklyRightNavbarWeekButtonView() {
    let firstWeek = Math.min(...model.curriculum.weekPlan.map((x) => x.week));
    let lastWeek = Math.max(...model.curriculum.weekPlan.map((x) => x.week));
    let currentWeek = model.app.pages.weeklySchedulePage.currentWeek;

    // prevent out of bounds navigation for weeks that do not exist settin either 1 or 0 to both..
    let back = (currentWeek === firstWeek) ? 0 : 1;
    let forward = (currentWeek === lastWeek) ? 0 : 1;

    return /*HTML*/`
        <h2 class="w_header">Uke ${currentWeek} av ${lastWeek}</h2>
        <button onclick="navigateWeekToWeek(${firstWeek})">◀◀</button>
        <button onclick="navigateWeekToWeek(${currentWeek - back})">◀</button>
        <button onclick="navigateWeekToWeek(${currentWeek + forward})">▶</button>
        <button onclick="navigateWeekToWeek(${lastWeek})">▶▶</button>
    `;
}
function updateWeeklyRightNavbarWeekTeacherHintsView() {
    return /*HTML*/`
        <div class="bubble">
            Dagens Tips!<br>
            Gjør ett eller annet.
        </div>

        <div style="position: relative">
            <div class="tail" style="position: absolute; left: 65px; top: -1px"></div>
        </div>

        <img class="eskil" src="https://getacademy.no/hs-fs/hubfs/GetAcademy-NHO_398.jpg?width=749&height=500&name=GetAcademy-NHO_398.jpg">
    `;
}

function generateLatestSeenArticles() {
    let html = '';

    for (userSeenArticleObject of model.fakeUser.seenArticles) {

        const articleObject = model.articles.find( ({ id }) => (id === userSeenArticleObject.articleId) );

        const topicObject = model.topics.find( ({ id }) => (id === articleObject.topicId) );

        let border = (userSeenArticleObject.isFinished) ? 'border: solid 5px rgb(10, 55, 10)'
                                                        : 'border: solid 5px rgb(55, 10, 10)';
        html += /*HTML*/`
            <li style="${border}">

                <div>
                    ${dateHandlerPrettyFormat(userSeenArticleObject.date, model.app.settings.locale)}
                </div>

                <a href="#">
                    <div class="w_bold">
                        ${topicObject.name}
                    </div>

                    <div>
                        ${articleObject.name} side ${userSeenArticleObject.lastSeenPage}
                    </div>
                </a>

            </li>
        `;
    }

    return html;
}
