let Arr = [];
let even = [];
let odd = [];
for (let i = 0; i < 10; i++) {
    let a = Math.round(Math.random()*50+1);
    Arr.push(a)
}

for (let j = 0; j < Arr.length; j++) {
    if (Arr[j]%2 == 0) {
        even.push(Arr[j])
    } else {
        odd.push(Arr[j])
    }
    
}
console.log(even);
console.log(odd);



