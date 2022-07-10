function reverse() {
    str = 'Yura';
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr = str[i] + newStr;
    }
    console.log(newStr);
}
reverse();