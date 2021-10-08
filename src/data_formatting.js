function build_adjacency_from_vis_obj(data) {
    // Build adjacency matrix
    let nEdges = data.edges.length;
    let edges_data = data.edges.get();
    var adj_matrix = zeros([nEdges, nEdges]); //createArray(nEdges, nEdges); //Array(nEdges).fill(Array(nEdges).fill(0));
    console.log(adj_matrix);

    for (var i = 0; i < nEdges; i++) {
        console.log(edges_data[i].from, edges_data[i].to);
        console.log(adj_matrix[edges_data[i].from, edges_data[i].to]);
        adj_matrix[edges_data[i].from, edges_data[i].to] = 1;
        console.log(adj_matrix[edges_data[i].from, edges_data[i].to]);
        break;
    };

    console.log(adj_matrix);

    return adj_matrix
}

