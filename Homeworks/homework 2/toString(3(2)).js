let myToStringFunction = function () {
  let myString = "";
  let arr = [15, "asd", 27];
  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      myString = myString + arr[i];
    } else {
      myString = myString = myString + arr[i] + ",";
    }
  }
  console.log(myString);
};

myToStringFunction();
