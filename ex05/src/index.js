let shoppingList= new Map(
[
    ['Banana', 3],
    ['Pineapple', 5],
    ['Pear', 2],
    ['Carrot', 10],
    ['Apple', 1.5]
]);
let arrKey = [];
let arrValue = [];
for (let arrKey of shoppingList.entries()) {
    console.log('groceries:', arrKey[0]);
}
for (let arrValue of shoppingList.entries()) {
    console.log('amount:', arrValue[1]);
}
for (let [key, value] of shoppingList.entries()) {
    console.log([key, value]);
}
module.exports = {shoppingList, arrKey, arrValue};