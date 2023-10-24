const model = {
    // app-tilstand
    app: {
        selectedPage: "articles",
        pages: {
            articles: {
                selectedID: 1,
            },
            articlePage: {
                selectedArticle: 1,
                subjectIndex: 1,
                selectedPage: 1,
            }
        }
    },

    // app-input
    inputs: {
        global: {
            searchTopic: null,
        },

    },

    // app-data
    læreplaner: [
        {
            startDato: '2023-08-07', // hver uke selv om de er nummerert fra 1, bruker denne for å evaluere kalenderuke
            //hver dag inneholder liste med artikler, første element er første artikkel i rekka
            ukeplan: [
                { uke: 1, innhold: { mandag: [4, 3], tirsdag: [1], onsdag: [2], torsdag: [7, 8], fredag: [5] } }, // uke 1
                { uke: 2, innhold: { mandag: [], tirsdag: [], onsdag: [], torsdag: [], fredag: [] } }, // uke 2 tom ..viser hvordan friuker ser ut
                { uke: 3, innhold: { mandag: [14, 13], tirsdag: [11], onsdag: [12], torsdag: [17, 18], fredag: [15] } }, // uke 3
            ],
        },
        {
            startDato: 'YYYY-MM-DD', 1: {}, 2: {},/*.....*/ }, // tomt her, viser bare at semester er mulig
    ],

    // behov 3. via en eller annen struktur som tema - Filtrer på artikkel siden
    tema: [ // en artikkel kan lagre ET tema
        { id: 1, name: 'Tekning og læring' },
        { id: 2, name: 'Samarbeid og kommunikasjon' },
        { id: 3, name: 'Selvledelse og refleksjon' },
    ],

    // behov 4. via relaterte tema som i pomodoro har med både focused og diffused mindset og læring - Nøkkelord
    nøkkelord: [ // en artikkel kan lagre FLERE nøkkelord
        { id: 1, navn: "Psykologisk Trygghet" },
        { id: 1, navn: "Psykologi" },
        { id: 2, navn: "Studieteknikker" },
        { id: 3, navn: "Pomodoro" },
        { id: 4, navn: "Tenkning og Læring" },
        { id: 5, navn: "Attribusjon" },
        { id: 6, navn: "Growth Mindset" },
    ],

    // behov 5. via relaterte tema som i pomodoro har med både focused og diffused mindset og læring - Nøkkelord
    nøkkelord_relasjoner: [
        { idA: 1, idB: 4 },
        { idA: 1, idB: 5 },
        { idA: 2, idB: 3 },
        { idA: 4, idB: 6 },
        { idA: 1, idB: 6 },
    ],

    // behov 2. via rekkefølgen Eskil følger uke for uke - Artikkel siden
    artikler: [ // flere atomer under en artikkel, legg til disse i atomer: []
         { id: 1, name: 'Pomodoro',  atomer: [1, 3, 2, 4, 5], nøkkelord: [2], temaId: 1 },
         { id: 2, name: 'Læring',    atomer: [6, 12, 7, 13], nøkkelord: [], temaId: 2  },
         { id: 3, name: 'Feiling',   atomer: [11, 12], nøkkelord: [3], temaId: 1 },
         { id: 4, name: 'Samarbeid', atomer: [8, 9, 10], nøkkelord: [], temaId: 3   },
    ],
    atomer: [ // hvert atom har innhold som er definert innenfor en spesifikk type (for å generere riktig html), innhold legges i atom: {}
       { id: 1,  type: 'text',       atom: { title: 'Aktiv-lytting', text: 'For løkker er viktig i mange situasjoner. Bla bla..' } },
       { id: 2,  type: 'imageHTTP',  atom: { title: 'Bildetittel',   text: 'dette er et fint motivasjons-bilde',                  ref: 'https://getacademy.no/hubfs/GET_RGB_logo-01-2.png' } },
       { id: 3,  type: 'imageAsset', atom: { title: 'Bildetittel',   text: 'dette er et fint hjerne-bilde',                       ref: './assets/image/123.png' } },
       { id: 4,  type: 'youtube',    atom: { title: 'Filmtittel',    text: 'Mere om pomodoro som ikke ble nevnt i video',         ref: 'youtube.com/dHRQLHaC86c' } },
       { id: 5,  type: 'videoAsset', atom: { title: 'Filmtittel',    text: 'Mere om nevroplastisitet som ikke ble nevnt i video', ref: './assets/video/123.mov' } },
       { id: 6,  type: 'text',       atom: { title: 'Feynman-Teknikken',  text: 'Teknikken går ut på å ofte gå gjennom hva du har lært og prøve å forenkle det.' } },
       { id: 7,  type: 'imageAsset', atom: { title: 'Bildetittel',   text: 'dette er et fint hjerne-bilde',                       ref: './assets/image/123.png' } },
       { id: 8,  type: 'text',       atom: { title: "Weiner's Modell",     text: 'Attribusjon brukes i psykologien som beskrivelse av hvordan personer årsaksforklarer handlinger og sosiale hendelser.' } },
       { id: 9,  type: 'text',       atom: { title: 'Parafrasering', text: 'Man kan vise at man lytter ved å parafrasere det som ble sagt. Blabla..' } },
       { id: 10, type: 'imageAsset', atom: { title: 'Pause Eskil',   text: 'Eskil må huske å ta pause fra jobbinga ',             ref: './assets/image/pauseEskil.png' } },
       { id: 11, type: 'askChoices', atom: { ask: 'hva er et "growth mindset"?', correct: 1, choices: ['tanken om at evner gror av seg selv', 'tanken om at du kan bli bedre på noe hvis du prøver', 'å tenke at alle er bedre enn deg'] } },
    ],
}