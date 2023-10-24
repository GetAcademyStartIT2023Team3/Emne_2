function updateNavbarView() {
    let html = /*HTML*/`
    <div class="second_header">
        <ul class="main_navbar">
            <li><a href="">Student</a></li>
            <li><a href="">Emne 1</a></li>
            <li><a href="">Emne 2</a></li>
            <li><a href="">Emne 3</a></li>
            <li><a href="">NK</a></li>
            <li><a href="">Bonus</a></li>
            <li><a href="">Oblig</a></li>
            <li><a href="">Opptak</a></li>
        </ul>
        <ul class="second_navbar">
            <li><a href="">Hovedside</a></li>
            <li><a href="">Ukeplan</a></li>
            <li><a href="">Kart</a></li>
        </ul>
        <div>
            <button>Tilbake</button>
            <button>Frem</button>
            <input type="text" placeholder="Search..">
        </div>
    </div>
    `;
    return html;
}