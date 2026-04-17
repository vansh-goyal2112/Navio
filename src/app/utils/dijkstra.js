export function dijkstra(graph, start, end) {
  const distances = {};
  const prev = {};
  const unvisited = new Set(Object.keys(graph.nodes));

  Object.keys(graph.nodes).forEach(node => {
    distances[node] = Infinity;
    prev[node] = null;
  });

  distances[start] = 0;

  while (unvisited.size > 0) {
    let current = [...unvisited].reduce((a, b) =>
      distances[a] < distances[b] ? a : b
    );

    if (current === end) break;

    unvisited.delete(current);

    graph.edges.forEach(([a, b]) => {
      if (a === current || b === current) {
        const neighbor = a === current ? b : a;
        const alt = distances[current] + 1;

        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          prev[neighbor] = current;
        }
      }
    });
  }

  const path = [];
  let curr = end;

  while (curr) {
    path.unshift(curr);
    curr = prev[curr];
  }

  return path;
}