let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);
let intersectionSet = new Set([...one].filter(element => two.has(element)));
let unionSet = new Set([...one, ...two]);
let differenceSet = new Set([...one].filter(element => !two.has(element)));
console.log(one, two, unionSet, intersectionSet, differenceSet);
module.exports = {unionSet, intersectionSet, differenceSet};