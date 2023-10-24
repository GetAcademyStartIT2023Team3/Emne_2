function updateSidebarView() {
    let html = /*HTML*/`
    <div class="sidebar">
        <h2>Nyeste lest</h2>
        <ul class="list">
            <li class="item_center">
                <a href="">
                    <div class="bold_text">Sammarbeid og Kommunkasjon</div>
                    <div class="item_center">Kommunkasjon</div>
                </a>
            </li>
            <li class="item_center">
                <a href="">
                    <div class="bold_text">Tenknin og Læring</div>
                    <div class="item_center">Nevroplastisitet</div>
                </a>
            </li>
            <li class="item_center">
                <a href="">
                    <div class="bold_text">Sammarbeid og Kommunkasjon</div>
                    <div class="item_center">Kritisk Tenkning</div>
                </a>
            </li>
        </ul>
    </div>
    `;
    return html;
}