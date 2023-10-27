"use strict";

function changePage(page) {
    model.app.selectedPage = page;
    updateView();
}

function createTopbarHtml() {
    function createLinkHtml(text, page) {
        return model.app.selectedPage != page ? /*html*/`<a href="javascript: changePage('${page}')">${text}</a>` : `${text}`;
    }
    return /*html*/`
        <div class ="hrz" style="justify-content: space-between; height: 100px">
            <div class="padding"></div>
            <img src="https://inside.getacademy.no/img/logo.png" style="object-fit: contain; flex: 5"/>
            <div style="flex: 5"></div>
            <details style="flex: 5"><summary>xxxxxxx@getacademy.no</summary><a href="">Logg ut</a></details>
            <div class="padding"></div>
        </div>
        <nav>
            <pre><a href="">Student</a> | </pre>
            <pre><a href="">Emne 1</a> | </pre>
            <pre><a href="">Emne 2</a> | </pre>
            <pre><a href="">Emne 3</a> | </pre>
            <pre>NK | </pre>
            <pre><a href="">Bonus</a> | </pre>
            <pre><a href="">Oblig</a> | </pre>
            <pre><a href="">Opptak</a></pre>
        </nav>
        <nav>
            <pre>${createLinkHtml("Hovedside", "main")} | </pre>
            <pre>${createLinkHtml("Ukeplan", "plan")} | </pre>
            <pre>${createLinkHtml("Kart", "map")}</pre>
        </nav>
    `;
}

function updateMainpageView() {
    let app = document.getElementById("app");

    let weekHtml = "";
    let weekContent;
    for(let week of model.curriculum.weekPlan) if(week.week == model.app.pages.mainpage.weekId) weekContent = week.content;
    for(let [key, value] of Object.entries(weekContent)) {
        weekHtml += `<h5>${key.toUpperCase()}</h5>`;
        for(let articleId of value) {
            for(let article of model.articles) if(articleId == article.id){
                let topicName = model.topics.find((elem) => elem.id == article.topicId).name || "ERROR";
                weekHtml += `<a href="">${topicName} - ${article.name}</a><br>`;
            } 
        }
    }

    let topicsHtml = "";
    for(let topic of model.topics) {
        let articlesHtml = "";
        for(let article of model.articles) if(article.topicId == topic.id) articlesHtml += /*html*/`
            <a href="">${article.name}</a><br>
        `;
        topicsHtml += /*html*/`
            <details>
                <summary>${topic.name}</summary>
                <div class="hrz">
                    <div>
                        ${articlesHtml}
                    </div>
                    <div class="dark">
                        ${topic.description}
                    </div>
                </div>
            </details>
        `;
    }

    app.innerHTML = /*html*/`
        ${createTopbarHtml()}
        <div class="hrz" style="height:1000px">
            <div style="flex: 1; min-width: 20px">
            </div>
            <div class="container" style="flex: 3; min-width: 600px">
                <div style="position:relative;">
                    <div class="dark" style="position:absolute; right: 50px; top: 10px;">
                        ${weekHtml}
                    </div>
                </div>
                <h2>Nøkkelkompetanse</h2>
                <pre>I Nøkkelkompetanse lærer vi om blablabla<br/>blablablablablabla blablabla blablablablablabla blablabla blablabla<br/>blablablablablablablablablablablablablablabla<br/>blablabla blablabla blablabla blablabla</pre>
                
                ${topicsHtml}
            </div>
            <div style="flex: 1; min-width: 20px;">
            </div>
        </div>
        </div>
    `;
}

let simStuff = {
    svg: null,
    linkSvg: null,
    links: new Set(),
    linkForce: null, 
    simulation: null,
};

function refreshSim() {
    simStuff.links.clear();
    simStuff.svg.selectAll("line").exit().remove();

    for(let rel of model.keyword_relations){
        if(rel.idxA == model.app.pages.mappage.selectedKeyword) {
            simStuff.links.add({ source: model.keywords[rel.idxA], target: model.keywords[rel.idxB] });
            for(let rel2 of model.keyword_relations) if(rel2.idxA == rel.idxB || rel2.idxB == rel.idxB)
            simStuff.links.add({ source: model.keywords[rel2.idxA], target: model.keywords[rel2.idxB] });
        }
        if(rel.idxB == model.app.pages.mappage.selectedKeyword) {
            simStuff.links.add({ source: model.keywords[rel.idxA], target: model.keywords[rel.idxB] });
            for(let rel2 of model.keyword_relations) if(rel2.idxA == rel.idxA || rel2.idxB == rel.idxA)
            simStuff.links.add({ source: model.keywords[rel2.idxA], target: model.keywords[rel2.idxB] });
    }        
}
    
const lines = simStuff.svg.selectAll("line")
        .data(Array.from(simStuff.links));

    lines
        .attr("x1", d => d.source.x+400)
        .attr("y1", d => d.source.y+400)
        .attr("x2", d => d.target.x+400)
        .attr("y2", d => d.target.y+400);

    lines.exit().remove();

    // Add new lines with proper x1, y1, x2, y2 attributes
    lines.enter()
        .append("line")
        .attr("stroke-width", d => 2)
        .style("stroke", "black")



    console.log(simStuff.links);
    
    simStuff.linkForce = d3.forceLink(Array.from(simStuff.links)).distance(200);
    simStuff.simulation.force("link", simStuff.linkForce);
    simStuff.simulation.alpha(0.5).restart();
}

