let arr = [14, 28, 3, 8, 2];
let newArr = [];
let max = arr[0];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i] ;
    }else if (arr[i] < min) {
        min = arr[i]
    }
}
newArr.push(max,min);
console.log(newArr);

