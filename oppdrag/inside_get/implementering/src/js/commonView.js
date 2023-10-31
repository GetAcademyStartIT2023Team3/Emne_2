"use strict";

function createTopbarHtml() {
    function createLinkHtml(text, page) {
        return model.app.selectedPage != page ? /*html*/`<a href="javascript: changePage('${page}')">${text}</a>` : `${text}`;
    }
    return /*html*/`
        <div class ="hrz" style="justify-content: space-between; height: 100px">
            <div class="padding"></div>
            <img src="https://inside.getacademy.no/img/logo.png" style="object-fit: contain; flex: 5"/>
            <div style="flex: 5"></div>
            <details style="flex: 5"><summary>xxxxxxx@getacademy.no</summary><a href="">Logg ut</a></details>
            <div class="padding"></div>
        </div>
        <nav>
            <pre><a href="">Student</a> | </pre>
            <pre><a href="">Emne 1</a> | </pre>
            <pre><a href="">Emne 2</a> | </pre>
            <pre><a href="">Emne 3</a> | </pre>
            <pre>NK | </pre>
            <pre><a href="">Bonus</a> | </pre>
            <pre><a href="">Oblig</a> | </pre>
            <pre><a href="">Opptak</a></pre>
        </nav>
        <nav>
            <pre>${createLinkHtml("Hovedside", "main")} | </pre>
            <pre>${createLinkHtml("Ukeplan", "plan")} | </pre>
            <pre>${createLinkHtml("Kart", "map")}</pre>
        </nav>
    `;
}

