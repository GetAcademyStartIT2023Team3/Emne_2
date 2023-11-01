function updateArticleView() {
    let html = '<div class="container">';

    html += renderNotes();
    html += renderArticle();
    html += renderFooter();
    html += '</div>';

    return html;
}

function renderNotes() {
    let html = /*html*/`
        <div class="container">
            <h2>Notater</h2>
            <textarea class="article-notes"></textarea>
        </div>
    `;
    return html;
}

function renderArticle() {
    let html = /*html*/`
        <div class="container">
                <h1>Pomodoro</h1>
            <div class="item-2-content">
                <p class="content-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <br>
                <p class="content-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            </div>
                <div class="item-3">
                    <div class="item item-3-1">
                        <div class="item-3-1_header">
                            <h5>Sammarbeid og kommunikasjon</h5>
                        </div>
                        <div class="item-3-1_content">
                            <ul>
                                <li><a href="">Problemløsning</a></li>
                                <li><a href="">Læring</a></li>
                                <li><a href="">Pomodoro</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="item item-3-2">
                        <div class="item-3-2_header">
                            <h5>Relaterte Artikler</h5>
                        </div>
                        <div class="item-3-2_content">
                            <ul>
                                <li><a href="">Focused/diffused mindset</a></li>
                                <li><a href="">Pomodoro</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    return html;
}

function renderFooter() {
    let html = /*html*/`
            <div class="container-3">
                <div class="footer">
                    <button>◀</button>
                    <div class="text">1</div>
                    <div class="text">2</div>
                    <div class="text">3</div>
                    <button>▶</button>
                </div>
            </div>
    `;
    return html;
}