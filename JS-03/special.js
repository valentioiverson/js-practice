function factorial(n){
    let temp = 1
    let value = 1
    while(temp <= n){
        value *= temp 
        temp += 1
    }
    return value 
}
function processed(number){
    let value = 0
    let temp = number
    while(temp > 0){
        value += factorial(temp % 10)
        temp = (temp - temp % 10)/10
    }
    return value 
}
function special(number){
    if(processed(number) == number){
        return true
    }
    return false 
}


console.log(special(145))
console.log(special(28))