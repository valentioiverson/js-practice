function processed(number){
    let value = 0
    let temp = number
    while(temp > 0){
        value += (temp % 10) ** 3
        temp = (temp - temp % 10)/10
    }
    return value 
}

// check whether a number is armstrong or not
function armstrong(number){
    if(processed(number) == number){
        return true
    }
    return false 
}

console.log(armstrong(30))
console.log(armstrong(153))