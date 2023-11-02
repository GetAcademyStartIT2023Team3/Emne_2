function updateArticleView() {
    let html = '';
    html += '<div id="articlePage">';

    html += renderNotes();
    html += renderArticle();
    html += renderNavigation();
    
    html += '</div>';

    return html;
}

function renderNotes() {
    let html = /*html*/`
        <div id="articlePageNotes">
            <div style="font-size: 2rem;">
                Notater
            </div>
            <textarea style="width: 90%;">Notater skrives her</textarea>
        </div>
    `;
    return html;
}

function renderArticle() {
    let html = /*html*/`
        <div id="articlePageArticle">
            <div id="articlePageArticleView">
                <h2>Title</h2>
                <p>
                    Text<br>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div>
                <button style="display: inline;">◀</button>
                    <div class="text">1</div>
                    <div class="text">2</div>
                    <div class="text">3</div>
                <button>▶</button>
            </div>
        </div>  
    `;
    return html;
}

function renderNavigation() {
    let html = /*html*/`
        <div id="articlePageNavigation">
            <div>
                <h5>Sammarbeid og kommunikasjon</h5>
            </div>
            <div>
                <ul>
                    <li><a href="">Problemløsning</a></li>
                    <li><a href="">Læring</a></li>
                    <li><a href="">Pomodoro</a></li>
                </ul>
            </div>

            <div>
                <h5>Relaterte Artikler</h5>
            </div>
            <div>
                <ul>
                    <li><a href="">Focused/diffused mindset</a></li>
                    <li><a href="">Pomodoro</a></li>
                </ul>
            </div>
        </div>
    `;
    return html;
}