function updateMappageView() {
    let app = document.getElementById("app");
    
    app.innerHTML = /*html*/`
        ${createTopbarHtml()}
        <div class="hrz">
            <div style="flex: 1"></div>
            <div class="container">
                <div style="flex: 3; min-width: 20px"></div>
                <svg height="700px" width="900px"></svg>
            </div>
            <div style="flex: 1">
                <ul class="history">
                    <a href="">Pomodoro</a> er nevnt i disse artiklene:
                    <ul>
                        <li><a href="">Nevroplastisitet</a></li>
                        <li><a href="">Focused vs Diffused mindset</a></li>
                        <li><a href="">Oppgave 4</a></li>
                    </ul>
                </ul>
        </div>
        </div>
            <div style="flex: 1; min-width: 20px"></div>
        </div>
    `;

    for(let rel of model.keyword_relations){
        if(rel.idxA == model.app.pages.mappage.selectedKeyword) {
            simStuff.links.add({ source: model.keywords[rel.idxA], target: model.keywords[rel.idxB] });
            for(let rel2 of model.keyword_relations) if(rel2.idxA == rel.idxB || rel2.idxB == rel.idxB)
                simStuff.links.add({ source: model.keywords[rel2.idxA], target: model.keywords[rel2.idxB] });
        }
        if(rel.idxB == model.app.pages.mappage.selectedKeyword) {
            simStuff.links.add({ source: model.keywords[rel.idxA], target: model.keywords[rel.idxB] });
            for(let rel2 of model.keyword_relations) if(rel2.idxA == rel.idxA || rel2.idxB == rel.idxA)
                simStuff.links.add({ source: model.keywords[rel2.idxA], target: model.keywords[rel2.idxB] });
        }        
    } 

    simStuff.svg = d3.select("svg");

    simStuff.linkSvg = simStuff.svg
        .selectAll("line")
        .data(simStuff.links)
        .enter()
        .append("line")
        .attr("stroke-width", d => 2)
        .style("stroke", "black")
        .attr("transform", (d, i) => "translate(400,400)");

    const nodeSvg = simStuff.svg
        .selectAll("g")
        .data(model.keywords)
        .enter()
        .append("a")
        .attr("href", (_, i) => `javascript: model.app.pages.mappage.selectedKeyword = ${i}; refreshSim()`)
        .append("g")
        .attr("transform", (d, i) => `translate(400, ${i * 20})`); // Adjust the Y position as needed

    nodeSvg
        .append("rect")
        .attr("x", -15)
        .attr("y", -10)
        .attr("width", 30) // Adjust the width as needed
        .attr("height", 30) // Adjust the height as needed
        .attr("fill", "var(--foreground)"); // Adjust the background color as needed

    nodeSvg
        .append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.5em")
        .attr("fill", "#1095C1")
        .on("mouseover", d => d3.select(event.currentTarget).style("outline", "dotted 3px var(--lightblue)"))
        .on("mouseout", d => d3.select(event.currentTarget).style("outline", ""))
        .text((d) => d.name);


    simStuff.linkForce = d3.forceLink(Array.from(simStuff.links)).distance(200);

    simStuff.simulation = d3.forceSimulation(model.keywords)
        .force("charge", d3.forceManyBody().strength(-100))
        .force("link", simStuff.linkForce)
        .force("center", d3.forceCenter())
        .on("tick", ticked);

    function ticked() {
        simStuff.linkSvg
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
        nodeSvg
            .attr("transform", d => `translate(${Math.max(0, Math.min(1000, d.x+400))}, ${Math.max(0, Math.min(1000, d.y+400))})`);
    }
    

}

let views = new Map([
    ["main", updateMainpageView],
    ["map", updateMappageView],
    ["plan", updateMappageView],
    ["article", updateMappageView]
]);

function updateView() {
    views.get(model.app.selectedPage)();
}
