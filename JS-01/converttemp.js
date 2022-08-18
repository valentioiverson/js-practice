let converttocelc = function(fah){
    return 5/9 * (fah - 32);
}
let converttofah = function(cel){
    return 9/5 * cel + 32;
}
// demonstrate functions
console.log(converttocelc(45));
console.log(converttofah(60));