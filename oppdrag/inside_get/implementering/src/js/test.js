// to run a function, visit "index.html?test=<function_name>""

function testArticleId1() {
    model.app.selectedPage = "article";
    model.app.pages.articlePage.articleId = 1;
    model.app.pages.articlePage.articlePageNumber = 1;
    addArticleDummyDataId1();
}

function testGraph() {
    model.app.selectedPage = "graph";

    for (let i = 0; i < 30; i++) {
        let r = Math.floor(Math.random() * 5);
        model.keywords.push({ name: "XXX" + "X".repeat(r) });
    }

    for (let i = 0; i < 30; i++) {
        let r1 = Math.floor(Math.random() * (model.keywords.length / 2));
        let r2 = Math.floor(Math.random() * model.keywords.length);
        model.keyword_relations.push({ idxA: r1, idxB: r2 });
    }
}
