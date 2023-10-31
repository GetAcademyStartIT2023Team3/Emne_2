// app-data
function getDataModel() {
    let data = {
        /*
            Her skal jeg prøve å modellere data på en måte som gjør artikler søkbare, letbare og sorterbare.
            Med andre ord, slik at en bruker kan gå inn på artikler ved å bruke ulike "innganger".

            Terje ..behovet for ulike innganger til hvert tema.
                behov 1. via rekkefølgen Eskil følger uke for uke
                behov 2. via navn (som over) - Søk
                behov 3. via en eller annen tema struktur - (tenke & lære, samarbeid & kommunikasjon, selvledelse & refleksjon)
                behov 4. via relaterte tema som i pomodoro har med både focused og diffused mindset og læring - Nøkkelord
                behov 5. et slags type innhold - eksempel: pomodoro som er teknikk - Nøkkelord
        */

        // behov 1. via rekkefølgen Eskil følger uke for uke
        curriculum: [
            {
                startDate: '2023-08-07', // hver uke selv om de er nummerert fra 1, bruker denne for å evaluere kalenderuke
                //hver dag inneholder liste med artikler, første element er første artikkel i rekka
                weekly: [
                    // content: { 1: [4, 3] = uke 1 inneholder artikkel 4 og 3
                    { week: 1, content: { 1: [4, 3],   2: [1],  3: [2],  4: [7, 8],   5: [5]  } }, // uke 1
                    { week: 2, content: { 1: [],       2: [],   3: [],   4: [],       5: []   } }, // uke 2 tom ..viser hvordan friuker ser ut
                    { week: 3, content: { 1: [14, 13], 2: [11], 3: [12], 4: [17, 18], 5: [15] } }, // uke 3
                ],
            },
            {
                startDate: 'YYYY-MM-DD', 1: {}, 2: {},/*.....*/ }, // tomt her, viser bare at semester er mulig
        ],

        // behov 3. via en eller annen struktur som tema - Filtrer på artikkel siden
        topics: [ // hver artikkel er under ET tema
            { id: 1, name: 'Tekning og læring' },
            { id: 2, name: 'Samarbeid og kommunikasjon' },
            { id: 3, name: 'Selvledelse og refleksjon' },
        ],

        // behov 4. via relaterte tema som i pomodoro har med både focused og diffused mindset og læring - Nøkkelord
        keywords: [ // hver artikkel har FLERE nøkkelord
            { id: 1, name: "Psykologisk Trygghet" },
            { id: 1, name: "Psykologi" },
            { id: 2, name: "Studieteknikker" },
            { id: 3, name: "Pomodoro" },
            { id: 4, name: "Tenkning og Læring" },
            { id: 5, name: "Attribusjon" },
            { id: 6, name: "Growth Mindset" },
        ],

        // behov 5. via relaterte tema, vise artikler ved å koble sammen nøkkelord for spesifikk artikkel
        keywordRelation: [
            [ 1, 4 ], // nøkkelord 1 og 4 kobles sammen
            [ 1, 5 ], // nøkkelord 1 og 5 kobles sammen
            [ 2, 3 ], // nøkkelord 2 og 3 kobles sammen
            [ 4, 6 ],
            [ 1, 6 ],
        ],

        // behov 2. via rekkefølgen Eskil følger uke for uke - Artikkel siden
        articles: [ // flere atomer under en artikkel, legg til disse i atoms: []
            { id: 1, name: 'Pomodoro',  atoms: [1, 3, 2, 4, 5], topicID: 1, keyword: [2] },
            { id: 2, name: 'Læring',    atoms: [6, 12, 7, 13],  topicID: 2, keyword: []  },
            { id: 3, name: 'Feiling',   atoms: [11, 12],        topicID: 1, keyword: [3] },
            { id: 4, name: 'Samarbeid', atoms: [8, 9, 10],      topicID: 3, keyword: []  },
        ],
        atoms: [ // hvert atom har ulike typer data (text, image etc..), innhold legges i atom: {}
            { id: 1,  type: 'text',       atom: { title: 'Aktiv-lytting',     text: 'For løkker er viktig i mange situasjoner. Bla bla..' } },
            { id: 2,  type: 'imageHTTP',  atom: { title: '<Bildetittel>',     text: 'dette er et fint motivasjons-bilde',                  ref: 'https://getacademy.no/hubfs/GET_RGB_logo-01-2.png' } },
            { id: 3,  type: 'imageAsset', atom: { title: '<Bildetittel>',     text: 'dette er et fint hjerne-bilde',                       ref: './assets/image/123.png' } },
            { id: 4,  type: 'youtube',    atom: { title: '<Filmtittel>',      text: 'Mere om pomodoro som ikke ble nevnt i video',         ref: 'youtube.com/dHRQLHaC86c' } },
            { id: 5,  type: 'videoAsset', atom: { title: '<Filmtittel>',      text: 'Mere om nevroplastisitet som ikke ble nevnt i video', ref: './assets/video/123.mov' } },
            { id: 6,  type: 'text',       atom: { title: 'Feynman-Teknikken', text: 'Teknikken går ut på å ofte gå gjennom hva du har lært og prøve å forenkle det.' } },
            { id: 7,  type: 'imageAsset', atom: { title: '<Bildetittel>',     text: 'dette er et fint hjerne-bilde',                       ref: './assets/image/123.png' } },
            { id: 8,  type: 'text',       atom: { title: "Weiner's Modell",   text: 'Attribusjon brukes i psykologien som beskrivelse av hvordan personer årsaksforklarer handlinger og sosiale hendelser.' } },
            { id: 9,  type: 'text',       atom: { title: 'Parafrasering',     text: 'Man kan vise at man lytter ved å parafrasere det som ble sagt. Blabla..' } },
            { id: 10, type: 'imageAsset', atom: { title: 'Pause Eskil',       text: 'Eskil må huske å ta pause fra jobbinga ',             ref: './assets/image/pauseEskil.png' } },
            { id: 11, type: 'askChoices', atom: { ask: 'hva er et "growth mindset"?', correct: 1, choices: ['tanken om at evner gror av seg selv', 'tanken om at du kan bli bedre på noe hvis du prøver', 'å tenke at alle er bedre enn deg'] } },
        ],
    };
    return data;
}

/*
  Nøkkelkompetanse oppbygning:
  # TEMA - Tenkning og læring:
    # ARTIKLER
        - Problemløsning
        - Læring
        - Kritisk tenkning
        - Pomodoro
        - Focused vs diffused learning
        - Show and tell
        - Feynman-teknikken
        - Feiling
  # TEMA - Samarbeid og kommunikasjon:
    # ARTIKLER
        - Kommunikasjon
        - Aktiv lytting
        - Samarbeid
        - Sosial kompetanse
        - Tuckmans modell rundt teamdynamikk
        - Psykologisk trygghet
        - Googles Project Aristotle
  # TEMA - Selvledelse og refleksjon:
    # ARTIKLER
        - Attribusjon
        - Daglig logg
        - Egenmotivasjon og prokrastinering
        - Emosjonell kompetanse
        - Etisk refleksjon
        - GRIT
        - Gode vaner
        - Growth mindset
        - Learned helplessness
        - Locus of control
        - Mestringstro
        - Metakognisjon
        - Personlighetspsykologi
        - Signaturstyrker
        - 7 Habits
        - Isfjellmetafor
        - Nevroplastisitet
        - The Art of Failing Well
*/
