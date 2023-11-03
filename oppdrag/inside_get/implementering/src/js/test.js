function testArticle() {
    model.app.selectedPage = "article";
    addArticleDummyDataV1();
    console.log(model.atoms[0].title);
    console.log(model.atoms[0].text);
    // model.app.pages.articlePage.selectedArticle = 1;
    // model.app.pages.articlePage.topicIndex = 1;
    // model.app.pages.articlePage.selectedPage = 1;
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
