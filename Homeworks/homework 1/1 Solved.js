const arr = ["a", "a", "f", "a"];
let a = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (a !== arr[i]) {
       console.log(arr[i]);
    }
}