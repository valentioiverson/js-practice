let row = 1
let start = 1
while(row < 5){
    temp = start
    end = temp + row - 1
    view = ""
    while(temp <= end){
        view += String(temp)
        view += " "
        temp += 1
    }
    console.log(view)
    start += row
    row += 1
}