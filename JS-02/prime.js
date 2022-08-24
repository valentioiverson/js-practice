function isprime(n){
    let temp = 2
    let value = true
    while(temp < n){
        if(n % temp == 0){
            value = false
        }
        temp += 1
    }
    return value 
}

function factorial(n){
    let temp = 1
    let value = 1
    while(temp <= n){
        value *= temp 
        temp += 1
    }
    return value 
}
function prime(a,b){
    let list = []
    counter = a
    while(counter <= b){
        if (isprime(counter) == true){
            list.push(factorial(counter))
        }
        counter += 1
    }
    return list
}

console.log(prime(3,7))