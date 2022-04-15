let myArr = [];

function* multiplication(x) {
    const iterate = x;
    for (var i = 0; i < iterate; i++) {
        x = x * 2;
        myArr.push(x);
        yield x;
    }
    let num = multiplication(3);
for (let x of num)  {
    console.log(x);
}


}

module.exports = multiplication;