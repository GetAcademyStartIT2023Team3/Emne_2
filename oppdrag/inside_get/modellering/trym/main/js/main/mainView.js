function updateViewMain() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="container-main">
    ${updateMainHeaderView()}
    </div>`;
}

function updateMainHeaderView() {
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

/* <div class="container-main">
${updateHeaderView1()}
${updateViewMain1()}
${updateSidebarView()}
</div> */

// function updateHeaderView1() {
//     let html = /*HTML*/`
//     <div class="container-1">
//             <div class="header-1">
//                 <img src="img/logo.png" alt="GET Academy logo" width="10%">
//                 <div>
//                     <details>
//                         <summary>
//                             Ola.Nordmann@getacademy.no
//                         </summary>
//                         <a>Logg ut</a>
//                     </details>
//                     <hr>
//                 </div>
//             </div>

//             <div class="header-2">
//                 <ul class="navbar-1">
//                     <li><a href="">Student</a></li>
//                     <li><a href="">Emne 1</a></li>
//                     <li><a href="">Emne 2</a></li>
//                     <li><a href="">Emne 3</a></li>
//                     <li><a href="">NK</a></li>
//                     <li><a href="">Bonus</a></li>
//                     <li><a href="">Oblig</a></li>
//                     <li><a href="">Opptak</a></li>
//                 </ul>
//                 <div class="navbar-2">
//                     <div class="nav-item-1">
//                         <a href="">Tilbake til Ukeplan</a>
//                     </div>
//                     <div class="nav-item-2">
//                         <div class="nav-buttons">
//                             <button>🠈</button>
//                             <button>🠊</button>
//                         </div>
//                         <div class="searchbar">
//                             <input type="text" placeholder="Search..">
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;
//     return html;
// }

// // function updateNavbarView() {
// //     let html = /*HTML*/`
// //     <div class="second_header">
// //         <ul class="main_navbar">
// //             <li><a href="">Student</a></li>
// //             <li><a href="">Emne 1</a></li>
// //             <li><a href="">Emne 2</a></li>
// //             <li><a href="">Emne 3</a></li>
// //             <li><a href="">NK</a></li>
// //             <li><a href="">Bonus</a></li>
// //             <li><a href="">Oblig</a></li>
// //             <li><a href="">Opptak</a></li>
// //         </ul>
// //         <ul class="second_navbar">
// //             <li><a href="">Hovedside</a></li>
// //             <li><a href="">Ukeplan</a></li>
// //             <li><a href="">Kart</a></li>
// //         </ul>
// //         <div>
// //             <button>Tilbake</button>
// //             <button>Frem</button>
// //             <input type="text" placeholder="Search..">
// //         </div>
// //     </div>
// //     `;
// //     return html;
// // }

// function updateViewMain1() {
//     let html = /*HTML*/`
//     <div class="main">
//         <div class="horizontal">
//             <div class="intro_text">
//                 <h1>Nøkkelkompetanse</h1>
//                 <p>
//                     I nøkkelkompetanse emnet vil du lære om... 
//                     <br> metakognisjon, blablabla sammarbeid, blablabla
//                 </p>
//                 <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus, 
//                     <br> ipsum eget tempor ullamcorper,  dui ante cursus neque, pretium imperdiet 
//                     <br> tellus justo vel lorem. Suspendisse blandit, velit ut dapibus accumsan, nibh 
//                     <br> sapien blandit nibh, accumsan mollis lorem ex imperdiet diam. Curabitur ac turpis ex. 
//                 </p>
//             </div>

//             <div class="week_schedule">
//                 <h4>Denne uken:</h4>
//                 <ul>
//                     <li>Mandag: <a href="">Samarbeid og kommunikasjon - kommunikasjon</a></li>
//                     <li>Tirsdag: <a href="">Tenking og læring - Nevroplastisitet</a></li>
//                     <li>Onsdag: <a href="">Tenking og læring - Nevroplastisitet</a></li>
//                     <li>Torsdag: <a href="">Tenking og læring - Nevroplastisitet</a></li>
//                     <li>Fredag: <a href="">Tenking og læring - Nevroplastisitet</a></li>
//                 </ul>
//             </div>
//         </div>
//         <hr>

//         <div>
//             <ul class="list">
//                 <li class="horizontal">
//                     <details>
//                         <summary>Sammarbeid og Kommunikasjon</summary>
//                         <ul>
//                             <li><a href="">Kommunikasjon</a></li>
//                             <li><a href="">Aktiv lytting</a></li>
//                             <li><a href="">Samarbeid</a></li>
//                         </ul>
//                         <div class="introduction_box">
//                             <p>
//                                 Her introduserer vi... 
//                                 <br> Vi vil gå gjennom...
//                             </p>
//                         </div>
//                     </details>
//                     <a href="">Fortsett fra: Pomodoro</a>
//                 </li>

//                 <li class="horizontal">
//                     <details>
//                         <summary>Tenkning og læring</summary>
//                         <ul>
//                             <li><a href="">Problemløsning</a></li>
//                             <li><a href="">Pomodoro</a></li>
//                             <li><a href="">Kritisk tenkning</a></li>
//                         </ul>
//                         <div class="introduction_box">
//                             <p>
//                                 Her introduserer vi... 
//                                 <br> Vi vil gå gjennom...
//                             </p>
//                         </div>
//                     </details>
//                     <a href="">Fortsett fra: Aktiv lytting</a>
//                 </li>

//                 <li class="horizontal">
//                     <details>
//                         <summary>Selvledelse og refleksjon</summary>
//                         <ul>
//                             <li><a href="">Attribusjon</a></li>
//                             <li><a href="">Growth mindset</a></li>
//                             <li><a href="">Locus of control</a></li>
//                         </ul>
//                         <div class="introduction_box">
//                             <p>
//                                 Her introduserer vi... 
//                                 <br> Vi vil gå gjennom...
//                             </p>
//                         </div>
//                     </details>
//                     <a href="">Fortsett fra: Attribusjon</a>
//                 </li>
//             </ul>
//         </div>
//     </div>`;
//     return html;
// }