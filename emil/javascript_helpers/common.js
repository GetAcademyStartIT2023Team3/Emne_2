function title(text) {
    return `<div style="font-size: 1.3rem;">${text}</div>`;
}
function prettyPrintObject(obj) {
    return `<pre style="font-size: 1rem;">${JSON.stringify(value=obj, replacer=null, space=4)}</pre>`;
}

function hrStart() {
    return '<hr style="margin-top: -0.2rem;">';
}

function hrEnd() {
    return '<hr style="margin-top: -0.2rem; margin-bottom: 2rem;">';
}
