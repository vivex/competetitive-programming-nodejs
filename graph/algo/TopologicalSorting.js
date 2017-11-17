/**
 * Topological sorting for directed Acyclic Graph (DAG)
 * is a linear ordering of vertices such that for every directed
 * edge uv, vertex u comes before v in the ordering.
 *
 * Topological Sorting of graph is not possible if the graph
 * is not a DAG
 *
 * Adjacency list graph representation
 *
 *
 */
var TopologicalSorting = function (v) {
  this.V = v; // No of vertices
  // array containing adjacency listsList
  this.adj = [];
  for (var i =0; i <v ; i ++)
    this.adj[i] = [];
  
};

TopologicalSorting.prototype.addEdge = function (v,w) {
  if (!this.adj[v])
    this.adj[v] = [];
  this.adj[v].push(w);
};

TopologicalSorting.prototype.topologicalSortUtil =
  function (v, visited, stack) {
  // mark the current node as visited
    visited[v] = true;

    var i;

    // Recur for all the vertices adjacent to this vertex

    this.adj[v].forEach((value)  =>{
      i = value;
      if (!visited[i]) {
        this.topologicalSortUtil(i, visited, stack);
      }
    });

    // Push current vertex to stack which stores result
    stack.push(v);
};


TopologicalSorting.prototype.topologicalSort = function () {
  var stack = [];
  var visited =  [];
  for (var i = 0; i < this.V; i ++)
    visited[i] = false;

  // Call the recursive helper function to store
  // Topological Sort starting from all vertices
  // one by one

  for (var i = 0; i < this.V; i ++ )
    if (!visited[i])
      this.topologicalSortUtil(i, visited, stack);

  // Print contents of stack

  stack.reverse();
  stack.forEach(function (val) {
    console.log(val);
  });

};
exports.TopologicalSorting = TopologicalSorting;