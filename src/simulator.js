
function simulator(nNodes=10, nEdges=10, nEmotionDimension=2, networkName='mynetwork1') {

    // Hardcoding some colors to associate with clusters
    var clusterColors = ["red", "blue", "green", "orange", "purple"];

    var emotionList = []
    for (var i = 0; i < nNodes; i++) {
        emotionList.push(simulateEmotion(nEmotionDimension));
    };

    let emotions_clustered = cluster_emotions(emotionList)

    var nodeList = []
    for (var i = 0; i < nNodes; i++) {
        nodeList.push({id: i,
                       label: randomWords(),
                       color: clusterColors[emotions_clustered[i]], //random_select(clusterColors),
                    })
      }

    // create an array with nodes
    var nodes = new vis.DataSet(nodeList);

    var edgeList = []
    for (var i = 0; i < nEdges; i++) {
        edgeList.push({from: random_integer(min=0, max=nNodes),
                       to: random_integer(min=0, max=nNodes),
                    });
      }

    // create an array with edges
    var edges = new vis.DataSet(edgeList);

    // create a network
    var container = document.getElementById(networkName);
    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges,
        emotions: emotionList,
    };
    var options = {};

    return {container, data, options}
};

function simulateEmotion(nEmotionDimension=2) {
    var emotion_vec = [];
    for (i=0; i<nEmotionDimension; i++) {
        emotion_vec.push(random_float(min=0, max=1));
    };
    return emotion_vec;
};
