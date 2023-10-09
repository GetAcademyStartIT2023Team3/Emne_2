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
        articles: {
            selectedPage: "articles",
            selectedArticleId: 1,
        }
    },
    inputs: {
        //searchBar? På alle sider? Eget objekt i inputs? I app siden det skal være på alle sider?
        searchBar: {
            searchText: null,
        },
        learningPathPage: {
            filterField: 'alle emner',
            sortField: 'sist lest',
        },
        articlesPage: {
            layout: 'list',
            notes: {
                text: 'abc',
            },
        },
        notesPage: {
            sort: {
               field: 'Nøkkelkompetanse' 
            },
            notes: {
                text: 'abc'
            },
        },
        historyPage: {
            // ??
        },
        notificationPage: {
            list: [
                {
                    id: 1,
                    isChecked: false,
                },
                {
                    id: 2,
                    isChecked: false,
                }
            ]
        },
        graphvizPage: {
            sortField: 'javascript',
            searchText: '<search string>',
            weekSlider: 3
        },
    },
    
    // app-data
    users: [
        { id: 1, name: 'bob', history: [ { articleID: 1 }, { articleID: 2 }] },
        { id: 2, name: 'alice', history: [ { articleID: 4 }, { articleID: 3 }] },
    ],
    subjects: [
        { id: 1, name:"Javascript"},
        { id: 2, name:"Nøkkelkompetanse"},
    ],
    paths: [
        {title: "Intro til Javascript", articles: [1, 4, 7]},
        {title: "Intro til C#", articles: [20, 23, 21]},
    ],
    articles: [
         {id: 1, title: "Lær javascript", subjectID: 1, articleAtoms: [1,3,2,4], presentAtoms: [[1],[3,4]] },
         {id: 2, title: "Aktiv lytting", subjectID: 2, articleAtoms: [5,2,2,7,2], presentAtoms: [[5],[7, 2]]},
    ],

    articleAtoms: [
       { id: 1, relatedSubjects: [2],    makeHtmlFunction: convertMarkdown, content: "# Dette er en artikkel.\n Her kommer alt innholdet nedover."},
       { id: 2, relatedSubjects: [1],    makeHtmlFunction: convertImage,    content: { title: 'et bilde!', url: "https://getacademy.no/hubfs/GET_RGB_logo-01-2.png", label: 'dette er et fint bilde' } },
       { id: 3, relatedSubjects: [1, 2], makeHtmlFunction: convertYoutube,  content: "dHRQLHaC86c"},
       { id: 4, relatedSubjects: [1],    makeHtmlFunction: convertMarkdown, content: "Denne videoen forklarer mye"},
       { id: 5, relatedSubjects: [1, 2], makeHtmlFunction: convertMarkdown, content: "Blablabla"},
       { id: 6, relatedSubjects: [1],    makeHtmlFunction: convertMarkdown, content: "Dette er en presentasjon. Her er det fordelt på flere sider."},
       { id: 7, relatedSubjects: [2],    makeHtmlFunction: convertMarkdown, content: "..."},
       { id: 8, relatedSubjects: [1],    makeHtmlFunction: convertMarkdown, content: "..."},
       { id: 9, relatedSubjects: [2],    makeHtmlFunction: convertMarkdown, content: "..."},

    ],
}


// læringssti -> artikler -> artikkel-atomer

// lærsingssti -> control flow
    // artikkel 1 -> tekst om for løkker, tekst om switch-case (artikkel-atomer -> tittel 1. tekst 1, tekst 2)
    // artikkel 2 -> kode-eksempler
    // artikkel 3 -> video

    // presentasjon 1 -> tekst om for løkker
    // presentasjon 2 -> video
