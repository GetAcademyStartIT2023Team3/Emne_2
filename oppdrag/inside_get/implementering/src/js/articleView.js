function updateArticleView() {
    let html = '';
    html += '<div id="articlePage">';

    html += renderLeftBox();
    html += renderMiddleBox();
    html += renderRightBox();
    
    html += '</div>';

    return html;
}

function renderLeftBox() {
    let html = /*html*/`
        <div id="articlePageLeftBox">

            <div id="articlePageLeftBoxTitle">
                Notater
            </div>

            <div id="articlePageLeftBoxInput">
                <textarea>Notater skrives her</textarea>
            </div>

        </div>
    `;
    return html;
}

function renderMiddleBox() {
    let html = /*html*/`
        <div id="articlePageMiddleBox">

            <div id="articlePageMiddleBoxView">
                <div style="text-align: center;">---ARTICLE CONTENT---</div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div style="text-align: center;">---ARTICLE CONTENT---</div>
            </div>

            <div id="articlePageMiddleBoxNavigation">
                <button>◀</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>▶</button>
            </div>

        </div>  
    `;
    return html;
}

function renderRightBox() {
    let html = /*html*/`
        <div id="articlePageRightBox">

            <div>Steder</div>

            <div id="articlePageRightBoxTopics">
                <div>
                    Sammarbeid og kommunikasjon
                    <ul>
                        <li><a href="">Problemløsning</a></li>
                        <li><a href="">Læring</a></li>
                        <li><a href="">Pomodoro</a></li>
                    </ul>
                </div>
            </div>

            <div id="articlePageRightBoxRelatedArticles">
                <div>
                    Relaterte Artikler
                    <ul>
                        <li><a href="">Focused/diffused mindset</a></li>
                        <li><a href="">Pomodoro</a></li>
                    </ul>
                </div>
            </div>

        </div>
    `;
    return html;
}
