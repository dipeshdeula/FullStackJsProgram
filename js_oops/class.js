//js haw two types of classes
//1) Dynamic classes
//2)static classes

//Ex. Dynamic class
/*
class Car{
    constructor(brand){
        this.carname = brand //initialization

    }
    present(){
        return 'I have a '+this.carname //method definition
        
    }

}
const myCar = new Car ('Ferari'); //creating an instance of car
console.log(myCar); //calling the method, output: "I have a Toyota"

const myCar2 = new Car("Hundai");
console.log(myCar2);
*/
//Ex: Static Classes
/*

class MathUtils{
    static add(a,b)
    {
        return a+b;
    }
    static multiply(a,b)
    {
        return a*b;
    }
}

console.log(MathUtils.add(5,10)); // output: 15
console.log(MathUtils.multiply(5,10)); //output: 50

*/

//Inheritance

//parent class
class Car{
    constructor(brand){
        this.carname = brand; // Assing the value 'brand' to the 'carname' property
    }
    present(){
        return 'I have a '+ this.carname;
    }
}
//child class
class Model extends Car{
    constructor(brand,mod){
        super(brand); //call the constructor of the parent class
        this.model = mod;
    }
    show(){
        return this.present()+',it is a '+this.model;
    }
}
//creating an instance of the Model class
let myCar = new Model("Ford","Mustang");
console.log(myCar.show()); //Output:"I have a Ford, it is a mustang"
