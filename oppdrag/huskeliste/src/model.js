const model = {
    app: {
        currentPage: 'home', // we have 5 main pages: home, calendar, showTasks, addTask, settings
        loggedInAs: 'John',
        darkMode: true,
        pushNotifications: false,
    },

    input: {
        home: {
            selectedTaskIndex: 4, // valgt task med id 4 - vise detaljser
            //isTaskComplete: true, // sette oppgave som utført
        },
        calendar: {
            selectedDateIndex: 0,
        },
        showTasks: {
            checkTask: 4, // setter task id 4 som complete
            editTask: 4, // rediger task id 4 -> tar deg til egen side for dette
            postponeTask: 4, // utsett task id 4
        },
        addTask: {
            name: "Vask kjøkken",
            description: "Hent bøtte og mopp etc..",
            dateStart: "2022-09-1",
            dateEnd: "2022-09-10",
            estimatedMinutes: 60,
            estimatedExhaustion: 10, //0-10 skala?
            estimatedBoredom: -100,
            priority: 10, //0-10 skala?
            subTasks: {},
        },
        settings: {},
    },

    //data
    tasks: [
        {
            name: "Rydd huset",
            delayedDays: 0,
            isCompleted: false,
            description: "Veldig støvete", //optional
            dateStart: "2022-09-1",
            dateEnd: "2022-09-10",
            estimatedMinutes: 60, //optional, if there are subtasks, equal to sum of subtasks.estimatedMinutes
            estimatedBoredom: -100,
            priority: 10,
            subTasks: [
                {
                    name: "Støvsug rommet",
                    estimatedMinutes: 15,
                    isCompleted: false,
                },
            ],
        },
        {
            name: "Ler javascript",
            delayedDays: 0,
            isCompleted: true,
            description: "Veldig lett",
            dateStart: "2022-09-1",
            dateEnd: "2022-09-10",
            estimatedMinutes: 5,
            estimatedBoredom: null,
            priority: null,
            subTasks: [],
        },
    ],

}


// REFERANSE - TERJES MODEL (komplett.no) FRA UNDERVISNING 27.09.23
//
const model_terje = {
    app: {
        loggedInUser: null,
        currentPage: 'productDetailPage',
        displayMode: 'dark',
        language: 'no',
    },
    inputs: {
        shoppingCartPage: {
            items: [
                {
                    productId: 123,
                    count: 1,
                },
                {
                    productId: 124,
                    count: 2,
                },
            ],
        },
        productListPage: {
            searchText: null,
            sort: {
                field: 'price',
                isAscending: true,
            },
            layout: 'list',
        },
        productDetailPage: {
            productId: 123,
            zipCode: '3292',
            currentImageIndex: 0,

        },
    },
    // database
    purchases: [

    ],
    products: [
        {
            id: 123,
            title: 'Svive Oberon switch Gaming Tastatur',
            description: 'Full størrelse, mekanisk, nordisk-layout, TTC switches, RGB, USB',
            beforePrice: null,
            price: 1319,
            stars: 4.5,
            variants: ['Brown', 'Red'],
            inStockCount: 50,
            images: [],
            brand: 1,
        },
        {
            id: 124,
            title: 'Svive Triton...',
            description: '60%....',
            beforePrice: 799,
            price: 499,
            stars: 3.5,
            variants: null,
            inStockCount: 50,
            images: [],
            brand: 1,
        },
    ],
    brands: [
        { id: 1, name: 'Svive', url: 'www.svive.com' },
        { id: 2, name: 'Logitech', url: 'www.logitech.com' },
    ],
};

/*
 - Per side: 
   1: Hvilke data vises her - og hvordan skal de ligge i 
      modellen for at vi skal kunne tegne opp siden?
   2: Hva kan brukeren gjøre på denne siden - og hvilke 
      endringer i modellen følger av det?
*/
