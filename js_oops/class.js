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