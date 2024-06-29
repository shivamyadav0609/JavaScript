// const student={
//     name:'Shiv',
//     marks:56,
//     talk:function(){
//         // do not use arrow function for this keyword
//         console.log(`my marks are ${this.name}`);
//     }
// }
// student.talk();

// const age =26;
// // const message="my age is"+ age;
// // console.log(message);
// const message=`my age is ${age}`;
// console.log(message)


// class vehicle {
//     constructor() {
//         this.model= "xuv";
//         this.wheels=4;



//     }

// }

// const obj1 = new vehicle();
// console.log(obj1);
class vehicle {
    constructor(model,wheels) {
        this.model= model;
        this.wheels=wheels;



    }
    // function in class
    start(){
        console.log("vehicle started");
    }

} 
const obj1 = new vehicle("sedan",6);
console.log(obj1); 

const obj2=new vehicle("abc",4);
 
obj1.start();

// json
 const jsonstring='{"name":"Shivam"}';
 const obj=JSON.parse(jsonstring);

console.log(obj);
const s=JSON.stringify(obj1);
console.log(s)

