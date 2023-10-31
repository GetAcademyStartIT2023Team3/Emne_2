function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="container-main">
        ${updateHeaderView()}
        ${updateMainView()}
        ${updateFooterView()}
    </div>
    `;
}

function updateHeaderView() {
    let html = /*HTML*/`
    <div class="container-1">
            <div class="header-1">
                <img src="img/logo.png" alt="GET Academy logo" width="10%">
                <div>
                    <details>
                        <summary>
                            Ola.Nordmann@getacademy.no
                        </summary>
                        <a>Logg ut</a>
                    </details>
                    <hr>
                </div>
            </div>

            <div class="header-2">
                <ul class="navbar-1">
                    <li><a href="">Student</a></li>
                    <li><a href="">Emne 1</a></li>
                    <li><a href="">Emne 2</a></li>
                    <li><a href="">Emne 3</a></li>
                    <li><a href="">NK</a></li>
                    <li><a href="">Bonus</a></li>
                    <li><a href="">Oblig</a></li>
                    <li><a href="">Opptak</a></li>
                </ul>
                <div class="navbar-2">
                    <div class="nav-item-1">
                        <a href="">Tilbake til Ukeplan</a>
                    </div>
                    <div class="nav-item-2">
                        <div class="nav-buttons">
                            <button>🠈</button>
                            <button>🠊</button>
                        </div>
                        <div class="searchbar">
                            <input type="text" placeholder="Search..">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return html;
}

function updateFooterView() {
    let html = /*HTML*/`
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