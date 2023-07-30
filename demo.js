const product=(a,b)=>a*b;
console.log(product(4,7));

let student={
    name:'aryan',
    age:34,
    hobbies:['reading','trekking','coding'],
    showInfo(){
        console.log(`Name is ${this.name}, age is ${this.age} and hobbies are ${this.hobbies}`)
    }
}
student.showInfo();