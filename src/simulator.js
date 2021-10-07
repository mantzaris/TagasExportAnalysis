
function sim(nNodes=10, nEdges=10, networkName='mynetwork1') {

    var emotionColorOptions = ["red", "orange", "green"];

    var nodeList = []
    for (var i = 0; i < nNodes; i++) {
        nodeList.push({id: i,
                       label: randomWords(),
                       color: random_select(emotionColorOptions),
                    })
      }

    // create an array with nodes
    var nodes = new vis.DataSet(nodeList);

    var edgeList = []
    for (var i = 0; i < nEdges; i++) {
        from_node = random_integer(min=0, max=nNodes)
        to_node = 
        edgeList.push({from: random_integer(min=0, max=nNodes),
                       to: random_integer(min=0, max=nNodes),
                    })
      }

    // create an array with edges
    var edges = new vis.DataSet(edgeList);

    // create a network
    var container = document.getElementById(networkName);
    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};

    return {container, data, options}
};
