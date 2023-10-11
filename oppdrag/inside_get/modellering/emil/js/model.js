"use strict";

const model = {
    // app-tilstand
    app: {
        selectedPage: "articles",
        darkMode: false,
        userID: 1,
        pages: {
            articles: {
                selectedID: 1,
            },
            articlePage: {
                selectedArticle: 1,
                isPresenting: false,
                subjectIndex: 1,
                selectedPage: 1,
            }
        }
    },

    // app-input
    inputs: {
        searchTopic: null,
    },

    // app-data
    users: [
        { id: 1, name: 'bob' },
        { id: 2, name: 'alice' },
    ],

    /*
     * Oppbygning av lære-innhold
     *     Et kurs består av flere emner
     *     Et emne består av flere tema
     *     Et tema består av flere artikler
     *     En artikkel består av flere atomer
     *     Et atom er enten et Bilde, en tekst, en kodesnutt, en video eller noe annet..
     *
     * Eksempel:
     *     Kurs     -> Start IT Høst 2023
     *     Emne     -> Grunnleggende programmering i JavaScript
     *     Tema     -> JavaScript funksjoner
     *     Artikkel -> Funksjoner med returverdi
     *     Atom     -> <En kodesnutt som viser en funksjon med returverdi>
     */
    kurs: [ // ukeplanen er selve lærestien i et kurs og består av flere emner med ulike tema
        {
            id: 1,
            name: 'Get Start IT Høst 2023',
            ukeplan: [ // emne-id og tema-id legges til for en bestemt uke
                { uke: 1, emne: 1, tema: 4 },
                { uke: 1, emne: 4, tema: 2 },
                { uke: 2, emne: 1, tema: 3 },
                { uke: 3, emne: 1, tema: 1 },
            ],
        },
        {
            id: 2,
            name: 'Get Start IT Vinter 2024',
            ukeplan: [],
        },
    ],
    emner: [  // flere tema under et emne, legg til disse i tema: []
        { id: 1, name: 'Programmering i Javascript',    tema: [1, 3, 4] },
        { id: 2, name: 'Utviklinsprosesser',            tema: [] },
        { id: 3, name: 'Objektorientert Programmering', tema: [] },
        { id: 4, name: 'Nøkkelkompetanse',              tema: [2] },
    ],
    tema: [ // flere artikler under et tema, legg til disse i artikler: []
        { id: 1, name: 'Javascript Løkker',       artikler: [1, 2] },
        { id: 2, name: 'psykologisk trygghet',    artikler: [3] },
        { id: 3, name: 'Javascript Funksjoner',   artikler: [] },
        { id: 4, name: 'Javascript Introduksjon', artikler: [4] },
    ],
    artikler: [ // flere atomer under en artikkel, legg til disse i atomer: []
         { id: 1, name: 'for løkker',    atomer: [1, 3, 2, 4, 5] },
         { id: 2, name: 'while løkker',  atomer: [6, 12, 7, 13] },
         { id: 3, name: 'Aktiv lytting', atomer: [11, 12] },
         { id: 4, name: 'Variabler',     atomer: [8, 9, 10] },
    ],
    atomer: [ // hvert atom har innhold som er definert innenfor en spesifikk type (for å generere riktig html), innhold legges i atom: {}
       { id: 1,  type: 'text',       atom: { title: 'For-løkker',    text: 'For løkker er viktig i mange situasjoner. Bla bla..' } },
       { id: 2,  type: 'imageHTTP',  atom: { title: 'Bildetittel',   text: 'dette er et fint løkke-bilde',              ref: 'https://getacademy.no/hubfs/GET_RGB_logo-01-2.png' } },
       { id: 3,  type: 'imageAsset', atom: { title: 'Bildetittel',   text: 'dette er et fint løkke-bilde',              ref: './assets/image/123.png' } },
       { id: 4,  type: 'youtube',    atom: { title: 'Filmtittel',    text: 'Mere om løkker som ikke ble nevnt i video', ref: 'youtube.com/dHRQLHaC86c' } },
       { id: 5,  type: 'videoAsset', atom: { title: 'Filmtittel',    text: 'Mere om løkker som ikke ble nevnt i video', ref: './assets/video/123.mov' } },
       { id: 6,  type: 'text',       atom: { title: 'While-løkker',  text: 'While-løkker kan vare evig, vær på vakt.' } },
       { id: 7,  type: 'imageAsset', atom: { title: 'Bildetittel',   text: 'dette er et fint løkke-bilde',              ref: './assets/image/123.png' } },
       { id: 8,  type: 'text',       atom: { title: 'Tallverdi',     text: 'Tall i javascript er gøy' } },
       { id: 9,  type: 'text',       atom: { title: 'Strengverdi',   text: 'Tekst er viktig i Javascript' } },
       { id: 10, type: 'code',       atom: { title: 'Kodetittel',    text: 'let var = "Hei";.....' } },
       { id: 11, type: 'text',       atom: { title: 'Parafrasering', text: 'Man kan vise at man lytter ved å parafrasere det som ble sagt. Blabla..' } },
       { id: 12, type: 'imageAsset', atom: { title: 'Pause Terje',   text: 'Terje må huske å ta pause fra jobbinga ',   ref: './assets/image/pauseTerje.png' } },
       { id: 13, type: 'askChoices', atom: { ask: 'hva er en while-loop?', correct: 1, choices: ['et knutepunkt..', 'kode som itererer til noe er "True"..', 'pause i koden..'] } },
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
