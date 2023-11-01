let views;
let graph; 
//Inneholder instance av "Graph" classen fra graphView.js
//

function main() {
    views = {
        "main": updateMainView,
        "graph": updateGraphView,
        "weeklySchedule": updateWeeklyScheduleView,
        "article": updateArticleView,
    };

    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('page')) selectPage(searchParams.get('page'));
    if (searchParams.has('test')) test(searchParams.get('test'));
    updateView();
}


function selectPage(page) {
    // legg til query string i URL, for eksempel "index.html?page=article" for å gå rett til article siden.
    model.app.selectedPage = page;
}


function test(test) {
    // legg til query string i URL, for eksempel "index.html?test=article" for å lage tester for (og se) denne siden
    if (test === 'article') testArticle();
}

