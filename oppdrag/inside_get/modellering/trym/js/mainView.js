function updateViewMain() {
    let html = /*HTML*/`
    <div class="main">
        <div class="horizontal">
            <div class="intro_text">
                <h1>Nøkkelkompetanse</h1>
                <p>
                    I nøkkelkompetanse emnet vil du lære om... 
                    <br> metakognisjon, blablabla sammarbeid, blablabla
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus, 
                    <br> ipsum eget tempor ullamcorper,  dui ante cursus neque, pretium imperdiet 
                    <br> tellus justo vel lorem. Suspendisse blandit, velit ut dapibus accumsan, nibh 
                    <br> sapien blandit nibh, accumsan mollis lorem ex imperdiet diam. Curabitur ac turpis ex. 
                </p>
            </div>

            <div class="week_schedule">
                <h4>Denne uken:</h4>
                <ul>
                    <li>Mandag: <a href="">Samarbeid og kommunikasjon - kommunikasjon</a></li>
                    <li>Tirsdag: <a href="">Tenking og læring - Nevroplastisitet</a></li>
                    <li>Onsdag: <a href="">Tenking og læring - Nevroplastisitet</a></li>
                    <li>Torsdag: <a href="">Tenking og læring - Nevroplastisitet</a></li>
                    <li>Fredag: <a href="">Tenking og læring - Nevroplastisitet</a></li>
                </ul>
            </div>
        </div>
        <hr>

        <div>
            <ul class="list">
                <li class="horizontal">
                    <details>
                        <summary>Sammarbeid og Kommunikasjon</summary>
                        <ul>
                            <li><a href="">Kommunikasjon</a></li>
                            <li><a href="">Aktiv lytting</a></li>
                            <li><a href="">Samarbeid</a></li>
                        </ul>
                        <div class="introduction_box">
                            <p>
                                Her introduserer vi... 
                                <br> Vi vil gå gjennom...
                            </p>
                        </div>
                    </details>
                    <a href="">Fortsett fra: Pomodoro</a>
                </li>

                <li class="horizontal">
                    <details>
                        <summary>Tenkning og læring</summary>
                        <ul>
                            <li><a href="">Problemløsning</a></li>
                            <li><a href="">Pomodoro</a></li>
                            <li><a href="">Kritisk tenkning</a></li>
                        </ul>
                        <div class="introduction_box">
                            <p>
                                Her introduserer vi... 
                                <br> Vi vil gå gjennom...
                            </p>
                        </div>
                    </details>
                    <a href="">Fortsett fra: Aktiv lytting</a>
                </li>

                <li class="horizontal">
                    <details>
                        <summary>Selvledelse og refleksjon</summary>
                        <ul>
                            <li><a href="">Attribusjon</a></li>
                            <li><a href="">Growth mindset</a></li>
                            <li><a href="">Locus of control</a></li>
                        </ul>
                        <div class="introduction_box">
                            <p>
                                Her introduserer vi... 
                                <br> Vi vil gå gjennom...
                            </p>
                        </div>
                    </details>
                    <a href="">Fortsett fra: Attribusjon</a>
                </li>
            </ul>
        </div>
    </div>`;
    return html;
}