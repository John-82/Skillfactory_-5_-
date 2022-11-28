// Задание 6
let arr = [1, 2, 4, 3, 5, 2, 7, 3, 4];
 function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}if (hasDuplicates(arr)){
    console.log("true");
}else {
    console.log("false");
}