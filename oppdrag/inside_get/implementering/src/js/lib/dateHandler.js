const DATE_CONVERT_DATE_MAP = {
    englishWeekdays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    options: {
        'no-NO': {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        },
    },
    convertWeekdays: {
        'monday': {
            'no-NO': 'mandag',
        },
        'tuesday': {
            'no-NO': 'tirsdag',
        },
        'wednesday': {
            'no-NO': 'onsdag',
        },
        'thursday': {
            'no-NO': 'torsdag',
        },
        'friday': {
            'no-NO': 'fredag',
        },
        'saturday': {
            'no-NO': 'lørdag',
        },
        'sunday' :{
            'no-NO': 'søndag',
        },
    },

}

function dateHandlerGetEnglishWeekdayList(total) {
    // total = how many weekdays starting from monday (1) up to including sunday (7)
    // passing 3 as argument yields a list containing ['monday', 'tuesday', 'wednesday']
    return DATE_CONVERT_DATE_MAP.englishWeekdays.slice(0, total)
}

function dateHandlerConvertWeekdayToLocale(weekday, locale) {
    // weekday = english name of weekday (monday, tuesday e.g..), locale = country locale (Norway => 'no-NO)
    return DATE_CONVERT_DATE_MAP.convertWeekdays[weekday][locale];
}

function dateHandlerPrettyFormat(date, locale) {
    // date = 'YYYY-MM-DD', locale = country locale (Norway => 'no-NO)
    return new Date(date).toLocaleDateString(locale, DATE_CONVERT_DATE_MAP.options[locale]);
}
