const model = {
    // app-tilstand
    app: {
        page: 'home',
        signedIn: 'jack09',
    },

    // app-input
    input: {

    },

    // app-data
    data: {

    },

}

function showModel() {
    document.getElementById('model').innerHTML = `
        <hr style="margin-top: 1rem;">
            <div style="font-size: 1.5rem; margin-bottom: -1rem; margin-top: -0.5rem; font-weight: bold;">Model</div>
            <pre style="font-size: 1rem;">${JSON.stringify(value=model, replacer=null, space=4)}
        <hr style="margin-top: -1rem;">
    `;
}
