function articleAtomText(title=null, text=null) {
    if (text === null) throw new Error("articleAtomText() - text has no value");

    if (title === null) {
        return `<p>${text}</p>`;
    }

    if (title !== null) {
        return `
            <h1>${title}</h1>
            <p>${text}</p>
        `;
    }
}

function articleAtomImageHTTP(title=null, text=null, ref=null) {
    // ref => 'https://getacademy.no/hubfs/GET_RGB_logo-01-2.png'
    return '<p>articleAtomImageHTTP()</p>';
}

function articleAtomYoutube(title=null, text=null, ref=null) {
    // ref => youtube.com/dHRQLHaC86c
    return '<p>articleAtomYoutube()</p>';
}

function articleAtomImageAsset(title=null, text=null, ref=null) {
    // ref => ./assets/image/123.png
    if (ref === null) throw new Error("articleAtomImageAsset() - ref has no value");

    if (title === null && text === null) {
        return `
            <img src="${ref}">
        `;
    }

    if (title !== null && text === null) {
        return `
            <h1>${title}</h1>
            <img src="${ref}">
        `;
    }

    if (title === null && text !== null) {
        return `
            <figure>
                <img src="${ref}">
                <figcaption>${text}</figcaption>
            </figure>
        `;
    }

    if (title !== null && text !== null) {
        return `
            <h1>${title}</h1>
            <figure>
                <img src="${ref}">
                <figcaption>${text}</figcaption>
            </figure>
        `;
    }
}

function articleAtomVideoAsset(title=null, text=null, ref=null) {
    // ref => './assets/video/123.mov'
    return '<p>articleAtomVideoAsset()</p>';
}

function articleAtomAskChoices(ask=null, correct=null, choices=null) {
    // correct => 1
    // choices => ['answer 1', 'answer 2', 'answer 3']
    return '<p>articleAtomAskChoices()</p>';
}
