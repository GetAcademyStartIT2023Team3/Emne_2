let graphPage;

class Graph {
    constructor() {
        graphPage = model.app.pages.graphPage;
        this.nodes = [];
        this.links = [];
        this.oneAway = [];
        this.svg = null;
        this.nodeSvg = null;
        this.linkSvg = null;
        this.linkForce = null;
        this.simulation = null;

        this.svg = d3.select("svg")
            .attr("viewBox", [-750, -500, 1500, 1000])
            .attr("width", 1500)
            .attr("height", 1000)
            .attr("style", "max-width: 100%; height: auto");

        this.nodes = [...model.keywords];

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

        this.refreshSimulation(graphPage.selectedKeyword);
    }

    ticked() {
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
    }

    createLinks() {
        this.linkSvg = this.svg
            .selectAll("line")
            .data(this.links)
            .enter()
            .append("line")
            .attr("stroke-width", d => 2)
            .style("stroke", "black");
    }

    createNodes() {
        this.nodeSvg = this.svg
            .selectAll("g")
            .data(this.nodes)
            .enter()
            .append("a")
            .attr("href", (_, i) => `javascript: graph.refreshSimulation(${i})`)
            .append("g");

        this.nodeSvg
            .append("rect")
            .attr("x", -15)
            .attr("y", -10)
            .attr("width", 30)
            .attr("height", 30)
            .attr("fill", "var(--color_foreground)");

        this.nodeSvg
            .append("text")
            .attr("font-size", "16pt")
            .attr("text-anchor", "middle")
            .attr("dy", "0.5em")
            .attr("fill", (d, i) => {
                let selected = graphPage.selectedKeyword;
                if (i == selected) return "var(--color_getOrange)";
                else if (this.oneAway.some((e) => e == i)) return "#FF00FF";
                return "var(--color_links)";
            })
            .on("mouseover", (event, d) => d3.select(event.currentTarget).style("outline", "dotted 3px var(--lightblue)"))
            .on("mouseout", (event, d) => d3.select(event.currentTarget).style("outline", ""))
            .text((d) => d.name);
    }

    refreshSimulation(clicked) {
        graphPage.selectedKeyword = clicked;
        updateRelatedSubview();
        let selected = graphPage.selectedKeyword;
        this.links.length = 0;

        this.oneAway = [];
        for (let rel of model.keyword_relations) {
            if (rel.idxA == selected) this.oneAway.push(rel.idxB);
            else if (rel.idxB == selected) this.oneAway.push(rel.idxA);
        }
        for(let rel of model.keyword_relations) if(this.oneAway.some((e) => e == rel.idxA) || this.oneAway.some((e) => e == rel.idxB)) {
            this.links.push({ source: rel.idxA, target: rel.idxB });
        }

        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].fx = null;
            this.nodes[i].fy = null;
        }

        let selectedNode = this.nodes[clicked];
        d3.select(this.nodeSvg._groups[0][clicked])
            .transition()
            .duration(600)
            .tween('move', () => {
                const ix = d3.interpolate(selectedNode.x, 0);
                const iy = d3.interpolate(selectedNode.y, 0);
                return (t) => {
                    selectedNode.fx = ix(t);
                    selectedNode.fy = iy(t);
                    this.simulation.alpha(0.5).tick();
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
    let selected = graphPage.selectedKeyword;
    let related = document.getElementById("related");
    let listHtml = "";
    for(let article of model.articles) if(article.keywords.some((e) => e == selected)) {
        listHtml += /*html*/`<li>${createArticleLink(article.id, "none", "graph = null")}</li>`;
    }
    related.innerHTML = /*html*/`
        <div class="container">
            <h4>${model.keywords[selected].name} er nevnt i disse artiklene:</h4>
            <ul>
                ${listHtml}
            </ul> 
        </div>
    `;
}

function updateGraphView() {
    return /*html*/`
        <div class="hflex center" onload="graph = null;">
            <div class="container" style="flex: 3">
                <div style="position: relative">
                    <div style="position: absolute; right: 20px;">
                        <!-- Position relative triks --><input type="text" onchange="textChange(this.value)"/>
                    </div>
                </div>
                <svg></svg>
            </div>
            <div id="related" class="container" style="flex: 1">
            </div>
        </div>
    `;
}

function textChange(search_string) {
    let result = fuse.search(search_string);
    let html = "";
    for(let r of result) if(r.score < 0.35) {
        for(let article of model.articles) if(article.keywords.some((e) => e == r.refIndex)) {
            html += /*html*/`${createArticleLink(article.id, "above", "graph = null")}\n`;
        }
    }
    console.log(html);
}