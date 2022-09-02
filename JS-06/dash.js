function computeDash(number){
    var arr = number.toString().split('')
    var numarr = arr.map(Number)    
    for(var i = 0; i < numarr.length; i++){
        if(numarr[i - 1] % 2 == 0 && numarr[i] % 2 == 0){
            numarr.splice(i,0,'-')
        }
    }
    return numarr.join('')
}
console.log(computeDash(2020186));
console.log(computeDash(025468)); 
// by assumption of accepting number as an input, the first digit can't be 0
