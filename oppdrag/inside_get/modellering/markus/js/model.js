"use strict";

const model = {
    app: {
        selectedPage: "main",
        pages: {
            articles: {
                selectedID: 1,
            },
            articlePage: {
                selectedArticle: 1,
                subjectIndex: 1,
                selectedPage: 1,
            },
            mainpage: {
                weekId: 1
            },
            mappage: {
                selectedKeyword: 0
            }
        }
    },

    inputs: {
        global: {
            searchTopic: null,
        },

    },

    curriculum: {
        startDate: '2023-08-07',
        weekPlan: [
            { week: 1, content: { mandag: [4, 3], tirsdag: [1], onsdag: [2], torsdag: [7, 8], fredag: [5] } },
            { week: 2, content: { mandag: [], tirsdag: [], onsdag: [], torsdag: [], fredag: [] } },
            { week: 3, content: { mandag: [14, 13], tirsdag: [11], onsdag: [12], torsdag: [17, 18], fredag: [15] } },
        ],
    },

    topics: [
        { id: 1, name: 'Tekning og læring', description: 'Tenking og læring handler om...'},
        { id: 2, name: 'Samarbeid og kommunikasjon', description: 'Samarbeid og kommunikasjon handler om...' },
        { id: 3, name: 'Selvledelse og refleksjon', description: 'Selvledelse og refleksjon handler om...' },
    ],

    keywords: [
        { name: "Psykologisk Trygghet"},
        { name: "Psykologi" },
        { name: "Studieteknikker" },
        { name: "Pomodoro" },
        { name: "Tenkning og Læring" },
        { name: "Attribusjon" },
        { name: "Growth Mindset" },
    ],

    keyword_relations: [
        { idxA: 0, idxB: 3 },
        { idxA: 0, idxB: 4 },
        { idxA: 1, idxB: 2 },
        { idxA: 3, idxB: 5 },
        { idxA: 0, idxB: 5 },
    ],

    articles: [
         { id: 1, name: 'Pomodoro',  atoms: [[1, 3], [2, 4, 5]], keywords: [2], topicId: 1, status: { lastSeenPage: 1, isFinished: false, seenDate: "2023-10-15" } },
         { id: 2, name: 'Læring',    atoms: [[6, 12], [7, 13]], keywords: [], topicId: 2, status: { lastSeenPage: 2, isFinished: true, seenDate: "2023-10-13" }  },
         { id: 3, name: 'Feiling',   atoms: [[11, 12]], keywords: [3], topicId: 1, status: null },
         { id: 4, name: 'Samarbeid', atoms: [[8, 9, 10]], keywords: [], topicId: 3, status: null },
         { id: 5, name: 'Samarbeid', atoms: [[8, 9, 10]], keywords: [], topicId: 3, status: null },
         { id: 6, name: 'Samarbeid', atoms: [[8, 9, 10]], keywords: [], topicId: 3, status: null },
         { id: 7, name: 'Samarbeid', atoms: [[8, 9, 10]], keywords: [], topicId: 3, status: null },
    ],

    atoms: [
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

function showModel(title, data) {
    document.getElementById('model').innerHTML += `
        <hr style="margin-top: 1rem;">
            <div style="font-size: 1.5rem; margin-bottom: -1rem; margin-top: -0.5rem; font-weight: bold;">${title}</div>
            <pre style="font-size: 1rem;">${JSON.stringify(data, null, 4)}
        <hr style="margin-top: -1rem;">
    `;
}