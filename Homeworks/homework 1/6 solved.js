function include() {
    let arr1 = ["dog", "cat", "parrot"];
    let arr2 = ["lizard", "rat", "cat", "dog"]
    // let arr2 = ["dog", "cat", "parrot"];
    let result = true;
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            result = false;
        }
    }
    console.log(result)
}
include()