class Graph {
    constructor() {
        this.nodes = [];
        this.links = [];
        this.oneAway = [];
        this.svg = null;
        this.nodeSvg = null;
        this.linkSvg = null;
        this.linkForce = null;
        this.simulation = null;
    }

    setup() {
        this.svg = d3.select("svg")
            .attr("viewBox", [-750, -500, 1500, 1000])
            .attr("width", 1500)
            .attr("height", 1000)
            .attr("style", "max-width: 100%; height: auto");

        for (let i = 0; i < 30; i++) {
            let r = Math.floor(Math.random() * 5);
            model.keywords.push({ name: "XXX" + "X".repeat(r) });
        }

        
        this.nodes = [...model.keywords];

        for (let i = 0; i < 30; i++) {
            let r1 = Math.floor(Math.random() * (this.nodes.length / 2));
            let r2 = Math.floor(Math.random() * this.nodes.length);
            model.keyword_relations.push({ idxA: r1, idxB: r2 });
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
            .attr("fill", "var(--foreground)");

        this.nodeSvg
            .append("text")
            .attr("font-size", "16pt")
            .attr("text-anchor", "middle")
            .attr("dy", "0.5em")
            .attr("fill", (d, i) => {
                let selected = model.app.pages.mappage.selectedKeyword;
                if (i == selected) return "var(--highlight)";
                else if (this.oneAway.some((e) => e == i)) return "#FF00FF";
                return "var(--lightblue)";
            })
            .on("mouseover", (event, d) => d3.select(event.currentTarget).style("outline", "dotted 3px var(--lightblue)"))
            .on("mouseout", (event, d) => d3.select(event.currentTarget).style("outline", ""))
            .text((d) => d.name);
    }

    refreshSimulation(clicked) {
        model.app.pages.mappage.selectedKeyword = clicked;
        updateRelatedSubview();
        let selected = model.app.pages.mappage.selectedKeyword;
        this.links.length = 0;

        this.oneAway = [];
        for (let rel of model.keyword_relations) {
            if (rel.idxA == selected) this.oneAway.push(rel.idxB);
            else if (rel.idxB == selected) this.oneAway.push(rel.idxA);
        }
        for (let rel of model.keyword_relations) if (this.oneAway.some((e) => e == rel.idxA) || this.oneAway.some((e) => e == rel.idxB)) {
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
                    this.simulation.alpha(0.5).tick(); // Use 'this' to refer to the class instance
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
let graph;