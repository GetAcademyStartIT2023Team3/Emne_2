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

let graph = {
    nodes: [],
    links: [],
    oneAway: [],
    svg: null,
    nodeSvg: null,
    linkSvg: null,
    linkForce: null,
    simulation: null,
    setup: function() {
        this.svg = d3.select("svg")
            .attr("viewBox", [-750, -500, 1500, 1000])
            .attr("width", 1500)
            .attr("height", 1000)
            .attr("style", "max-width: 100%; height: auto");

        for(let i = 0; i < 50; i++) {
            let r = Math.floor(Math.random()*5);
            model.keywords.push({ name: "XXX" + "X".repeat(r)});
        }
    

        this.nodes = [
            ...model.keywords
        ];

        
        
        for(let i = 0; i < 50; i++) {
            let r1 = Math.floor(Math.random()*this.nodes.length);
            let r2 = Math.floor(Math.random()*this.nodes.length);
            model.keyword_relations.push({idxA: r1, idxB: r2});
        }

        this.createLinks();
        this.createNodes();
        
        this.linkForce = d3.forceLink(this.links).distance(100).strength(0.5);

        this.simulation = d3.forceSimulation(this.nodes)
            .force("charge", d3.forceManyBody().strength(-200))
            .force("link", this.linkForce)
            .force("center", d3.forceCenter())
            .force("radial", d3.forceRadial(200).strength(0.05))
            .force("collide", d3.forceCollide().radius(60).strength(0.1))
            .on("tick", this.ticked.bind(this));

        this.refreshSimulation(model.app.pages.mappage.selectedKeyword);
    },
    ticked: function() {
        this.linkSvg
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
        this.nodeSvg
            .attr("transform", d => {
                d.x = Math.max(-600, Math.min(600, d.x));
                d.y = Math.max(-450, Math.min(450, d.y));
                return `translate(${d.x}, ${d.y})`
            });
    },
    createLinks: function() {
        this.linkSvg = this.svg
            .selectAll("line")
            .data(this.links)
            .enter()
            .append("line")
            .attr("stroke-width", d => 2)
            .style("stroke", "black");
    },
    createNodes: function() {
        this.nodeSvg = this.svg
            .selectAll("g")
            .data(this.nodes)
            .enter()
            .append("a")
            .attr("href", (_, i) => `javascript: graph.refreshSimulation(${i})`)
            .append("g")

        this.nodeSvg
            .append("rect")
            .attr("x", -15)
            .attr("y", -10)
            .attr("width", 30)
            .attr("height", 30)
            .attr("fill", "var(--foreground)");

        this.nodeSvg
            .append("text")
            .attr("font-size", "16pt")
            .attr("text-anchor", "middle")
            .attr("dy", "0.5em")
            .attr("fill", (d,i) => {
                let selected = model.app.pages.mappage.selectedKeyword;
                if(i == selected) return "var(--highlight)";
                else if(this.oneAway.some((e) => e == i)) return "#FF00FF";
                return "var(--lightblue)";
            })
            .on("mouseover", (event, d) => d3.select(event.currentTarget).style("outline", "dotted 3px var(--lightblue)"))
            .on("mouseout", (event, d) => d3.select(event.currentTarget).style("outline", ""))
            .text((d) => d.name);
    },
    refreshSimulation: function(clicked) {
        model.app.pages.mappage.selectedKeyword = clicked;
        updateRelatedSubview();
        let selected = model.app.pages.mappage.selectedKeyword;
        this.links.length = 0;

        this.oneAway = [];
        for(let rel of model.keyword_relations) {
            if(rel.idxA == selected) this.oneAway.push(rel.idxB);
            else if(rel.idxB == selected) this.oneAway.push(rel.idxA);
        }
        for(let rel of model.keyword_relations) if(this.oneAway.some((e) => e == rel.idxA) || this.oneAway.some((e) => e == rel.idxB)) {
            this.links.push({ source: rel.idxA, target: rel.idxB });
        }

        for(let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].fx = null;
            this.nodes[i].fy = null;
        }

        let selectedNode = this.nodes[clicked];
        d3.select(this.nodeSvg._groups[0][clicked])
            .transition()
            .duration(600)
            .tween('move', function () {
                const ix = d3.interpolate(selectedNode.x, 0);
                const iy = d3.interpolate(selectedNode.y, 0);
                return function (t) {
                    selectedNode.fx = ix(t);
                    selectedNode.fy = iy(t);
                    graph.simulation.alpha(0.5).tick();
                };
            });
        

        this.linkForce.links(this.links);
        this.linkSvg.remove();
        this.createLinks();

        this.nodeSvg.remove();
        this.createNodes();

        this.simulation.alpha(0.5).restart();
    }
}

function updateRelatedSubview() {
    let selected = model.app.pages.mappage.selectedKeyword;
    let related = document.getElementById("related");
    let listHtml = "";
    for(let article of model.articles) if(article.keywords.some((e) => e == selected)) {
        listHtml += /*html*/`<li><a href="">${article.name}</a></li>`;
    }
    related.innerHTML = /*html*/`
        <ul class="history">
            <h3>${model.keywords[selected].name} er nevnt i disse artiklene:</h3>
            <ul>
                ${listHtml}
            </ul> 
        </ul>
    `;
}

function updateMappageView() {
    let app = document.getElementById("app");
    
    app.innerHTML = /*html*/`
        ${createTopbarHtml()}
        <div class="hrz">
            <div style="flex: 1"></div>
            <div class="container">
                <div style="position: relative">
                    <div style="position: absolute; right: 20px;">
                        <!-- Position relative triks -->
                    </div>
                </div>
                <div style="flex: 3; min-width: 20px"></div>
                <svg></svg>
            </div>
            <div id="related" style="flex: 1">
                <ul class="history">
                    <a href="">XXXX</a> er nevnt i disse artiklene:
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

    graph.setup();
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
