function findgrade(grade){
switch(true){
    case (grade >= 90 && grade <= 100):
        return "S"
        break; 
    case (grade >= 80 && grade < 90):
        return "A"
        break; 
    case (grade >= 70 && grade < 80):
        return "B"
        break; 
    case (grade >= 60 && grade < 70):
        return "C"
        break; 
    case (grade >= 50 && grade < 60):
        return "D"
        break; 
    case (grade >= 40 && grade < 50):
        return "E"
        break; 
    case (grade < 40 && grade >= 0):
        return "Student has failed"
        break; 
    default:
        return "Invalid marks"
}
}

console.log(findgrade(80))
console.log(findgrade(120))
console.log(findgrade(30))