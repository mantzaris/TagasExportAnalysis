
// Build simulation data
let {container, data, options} = simulator(20, 40)

// Visualize network
visualize(container, data, options)

// Analyze network
analyze(container, data, options)

let data_obj = build_adjacency_from_vis_obj(data)
