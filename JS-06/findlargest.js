function find_largest(array, n){
    let temp = array.sort(function(a,b) {return b - a})
    return temp[n - 1]
}
arr = [3, 45, 6, 7, 23, 5, 7, 8]; 
console.log(find_largest(arr, 3)); 