function updateHeaderView() {
    let html = /*HTML*/`
    <div class="header">
        <div class="first_header">
            <img src="img/logo.png" alt="GET Academy logo" width="200rem">
            <div>
                <a href="" class="notification_bell">
                    <span>Inboks</span>
                    <span class ="badge">1</span>
                </a>
                <details>
                    <summary>
                        Ola.Nordmann@getacademy.no
                        <hr>
                    </summary>
                    <p>Logg ut</p>
                </details>
            </div>
        </div>
        ${updateNavbarView()}
    </div>`;
    return html;
}
