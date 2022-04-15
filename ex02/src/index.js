function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}
function* insideGenerator1() {
    let x = 1;
    while (true) {
        yield x
        x+=1
    }
        
}

for (i of insideGenerator1()) {
    if (i > 5) {
        break
    }
    console.log(i)
}
function* insideGenerator2() {
    let x = 10;
    while (true) {
        yield x
        x+=1
    }
        
}

for (i of insideGenerator2()) {
    if (i > 15) {
        break
    }
    console.log(i)
}
function* insideGenerator3() {
    let x = 6;
    while (true) {
        yield x
        x+=1
    }
        
    }

for (i of insideGenerator3()) {
    if (i > 9) {
        break
    }
    console.log(i)
}
var iterator = myGenerator();
var fifteenArray = [];

for (fifteenArray of iterator) {
    console.log(fifteenArray.next().value);
}


module.exports= { fifteenArray, myGenerator };