function articleControllerPageSelect(page) {
    model.app.pages.articlePage.articlePageNumber = page;
    updateView();
}

function articleControllerPageFlip(n) {
    if (n !== 1 && n !== -1) {
        throw new Error("articleControllerPageFlip() - argument is neither 1 or -1");
    }
    model.app.pages.articlePage.articlePageNumber += n;
    updateView();
}
