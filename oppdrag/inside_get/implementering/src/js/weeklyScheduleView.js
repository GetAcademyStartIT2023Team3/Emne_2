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
    let currentWeek = model.app.pages.weeklySchedulePage.currentWeek
    let weekView = generateWeekView(currentWeek);
    return /*HTML*/`
        <div class="w_content_box-1">
            <ul class="w_list">
                ${weekView}
            </ul>
        </div>`;
}

function generateWeekView(currentWeek) {
    let html = '';
    let weekPlan = model.curriculum.weekPlan;
    let weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    let weekData = null;

    for (let i = 0; i < weekPlan.length; i++) {
        if (weekPlan[i].week === currentWeek) {
            weekData = weekPlan[i];
            break;
        }
    }

    if (!weekData) {
        return '';
    }

    for (let day of weekDays) {
        let dayData = weekData[day];
        let schedule = generateDaySchedule(dayData);
        let translatedDay = translateWeekdayToNorwegian(day);
        html += /*HTML*/`
            <li>
                <h3 class="w_list_header">${translatedDay}</h3>
                <div class="w_flex">
                    ${schedule}
                </div>
            </li>`;
    }
    return html;
}

function generateDaySchedule(dayData) {
    let html = '';
    let articles = model.articles;
    let topics = model.topics

    for (let articleId of dayData) {
        let article = null;
        let topic = null;
        let topicId = null;

        for (let i = 0; i < articles.length; i++) {
            if (articles[i].id === articleId) {
                article = articles[i];
                topicId = articles[i].topicId

                for (let j = 0; j < topics.length; j++) {
                    if (topics[j].id === topicId) {
                        topic = topics[j]
                    }
                }
            }
        }

        if (article) {
            html += /*HTML*/`
                <a href="#" style="flex: 1">
                    <div class="w_bold">${topic.name}</div>
                    <div>${article.name}</div>
                </a>`;
        }
    }
    return html;
}

function translateWeekdayToNorwegian(weekday) {
    let translations = {
        'monday': 'Mandag',
        'tuesday': 'Tirsdag',
        'wednesday': 'Onsdag',
        'thursday': 'Torsdag',
        'friday': 'Fredag'
    };
    return translations[weekday];
}

function updateWeeklyNavbarView() {
    let currentWeekNumber = model.app.pages.weeklySchedulePage.currentWeek;

    let startDate = model.curriculum.startDate;
    let currentWeekDate = getWeekDate(startDate);

    let html = /*HTML*/`
    <div class="w_content_box-2">
        <div class="w_navbar">
            <h2>Uke ${currentWeekDate} - 2023:</h2> 
            <div>Uke ${currentWeekNumber} av 20</div>
            <button onclick="navigateWeek(-5)">◀◀</button>
            <button onclick="navigateWeek(-1)">◀</button>
            <button onclick="navigateWeek(1)">▶</button>
            <button onclick="navigateWeek(5)">▶▶</button>
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

// getWeekNumberFromSelectedWeek(currentWeekNumber)
function getWeekNumberFromSelectedWeek(currentWeekNumber) {
}

function getWeekDate(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    const yearStart = new Date(d.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return weekNumber;
}

function updateWeeklySidebarView() {
    let html = /*HTML*/`
    <div class="w_sidebar w_center">
        <h2 class="w_header">Nyeste lest</h2>
        <ul class="w_list w_alternating">
            ${generateLaarticlesTopicIdListReadArticles()}
        </ul>
    </div>`;
    return html;
}

function generateLaarticlesTopicIdListReadArticles() {
    let html = '';
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
                        html += /*HTML*/`
                            <li>
                                <a href="#">
                                    <div class="w_bold">${topic.name}</div>
                                    <div>${article.name}</div>
                                </a>
                            </li>`;
                        break;
                    }
                }
            }
        }
    }
    return html;
}

// Note: Endring som skal gjøres i modell. Ikke oppdatertert endring enda.
// curriculum: [
//     {   
//         id: 1,
//         startDate: '2023-08-07',
//         weekPlan: [
//             { week: 1, monday: [4, 3], tuesday: [2], wednesday: [2], thursday: [7, 3], friday: [4] },
//             { week: 2, monday: [],     tuesday: [],  wednesday: [],  thursday: [],     friday: []  },
//             { week: 3, monday: [5, 1], tuesday: [7], wednesday: [6], thursday: [4, 5], friday: [6] },
//         ],
//     },
//     {   
//         id: 2,
//         startDate: '2023-11-07',
//         weekPlan: [],
//     },
// ],