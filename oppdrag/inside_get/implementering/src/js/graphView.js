let graphPage;

class Graph {
    constructor() {
        graphPage = model.app.pages.graphPage;
        this.nodes = [];
        this.links = [];
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

        this.nodes = model.keywords.map(keyword => ({ name: keyword.name, color: "var(--color_unfocused)"}));

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

    calculateDistance(selected, target) {
        const visited = new Set();
        const queue = [];
        const distances = {};
    
        queue.push(selected);
        distances[selected] = 0;
    
        while (queue.length > 0) {
            const currentNode = queue.shift();
            visited.add(currentNode);
    
            for (const relation of model.keyword_relations) {
                if (relation.idxA === currentNode && !visited.has(relation.idxB)) {
                    const neighbor = relation.idxB;
                    queue.push(neighbor);
                    distances[neighbor] = distances[currentNode] + 1;
                } else if (relation.idxB === currentNode && !visited.has(relation.idxA)) {
                    const neighbor = relation.idxA;
                    queue.push(neighbor);
                    distances[neighbor] = distances[currentNode] + 1;
                }
            }
        }
    
        return distances[target];
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
            .attr("stroke-width", 2)
            .attr("stroke-dasharray", d => d.linkStyle)
            .style("stroke", d => d.color);
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
                let distance = this.calculateDistance(selected, i);
                if (i == selected) return "var(--color_getOrange)";
                if(distance == 1) return "#FF00FF";
                if(distance == 2) return "#FFFFFF";
                if(d.color) return d.color;
                return "var(--color_unfocused)";
            })
            .text((d) => d.name);
    }

    refreshSimulation(clicked) {
        this.nodes[graphPage.selectedKeyword].color = null;
        graphPage.selectedKeyword = clicked;
        updateRelatedSubview();
        let selected = graphPage.selectedKeyword;
        this.links.length = 0;

        for(let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].fx = null;
            this.nodes[i].fy = null;

            const distance = this.calculateDistance(selected, i);
            if(distance == 1) for (let rel of model.keyword_relations) {
                if ((rel.idxA === selected && rel.idxB === i) || (rel.idxB === selected && rel.idxA === i)) {
                    this.links.push({ source: i, target: selected, linkStyle: "0", color: "var(--color_links)" });
                }
            }
    
            if(distance == 2) for(let rel of model.keyword_relations) {
                if(i == rel.idxA && this.calculateDistance(selected, rel.idxB) == 1) this.links.push({ source: i, target: rel.idxB, linkStyle: "10", color:"var(--color_text)" });
                if(i == rel.idxB && this.calculateDistance(selected, rel.idxA) == 1) this.links.push({ source: i, target: rel.idxA, linkStyle: "10", color:"var(--color_text)" });
            }
        }
        this.nodes[selected].color = "var(--color_getOrange)";

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
                        <input type="text" oninput="filter(this.value)"/>
                    </div>
                </div>
                <svg></svg>
                <div>
                <h3 id="uke" style="text-align:center">Uke 1 av 20</h3>
                <input type="range" value="1" min="1" max="20" id="weekSlider" style="width:100%" oninput="slide(this.value)">
                </div>
            </div>
            <div id="related" class="container" style="flex: 1">
            </div>
        </div>
    `;
}

function filter(search_string) {
    let result = graph_fuse.search(search_string);
    for(let g of graph.nodes) g.color = null;
    for(let r of result) if(r.score < 0.4) {
        graph.nodes[r.refIndex].color = "#FFFF00";
    }
    graph.nodeSvg.remove();
    graph.createNodes();
    graph.simulation.alpha(0.5).restart();
}

function slide(value) {
    let week = model.curriculum.weekPlan.find(week => week.week == value);
    let articles = Array.from(new Set([...week.monday, ...week.tuesday, ...week.wednesday, ...week.thursday, ...week.friday]));
    let keywords = Array.from(new Set(...model.articles.filter(a => articles.some(id => a.id == id)).map(a => a.keywords)));
    for(let g of graph.nodes) g.color = null;
    for(let k of keywords) {
        graph.nodes[k].color = "#FFFF00";
    }
    document.getElementById("uke").innerHTML = `Uke ${value} av 20`;
    graph.nodeSvg.remove();
    graph.createNodes();
    graph.simulation.alpha(0.5).restart();
}