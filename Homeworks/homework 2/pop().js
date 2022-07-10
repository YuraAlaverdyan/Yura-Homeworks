let myArr = ["ангел", "клоун", "мандарин", "хирург"];
function reversedArray(s) {
  let reversedArr = [];
  for (let i = myArr.length-1; i >= 0; i--) {
    reversedArr.push(myArr.pop());
  }
  console.log(reversedArr);
}
reversedArray();
