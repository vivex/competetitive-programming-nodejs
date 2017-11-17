
//var UglyNumbers = require("./array/algo/UglyNumbers").UglyNumbers;

var DAO = require('./book-library/models/DAO');

var MPTT = require('./book-library/models/MPTT');
import {TopologicalSorting} from "./graph/algo/TopologicalSorting";

import {UglyNumbers} from "./array/algo/UglyNumbers";

// var uglyNumbers = new UglyNumbers();
//uglyNumbers.getNumbersWithFactors([3,5,7], 10);

/*
console.log(UglyNumbers);

var g = new TopologicalSorting(6);


g.addEdge(5,2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);


g.topologicalSort();
 */

/*var b = new BookLibrary();
b.addBookToCatalog();*/

const categoryDAO = new DAO('categories');

var fictional = categoryDAO.insert({name: 'Fictional', parentId: 0});
var fictionalSub1 = categoryDAO.insert({name: 'Fictional Sub1', parentId: fictional.$loki});
categoryDAO.insert({name: 'Fictional sub1 sub', parentId: fictionalSub1.$loki});

var nonFictional = categoryDAO.insert({name: 'Non Fictional', parentId: 0});
var nonictionalSub1 = categoryDAO.insert({name: 'Non Fictional Sub1', parentId: nonFictional.$loki});

categoryDAO.insert({name: 'Non Fictional sub1 sub', parentId: nonictionalSub1.$loki});

var mptt = new MPTT();
var calculatedTree  = mptt.calculateLeftRightValues(categoryDAO.find({}));
console.log('calculatedTree', calculatedTree);
