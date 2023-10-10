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

    emner: [
        { id: 1, name: "Javascript", tema: [1, 3] },
        { id: 2, name: "Nøkkelkompetanse", tema: [2] },
        { id: 3, name: "C_Sharp", tema: ['N', 'N'] },
    ],

    tema: [
        { id: 1, tittel: 'løkker', artikler: [1, 2] , uke: 1, },
        { id: 2, tittel: 'psykologisk trygghet', artikler: [1, 2] , uke: 1, },
        { id: 3, tittel: "blablabla", artikler: [3,4], uke: 2, },
        { id: 4, tittel: "blablabla 2", artikler: [5,6], uke: 3, }
    ],

    artikler: [
         { id: 1, tittel: "Lær javascript", emneID: 1, artikkelAtomer: [1,3,2,4], presentasjontAtom: [[1],[3,4]] },
         { id: 2, tittel: "Aktiv lytting", emneID: 2, artikkelAtomer: [5,2,2,7,2], presentAtoms: [[5],[7, 2]] },
    ],

    atomer: [
       { id: 1, innhold: "# Dette er en artikkel.\n Her kommer alt innholdet nedover."},
       { id: 2, innhold: { tittel: 'et bilde!', url: "https://getacademy.no/hubfs/GET_RGB_logo-01-2.png", label: 'dette er et fint bilde' } },
       { id: 3, innhold: "dHRQLHaC86c"},
       { id: 4, innhold: "Denne videoen forklarer mye"},
       { id: 5, innhold: "Blablabla"},
       { id: 6, innhold: "Dette er en presentasjon. Her er det fordelt på flere sider."},

    ],
}

function showModel() {
    document.getElementById('model').innerHTML = `
        <hr style="margin-top: 1rem;">
            <div style="font-size: 1.5rem; margin-bottom: -1rem; margin-top: -0.5rem; font-weight: bold;">Model</div>
            <pre style="font-size: 1rem;">${JSON.stringify(model, null, 4)}
        <hr style="margin-top: -1rem;">
    `;
}

// LÆRESTI -> EMNER -> TEMAER -> ARTIKLER -> ATOMER
