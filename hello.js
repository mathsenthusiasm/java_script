const { i } = require("./code");

arr=[2,8,9,5]
console.log(arr[2]);
arr.pop();
console.log(arr);
for (let i of arr) {
    console.log(i, arr[i]);
}
