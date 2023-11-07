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

/*
    Emil

    Vi beholder modellen slik den er.
        Når det gjelder endring i modellen, model.curriculum så var planen å ha en array med flere ukeplaner.
        I utgangspunktet så tenkte jeg slik.
        - Eskil ønsker å ha innhold basert på ukeplan hvor studenten i kull Høst 2023 starter fra dato sånn og sånn.
        Dette ser vi nå bort i fra for enkelthets skyld også får vi bare tåle at vi ikke kan lagre mer enn en ukeplan om gangen.


    Når student går inn på "weeklyScheduleView" så skal ukeplan for den kalender-uken vi er i nå vises.
        Studenten kan bla gjennom ukene (frem og tilbake).
        Her må vi konvertere kalender-uke-nummer til ukeplan-uke-nummer.

        Vi tar utgangspunkt i startDate (som er '2023-08-07' i modellen) og finner ukenummer for den datoen.
        Denne datoen hadde forrøvrig ukenummer 32. 
        Nå setter vi første uke i ukeplanen (uke 1) til å samsvare med kalenderuken (32) som vi har funnet for startDate.
        Nå er det bare å ta +1 for hver uke på alle ukenummer for både kalender og ukeplan.
        Vi ender dermed opp med dette mønsteret.
            uke 1       kalender-uke 32 => model.curriculum.weekPlan[index_for_week_1].week: 1
            uke 2 (+1)  kalender-uke 33 => model.curriculum.weekPlan[index_for_week_2].week: 2
            uke 3 (+2)  kalender-uke 32 => model.curriculum.weekPlan[index_for_week_3].week: 3


    Burde vi fulgt kalender-uke istedenfor å starte med uke 1?
        Kanskje.. tanken bak var at vi kunne bruke en dato for å spesifisere starten på kurset.
        Vi har brukt model.curriculum.tartDate for dette. Da kan man regne seg frem.
        Du må veldig gjerne gjøre endringer i modellen om du føler for det
        eller om det gjør implementering lettere. Det er ikke sikkert at nåværende model er den beste løsningen.
*/
