class Rectangle{
    constructor(width, length){
        this.width = width; 
        this.length = length; 
    }
    area(){
        return this.width * this.length;
    }
} 

class Square extends Rectangle{
    constructor(side){
        super(side, side); 
    }
}
// test 
obj1 = new Rectangle(10,20); 
console.log(obj1.area()); 
obj2 = new Square(15); 
console.log(obj2.area()); 