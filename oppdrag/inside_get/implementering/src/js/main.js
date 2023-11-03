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
    if (searchParams.size === 0) updateView();
    else if (searchParams.has('page')) selectPage(searchParams.get('page'));
    else if (searchParams.has('test')) test(searchParams.get('test'));
    else invalidQuery(searchParams);
}


function selectPage(page) {
    // legg til query string i URL, for eksempel "index.html?page=article" for å gå rett til article siden.
    model.app.selectedPage = page;
    updateView();
}


function test(test) {
    // lag en funksjon i test.js
    // For eksempel articleTest()
    // Du kan nå kjøre denne funksjonen ved å skrive i URL: index.html?test=articleTest
    eval(`${test}()`);
    updateView();
}

function invalidQuery(searchParams) {
    let doc = document.getElementById("app");
    for (const [key, value] of searchParams.entries()) {
        doc.innerHTML += `${key}: ${value}`;
    }
}
