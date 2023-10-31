// entrypoint
//
const model = {
    app: getAppModel(),
    input: getInputModel(),
    data: getDataModel(),
};

function showModel(title, data) {
    document.getElementById('model').innerHTML += `
        <div style="background-color: rgb(228, 229, 229); font-size: 1rem; margin-bottom: -1rem; font-weight: bold;">
            ${title}:
        </div>

        <div style="background-color: rgb(238, 239, 239); font-size: 1rem; margin-bottom: -1rem;">
            <pre>${JSON.stringify(data, null, 4)},</pre>
        </div>
    `;
}
