function commonWords() {
let arr1 = ["dog", "cat", "parrot",'word'];
let arr2 = ["lizard", "rat", "cat",'word'];
let common = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
        if (arr1[i]==arr2[j]) {
            common.push(arr2[j])}
        };
        };
        console.log(common);

}
commonWords();