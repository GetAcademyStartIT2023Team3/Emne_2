function updateWeeklyScheduleView() {
    return /*HTML*/`
    <div class="container">

        <div class="weekySchedule_content">

            <div class="weeklySchedule_list">
                <ul>
                    <li>
                        <h3>Mandag</h3>
                        <a href="#">
                            <div>Sammarbeid og kommunkasjon</div>
                            <div>Kommunkasjon</div>
                        </a>
                        <a href="#">
                            <div>XXXXX</div>
                            <div>XXXXX</div>
                        </a>
                    </li>
                    <li>
                        <h3>Tirsdag</h3>
                        <a href="#">
                            <div>Tenknin og læring</div>
                            <div>Nevroplastisitet</div>
                        </a>
                        <a href="#">
                            <div>XXXXX</div>
                            <div>XXXXX</div>
                        </a>
                    </li>
                    <li>
                        <h3>Onsdag</h3>
                        <a href="#">
                            <div>Sammarbeid og kommunkasjon</div>
                            <div>Kritisk tenkning</div>
                        </a>
                        <a href="#">
                            <div>XXXXX</div>
                            <div>XXXXX</div>
                        </a>
                    </li>
                    <li>
                        <h3>Torsdag</h3>
                        <a href="#">
                            <div>Sammarbeid og kommunkasjon</div>
                            <div>Kommunkasjon</div>
                        </a>
                    </li>
                    <li>
                        <h3>Fredag</h3>
                        <a href="#">
                            <div>Sammarbeid og kommunkasjon</div>
                            <div>Kommunkasjon</div>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="weeklySchedule_#">
                <div class="weeklySchedule_navbar">
                    <h2>Uke 42 - 2023:</h2>
                    <div>Uke 3 av 20</div>
                    <button>◀◀</button>
                    <button>◀</button>
                    <button>▶</button>
                    <button>▶▶</button>
                </div>

                <div class="weeklySchedule_tip">

                    <div class="bubble">
                        Dagens Tips!<br>
                        Gjør ett eller annet.
                    </div>
                    <div style="position: relative">
                        <div class="tail" style="position: absolute; left: 65px; top: -1px"></div>
                    </div>
                    <img src="https://getacademy.no/hs-fs/hubfs/GetAcademy-NHO_398.jpg?width=749&height=500&name=GetAcademy-NHO_398.jpg" class="eskil">
                </div>
            </div>
        </div>

        <div class="weeklySchedule_sidebar">
            <h2>Nyeste lest</h2>
            <ul>
                <li>
                    <a href="#">
                        <div>Sammarbeid og kommunkasjon</div>
                        <div>Kommunkasjon</div>
                    </a> 
                </li>
                <li>
                    <a href="#">
                        <div>Tenknin og læring</div>
                        <div>Nevroplastisitet</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>Sammarbeid og kommunkasjon</div>
                        <div>Kritisk Tenkning</div>
                    </a>
                </li>            
            </ul>
        </div>
    </div>
    `;
}