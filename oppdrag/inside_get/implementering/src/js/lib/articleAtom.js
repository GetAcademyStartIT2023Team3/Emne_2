function articleAtomText(title=null, text=null) {
    if (text === null) throw new Error("articleAtomText() - text has no value");
    if (title === null) {
        // render only text
    } else {
        // render title & text
    }
    return '<p>articleAtomText()</p>';
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
    return '<p>articleAtomImageAsset()</p>';
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
