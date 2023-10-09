"use strict";

function convertImage(content) {
    return /*html*/`<img src="${content.url}" title="${content.title}" alt="${content.title}"/>`
}

function convertYoutube(details) {
    return /*html*/`
    <iframe height="560" width="315px" src="https://www.youtube.com/embed/${details}" frameborder="0" allow="picture-in-picture;" allowfullscreen></iframe>
    `
}

function convertMarkdown(details) {
    let html = "";
    for(const line of details.split("\n")) {
        let pre_after = line.split(/\s(.+)/);
        if(pre_after[0] == "#") html += /*html*/`<h3>${pre_after[1]}</h3>`;
        else html += html += /*html*/`<p>${line}</p>`;
    }
    return html;
}