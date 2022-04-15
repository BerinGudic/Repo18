function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* arguments;
}
let iterator = myGenerator(6, 7, 8);
let generatorArray = [];

for (let i = 0 ; i < iterator.length; i++) {
        console.log(i);
}
 for (generatorArray of iterator) {
     console.log(generatorArray);
 }
 console.log(generatorArray);
module.exports = {generatorArray, myGenerator};