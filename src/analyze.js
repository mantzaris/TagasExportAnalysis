
function analyze(container, data, options){
    return cluster_emotions(data.emotions)
}

function cluster_emotions(emotionData) {
    // Cluster 
    // Returns the cluster numbers
    return run_kmeans(emotionData);
}