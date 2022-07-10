const arr = ["a", "a", "b", "a"];
let a = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (a !== arr[i]) {
       console.log(arr[i]);
    }
}