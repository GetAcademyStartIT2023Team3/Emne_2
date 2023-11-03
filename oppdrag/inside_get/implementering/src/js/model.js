"use strict";

const model = {
    app: {
        selectedPage: "main",
        pages: {
            articlePage: {
                articleId:   1,
                articlePageNumber: 1,
            },
            mainPage: {
                weekId: 1
            },
            graphPage: {
                selectedKeyword: 0
            }
        }
    },

    inputs: {
        global: {
            searchTopic: null,
        },

    },

    fakeUser: {
        seenArticles: [
            { articleId: 1, lastSeenPage: 1, isFinished: false, seenDate: "2023-10-15" },
            { articleId: 2, lastSeenPage: 2, isFinished: false, seenDate: "2023-9-16" },
            { articleId: 4, lastSeenPage: 2, isFinished: false, seenDate: "2023-8-16" },
            { articleId: 6, lastSeenPage: 1, isFinished: false, seenDate: "2023-11-03" },
        ],
    },

    curriculum: {
        startDate: '2023-08-07',
        weekPlan: [
            { week: 1, monday: [4, 3], tuesday: [2], wednesday: [2], thursday: [7, 3], friday: [4] },
            { week: 2, monday: [],     tuesday: [],  wednesday: [],  thursday: [],     friday: []  },
            { week: 3, monday: [5, 1], tuesday: [7], wednesday: [6], thursday: [4, 5], friday: [6] },
        ],
    },

    topics: [
        { id: 1, name: 'Tekning og læring',          description: 'Tenking og læring handler om...'},
        { id: 2, name: 'Samarbeid og kommunikasjon', description: 'Samarbeid og kommunikasjon handler om...' },
        { id: 3, name: 'Selvledelse og refleksjon',  description: 'Selvledelse og refleksjon handler om...' },
    ],

    keywords: [
        { name: "Psykologisk Trygghet" },
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
         { id: 1, name: 'Pomodoro',  topicId: 1, atoms: [[3, 1], [2, 4, 5]], keywords: [0, 2, 3, 4],  },
         { id: 2, name: 'Læring',    topicId: 2, atoms: [[6, 12], [7, 13]],  keywords: [1, 2, 3],     },
         { id: 3, name: 'Feiling',   topicId: 1, atoms: [[11, 12]],          keywords: [0, 3],        },
         { id: 4, name: 'Samarbeid', topicId: 3, atoms: [[8, 9, 10]],        keywords: [0, 10, 11]    },
         { id: 5, name: 'Test',      topicId: 3, atoms: [[8, 9, 10]],        keywords: [0, 12, 13]    },
         { id: 6, name: 'ABCDEFG',   topicId: 3, atoms: [[8, 9, 10]],        keywords: [0, 12]        },
         { id: 7, name: 'XXXXXXX',   topicId: 3, atoms: [[8, 9, 10]],        keywords: [0, 3, 14, 15] },
    ],

    atoms: [
       { id: 1,  type: 'text',        title: 'Aktiv-lytting',     text: 'For løkker er viktig i mange situasjoner. Bla bla..' },
       { id: 2,  type: 'imageHTTP',   title: 'Bildetittel',       text: 'dette er et fint motivasjons-bilde',                  ref: 'https://getacademy.no/hubfs/GET_RGB_logo-01-2.png' },
       { id: 3,  type: 'imageAsset',  title: 'Bildetittel',       text: 'dette er et fint hjerne-bilde',                       ref: './assets/image/123.png' },
       { id: 4,  type: 'youtube',     title: 'Filmtittel',        text: 'Mere om pomodoro som ikke ble nevnt i video',         ref: 'youtube.com/dHRQLHaC86c' },
       { id: 5,  type: 'videoAsset',  title: 'Filmtittel',        text: 'Mere om nevroplastisitet som ikke ble nevnt i video', ref: './assets/video/123.mov' },
       { id: 6,  type: 'text',        title: 'Feynman-Teknikken', text: 'Teknikken går ut på å ofte gå gjennom hva du har lært og prøve å forenkle det.' },
       { id: 7,  type: 'imageAsset',  title: 'Bildetittel',       text: 'dette er et fint hjerne-bilde',                       ref: './assets/image/123.png' },
       { id: 8,  type: 'text',        title: "Weiner's Modell",   text: 'Attribusjon brukes i psykologien som beskrivelse av hvordan personer årsaksforklarer handlinger og sosiale hendelser.' },
       { id: 9,  type: 'text',        title: 'Parafrasering',     text: 'Man kan vise at man lytter ved å parafrasere det som ble sagt. Blabla..' },
       { id: 10, type: 'imageAsset',  title: 'Pause Eskil',       text: 'Eskil må huske å ta pause fra jobbinga ',             ref: './assets/image/pauseEskil.png' },
       { id: 11, type: 'askChoices',  ask: 'hva er et "growth mindset"?', correct: 1, choices: ['tanken om at evner gror av seg selv', 'tanken om at du kan bli bedre på noe hvis du prøver', 'å tenke at alle er bedre enn deg'] },
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
