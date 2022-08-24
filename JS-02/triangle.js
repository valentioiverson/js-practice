function checktriangle(first, second, third){
    // assumption: input is already sides of a triangle
    if (first == second && second == third){
        return "equilateral"
    }
    else if(first == second || second == third || third == first){
        return "isosceles"
    }
    else{
        return "scalene"
    }
}
console.log(checktriangle(1,1,1))
console.log(checktriangle(2,3,2))
console.log(checktriangle(4,4,5))
console.log(checktriangle(3,6,5))