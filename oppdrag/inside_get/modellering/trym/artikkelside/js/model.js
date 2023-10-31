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
        { id: 1, name: 'Tenkning og læring', description: 'Tenking og læring handler om...'},
        { id: 2, name: 'Samarbeid og kommunikasjon', description: 'Samarbeid og kommunikasjon handler om...' },
        { id: 3, name: 'Selvledelse og refleksjon', description: 'Selvledelse og refleksjon handler om...' },
    ],

    keywords: [
        { index: 1, navn: "Læring" },
        { index: 2, navn: "Teknikk" },
        { index: 3, navn: "Studieteknikk" },
        { index: 4, navn: "Psykologi" },
        { index: 5, navn: "asdada" },
        { index: 6, navn: "Attribusjon" },
        { index: 7, navn: "Growth Mindset" },
    ],
    

    keyword_relations: [
        { idA: 1, idB: 2 },
        { idA: 1, idB: 3 },
        { idA: 1, idB: 4 },
        { idA: 4, idB: 6 },
        { idA: 3, idB: 6 },
    ],

    articles: [
         { id: 1, name: 'Problemløsning',  atoms: [[1, 3], [2, 4, 5]], keywords: [], topicId: 1, status: { lastSeenPage: 1, isFinished: false, seenDate: "2023-10-15" } },
         { id: 2, name: 'Læring',    atoms: [[6, 12], [7, 13]], keywords: [1], topicId: 1, status: { lastSeenPage: 2, isFinished: true, seenDate: "2023-10-13" }  },
         { id: 3, name: 'Kritisk tenkning',   atoms: [[11, 12]], keywords: [3], topicId: 1, status: null },
         { id: 4, name: 'Pomodoro', atoms: [[1, 2, 3], [4, 5, 6]], keywords: [1, 2, 3], topicId: 1, status: null },
         { id: 5, name: 'Focused vs diffused', atoms: [[8, 9, 10]], keywords: [1], topicId: 1, status: null },
         { id: 6, name: 'Show and tell', atoms: [[8, 9, 10]], keywords: [], topicId: 1, status: null },
         { id: 7, name: 'Feynman-teknikken', atoms: [[8, 9, 10]], keywords: [2], topicId: 1, status: null },
         { id: 8, name: 'Feiling', atoms: [[8, 9, 10]], keywords: [], topicId: 1, status: null },
    ],

    atoms: [
        //POMODORO ATOMS
       { id: 1,  type: 'text',       atom: { title: 'Pomodoro',        text: 'Pomodoro-teknikken' } },
       { id: 2,  type: 'imageHTTP',  atom: { title: 'Pomodoro',        text: 'Pomodoro-bilde', ref: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*zr9_O1A3yuUuKPcaKMXg9w.png' } },
       { id: 3,  type: 'text',       atom: { title: 'Pomodoro',        text: 'Hentet fra', ref: 'https://ahad-ullah161.medium.com/challenge-yourself-through-pomodoro-technique-2eed2a1b2b0e' } },
       { id: 4,  type: 'text',       atom: { title: 'Pomodoro',        text: 'Vi anbefaler kun 15 minutter i starten!' } },
       { id: 5,  type: 'text',       atom: { title: 'Pomodoro',        text: 'Pomodoro-teknikken henger sammen med focused and diffused mind mode, se annen artikkel.', ref: null } },
       { id: 6,  type: 'youtube',    atom: { title: 'How To Improve Your Focus (The Pomodoro Technique Explained)',  ref: 'https://www.youtube.com/watch?v=9uxuYdnWFoI' } },
        //
       { id: 7,  type: 'imageAsset', atom: { title: 'Bildetittel',     text: 'dette er et fint hjerne-bilde', ref: './assets/image/123.png' } },
       { id: 8,  type: 'text',       atom: { title: "Weiner's Modell", text: 'Attribusjon brukes i psykologien som beskrivelse av hvordan personer årsaksforklarer handlinger og sosiale hendelser.' } },
       { id: 9,  type: 'text',       atom: { title: 'Parafrasering',   text: 'Man kan vise at man lytter ved å parafrasere det som ble sagt. Blabla..' } },
       { id: 10, type: 'imageAsset', atom: { title: 'Pause Eskil',     text: 'Eskil må huske å ta pause fra jobbinga ', ref: './assets/image/pauseEskil.png' } },
       { id: 11, type: 'askChoices', atom: { ask: 'hva er et "growth mindset"?', correct: 1, choices: ['tanken om at evner gror av seg selv', 'tanken om at du kan bli bedre på noe hvis du prøver', 'å tenke at alle er bedre enn deg'] } },
    ],
}