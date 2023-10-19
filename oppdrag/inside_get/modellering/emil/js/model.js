"use strict";

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

    /*
     * Oppbygning av lære-innhold
     *     Et kurs består av flere emner
     *     Et emne består av flere tema
     *     Et tema består av flere artikler
     *     En artikkel består av flere atomer
     *     Et atom er enten et Bilde, en tekst, en kodesnutt, en video eller noe annet..
     *
     * Eksempel:
     *     Tema     -> Tenkning og Læring 1
     *     Artikkel -> Pomodoro
     *     Atom     -> <En video som forklarer pomodoro teknikken>
     */
    ukeplan: [
        { uke: 1, artikler: {mandag: 4, tirsdag: 1, onsdag: 5, /*etc*/} },
        { uke: 2, artikler: {mandag: 5, tirsdag: 2, onsdag: 6, /*etc*/} },
    ],
    hovedtema: [ // flere artikler under et tema, legg til disse i artikler: []
        { id: 1, name: 'Tekning og læring',   },
        { id: 2, name: 'Samarbeid og kommunikasjon' },
        { id: 3, name: 'Selvledelse og refleksjon' },
    ],
    undertema: [
        { hovedtema: 1, undertema: 'Kritisk tenkning', artikler: [1,2], },
        { hovedtema: 1, undertema: 'Focused vs diffused' },
    ],
    nøkkelord: [ // nøkkelord sortering
        { id: 1, navn: "Tema" },
        { id: 1, navn: "Psykologi" },
        { id: 2, navn: "Studieteknikker" },
        { id: 3, navn: "Pomodoro" },
        { id: 4, navn: "Tenkning og Læring" },
        { id: 5, navn: "Attribusjon" },
        { id: 6, navn: "Growth Mindset" },
    ],
    nøkkelord_relasjoner: [
        { idA: 1, idB: 4 },
        { idA: 1, idB: 5 },
        { idA: 2, idB: 3 },
        { idA: 4, idB: 6 },
        { idA: 1, idB: 6 },
    ],
    artikler: [ // flere atomer under en artikkel, legg til disse i atomer: []
         { id: 1, name: 'Pomodoro',  atomer: [1, 3, 2, 4, 5], nøkkelord: [2], temaId: 1 },
         { id: 2, name: 'Læring',    atomer: [6, 12, 7, 13], nøkkelord: [], datoer: ['YYYY-MM-DD', 'YYYY-MM-DD'],  },
         { id: 3, name: 'Feiling',   atomer: [11, 12], nøkkelord: [3] },
         { id: 4, name: 'Samarbeid', atomer: [8, 9, 10], nøkkelord: []  },
    ],
    atomer: [ // hvert atom har innhold som er definert innenfor en spesifikk type (for å generere riktig html), innhold legges i atom: {}
       { id: 1,  type: 'text',       atom: { title: 'Aktiv-lytting', text: 'For løkker er viktig i mange situasjoner. Bla bla..' } },
       { id: 2,  type: 'imageHTTP',  atom: { title: 'Bildetittel',   text: 'dette er et fint motivasjons-bilde',              ref: 'https://getacademy.no/hubfs/GET_RGB_logo-01-2.png' } },
       { id: 3,  type: 'imageAsset', atom: { title: 'Bildetittel',   text: 'dette er et fint hjerne-bilde',              ref: './assets/image/123.png' } },
       { id: 4,  type: 'youtube',    atom: { title: 'Filmtittel',    text: 'Mere om pomodoro som ikke ble nevnt i video', ref: 'youtube.com/dHRQLHaC86c' } },
       { id: 5,  type: 'videoAsset', atom: { title: 'Filmtittel',    text: 'Mere om nevroplastisitet som ikke ble nevnt i video', ref: './assets/video/123.mov' } },
       { id: 6,  type: 'text',       atom: { title: 'Feynman-Teknikken',  text: 'Teknikken går ut på å ofte gå gjennom hva du har lært og prøve å forenkle det.' } },
       { id: 7,  type: 'imageAsset', atom: { title: 'Bildetittel',   text: 'dette er et fint hjerne-bilde',              ref: './assets/image/123.png' } },
       { id: 8,  type: 'text',       atom: { title: "Weiner's Modell",     text: 'Attribusjon brukes i psykologien som beskrivelse av hvordan personer årsaksforklarer handlinger og sosiale hendelser.' } },
       { id: 9, type: 'text',       atom: { title: 'Parafrasering', text: 'Man kan vise at man lytter ved å parafrasere det som ble sagt. Blabla..' } },
       { id: 10, type: 'imageAsset', atom: { title: 'Pause Eskil',   text: 'Eskil må huske å ta pause fra jobbinga ',   ref: './assets/image/pauseEskil.png' } },
       { id: 11, type: 'askChoices', atom: { ask: 'hva er et "growth mindset"?', correct: 1, choices: ['tanken om at evner gror av seg selv', 'tanken om at du kan bli bedre på noe hvis du prøver', 'å tenke at alle er bedre enn deg'] } },
    ],
}

function showModel(title, data) {
    document.getElementById('model').innerHTML += `
        <hr style="margin-top: 1rem;">
            <div style="font-size: 1.5rem; margin-bottom: -1rem; margin-top: -0.5rem; font-weight: bold;">${title}</div>
            <pre style="font-size: 1rem;">${JSON.stringify(data, null, 4)}
        <hr style="margin-top: -1rem;">
    `;
}


/*

Derav behovet for ulike innganger til hvert tema.
    1 via rekkefølgen Eskil følger uke for uke - Artikkel siden
    2 via navn (som over) - Søk
    3 via en eller annen struktur (tenke&lære, samarbeid&kommunikasjon, selvledelse&refleksjon) - Filtrer på artikkel siden
    4 via relaterte tema som i pomodoro har med både focused og diffused mindset og læring - Nøkkelord
    5 et slags type innhold - eksempel: pomodoro som er teknikk - Nøkkelord

    Nøkkelkompetanse:
  # HOVED-TEMA
  Tenkning og læring:
    #  UNDER-TEMA
    - Problemløsning
      # - Artikkel 1
      # - Artikkel 2
      # - .....
    - Læring
    - Kritisk tenkning
    - Pomodoro
    - Focused vs diffused
    - Show and tell
    - Feynman-teknikken
    - Feiling
  Samarbeid og kommunikasjon:
    - Kommunikasjon
    - Aktiv lytting
    - Samarbeid
    - Sosial kompetanse
    - Tuckmans modell rundt teamdynamikk
    - Psykologisk trygghet
    - Googles Project Aristotle
  Selvledelse og refleksjon:
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
