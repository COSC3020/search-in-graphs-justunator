const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');
assert(JSON.stringify(depthFirstSearch([], 0, 1)) === JSON.stringify([]));

assert(JSON.stringify(depthFirstSearch([[]], 0, 0)) == JSON.stringify([0]));

assert(JSON.stringify(depthFirstSearch([[1],[0,3],[0,1],[0,1,2,3]], 0, 2)) == JSON.stringify([0,1,3,2]));

assert(JSON.stringify(depthFirstSearch([[1],[0,3],[0,1],[0,1,3]], 0, 2)) == JSON.stringify([]));

assert(JSON.stringify(depthFirstSearch([[0,1],[2],[1,3],[2,4],[0]], 1, 0)) == JSON.stringify([1,2,3,4,0]));