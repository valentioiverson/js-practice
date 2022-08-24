let value = 0
let counter = 1
while(counter <= 1000){
    if(counter % 3 == 0 || counter % 5 == 0){
        value += counter
    }
    counter += 1
}
console.log(value)