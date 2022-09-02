class Cylinder{
    constructor(radius, height){
        this.radius = radius; 
        this.height = height; 
    }
    getVolume(){
        return (Math.PI * (this.radius ** 2) * this.height).toFixed(4)
    }
} 
class Sphere{
    constructor(radius){
        this.radius = radius; 
    }
    getVolume(){
        return (Math.PI * (this.radius ** 3) * 4/3).toFixed(4)
    }
} 
class Cone{
    constructor(radius, height){
        this.radius = radius; 
        this.height = height; 
    }
    getVolume(){
        return (Math.PI * (this.radius ** 2) * this.height/3).toFixed(4)
    }
} 

// test
obj1 = new Cylinder(10,10); 
console.log(obj1.getVolume()); 
obj2 = new Sphere(10); 
console.log(obj2.getVolume()); 
obj3 = new Cone(10,10); 
console.log(obj3.getVolume()); 