class Graph {
  constructor() {
    this.adjacentList = {};
  }
  addVertex(vartex) {
    if (!this.adjacentList[vartex]) this.adjacentList[vartex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacentList[vertex1]) this.adjacentList[vertex1] = [];
    if (!this.adjacentList[vertex2]) this.adjacentList[vertex2] = [];

    this.adjacentList[vertex1].push(vertex2);
    this.adjacentList[vertex2].push(vertex1);
    return this.adjacentList;
  }
  removeEdge(vertex1, vertex2) {
    this.adjacentList[vertex1] = this.adjacentList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacentList[vertex2] = this.adjacentList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    for (let k of this.adjacentList[vertex]) {
      this.removeEdge(vertex, k);
    }
    delete this.adjacentList[vertex];
  }
}
let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
