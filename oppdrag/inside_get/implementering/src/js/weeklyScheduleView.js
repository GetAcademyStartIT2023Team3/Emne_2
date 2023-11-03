function updateWeeklyScheduleView() {
    return /*HTML*/`
    <div class="w_container">
        <div class="w_content w_item">
            ${updateWeeklyListView()}
            ${updateWeeklyNavbarView()}
        </div>
        ${updateWeeklySidebarView()}
    </div>`;
}

function updateWeeklyListView() {
    let html =/*HTML*/`
    <div class="w_content_box-1">
        <ul class="w_list">
            <li>
                <h3 class="w_list_header">Mandag</h3>
                <div class="w_flex w_middle">
                    <a href="#">
                        <div class="w_bold">Sammarbeid og kommunkasjon</div>
                        <div>Kommunkasjon</div>
                    </a>
                    <a href="#">
                        <div class="w_bold">XXXXX</div>
                        <div>XXXXX</div>
                    </a>
                </div>
            </li>
            <li>
                <h3>Tirsdag</h3>
                <div class="w_flex">
                    <a href="#">
                        <div class="w_bold">Tenknin og læring</div>
                        <div>Nevroplastisitet</div>
                    </a>
                    <a href="#">
                        <div class="w_bold">XXXXX</div>
                        <div>XXXXX</div>
                    </a>
                </div>
            </li>
            <li>
                <h3>Onsdag</h3>
                <div class="w_flex">
                    <a href="#">
                        <div class="w_bold">Sammarbeid og kommunkasjon</div>
                        <div>Kritisk tenkning</div>
                    </a>
                    <a href="#">
                        <div class="w_bold">XXXXX</div>
                        <div>XXXXX</div>
                    </a>
                </div>
            </li>
            <li>
                <h3>Torsdag</h3>
                <div class="w_flex">
                    <a href="#">
                        <div class="w_bold">Sammarbeid og kommunkasjon</div>
                        <div>Kommunkasjon</div>
                    </a>
                </div>
            </li>
            <li>
                <h3>Fredag</h3>
                <div class="w_flex">
                    <a href="#">
                        <div class="w_bold">Sammarbeid og kommunkasjon</div>
                        <div>Kommunkasjon</div>
                    </a>
                </div>
            </li>
        </ul>
    </div>`;
    return html;
}

function updateWeeklyNavbarView() {
    let html = /*HTML*/`
    <div class="w_content_box-2">
        <div class="w_navbar">
            <h2 class="w_list_header">Uke 42 - 2023:</h2>
            <div>Uke 3 av 20</div>
            <button>◀◀</button>
            <button>◀</button>
            <button>▶</button>
            <button>▶▶</button>
        </div>
        <div class="w_tip">
            <div class="bubble">
                Dagens Tips!<br>
                Gjør ett eller annet.
            </div>
            <div style="position: relative">
                <div class="tail" style="position: absolute; left: 65px; top: -1px"></div>
            </div>
            <img class="eskil" src="https://getacademy.no/hs-fs/hubfs/GetAcademy-NHO_398.jpg?width=749&height=500&name=GetAcademy-NHO_398.jpg">
        </div>
    </div>`;
    return html;
}

function updateWeeklySidebarView() {
    let html = /*HTML*/`
    <div class="w_sidebar w_center">
        <h2 class="w_header">Nyeste lest</h2>
        <ul class="w_list w_alternating">
            <li>
                <a href="#">
                    <div class="w_bold">Sammarbeid og kommunkasjon</div>
                    <div>Kommunkasjon</div>
                </a> 
            </li>
            <li>
                <a href="#">
                    <div class="w_bold">Tenknin og læring</div>
                    <div>Nevroplastisitet</div>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="w_bold">Sammarbeid og kommunkasjon</div>
                    <div>Kritisk Tenkning</div>
                </a>
            </li>            
        </ul>
    </div>`;
    return html;
}