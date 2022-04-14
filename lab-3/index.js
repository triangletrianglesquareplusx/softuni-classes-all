//console.log('hey');
class Person{
    constructor(name){
        this.name = name;
    }
    printName(){
        console.log(this.name);
    }
}

let person = new Person('Clide');
class Animal{
    constructor(name){
        this.name = name;
    }
}

let ani = new Animal('Ani');
person.printName.call(ani);