//to run node modules npm install -g browserify
//browserify network-visualization1.js -o bundle.js

//https://www.npmjs.com/package/random-words npm install random-words
const randomWords = require('random-words');
console.log('TTTEEESSSTTT')
console.log(randomWords({exactly: 5, maxLength: 4}))

// create an array with nodes
var nodes = new vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
]);

// create an array with edges
var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
]);

// create a network
var container = document.getElementById('mynetwork1');
// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {};

// initialize your network!
var network = new vis.Network(container, data, options);


/*
*
*
*/
// create an array with nodes
var nodes2 = new vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
]);
var edges2 = new vis.DataSet([
    {from: 1, to: 5},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
]);
var container2 = document.getElementById('mynetwork2');
var data2 = {
    nodes: nodes2,
    edges: edges2
};
var options2 = {};
var network2 = new vis.Network(container2, data2, options2);





