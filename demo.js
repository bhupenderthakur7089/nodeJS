// const product=(a,b)=>a*b;
// console.log(product(4,7));

// let student={
//     name:'aryan',
//     age:34,
//     hobbies:['reading','trekking','coding'],
//     showInfo(){
//         console.log(`Name is ${this.name}, age is ${this.age} and hobbies are ${this.hobbies}`)
//     }
// }
// student.showInfo();

// let fruits = ['apple', 'oranges', '', 'mango', '', 'lemon'];
// console.log(fruits.map((fruit) => {
//     if (fruit == '') {
//         return 'empty string';
//     }else return fruit;
// }))

// const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}

// console.log(obj1)

// console.log(obj2)

function disp() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('c');
            console.log('d');
            resolve();
        }, 2000);

    })

}

async function display() {

    await disp();

}

console.log('a');

console.log('b');

display().then(()=>console.log('e'));