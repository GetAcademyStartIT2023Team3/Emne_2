let sortOptions = [
    { id: 0, name: 'Annbefalt Rekkefølge' }, 
    { id: 1, name: 'Siste Lest' }, 
    { id: 2, name: 'Siste Oppdatert' },
];


let x = /*html*/`
<div class="horizontal">
    <h3>Velg emne:</h3>
`;

x += makeDropdownHtml('chosensubject', model.emner);
x += makeDropdownHtml('chosentopic', sortOptions);

function makeDropdownHtml(elementId, options) {
    let selectOptions = '';
    for (opt of options) {
        selectOptions += /*html*/`<option value="${opt.id}">${opt.name}</option>`;
    }
    return `<select name="${elementId}" id="${elementId}">${selectOptions}</select>`;
}

x += /*html*/`

</div>
<table>
    <tr>
        <td>
            <div class="horizontal">
                <div style="font-size: 1.2rem; width: 1000px">
                    MVC Intro <a style="text-align:right" href="javascript:console.log('test')">Fortsett fra: Lage View</a>
                </div>
            </div>
            <div style="background:grey; height: 20px; width: 1000px;">
                <div style="width: 20%; background: green; height: 100%;"></div>
            <div>
        </td>
        <td>
        </td>
        <td>
        </td>
        
    </tr>
</table>
`;


function updateViewTema() {
    let emner = model.emner;
    let artikler = model.artikler;
    let tema = model.tema;
    let a = artikler[0].name; // skal være "For Løkker";
    document.getElementById('app').innerHTML = x;
}

