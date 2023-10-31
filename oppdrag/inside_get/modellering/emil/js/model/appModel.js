// app-state
function getAppModel() {
    let app = {
        page: {
            name: 'articles',
            meta: {},
        },
        pages: {
            articles: {
                selectedID: 1,
            },
            articlePage: {
                selectedArticle: 1,
                subjectIndex: 1,
                selectedPage: 1,
            }
        }
    }
    return app;
}
