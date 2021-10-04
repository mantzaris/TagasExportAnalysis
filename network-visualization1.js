// (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//to run node modules npm install -g browserify
//browserify network-visualization1.js -o bundle.js
//https://www.npmjs.com/package/random-words npm install random-words

import randomWords from 'random-words';

console.log('h');
console.log(randomWords());

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

// },{"random-words":2}],2:[function(require,module,exports){

// module.exports = words;
// // Export the word list as it is often useful
// words.wordList = wordList;

// },{}]},{},[1]);
