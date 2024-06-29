const a=[1,2,3,4,5,6,7,8];
function isEven(num){
    return num%2==0;
} 
function isOdd(num){
    return num%2 !=0 
}
//  const b= a.filter(isEven);
const b= a.filter((element,index,arr)=>{
    //console.log(element,index,arr);
    return true;
}); 
 console.log(b);

 function square(num)
 {
    return num*num;

 }


/// console.log(a)

         //map

         const c=a.map(square);
         console.log(c);
const found=a.find((element)=>element%2==0)
// return the first value for which the above condition is true
console.log(found);

const students =[ 
 {
  name:"A",
  marks:12

},  {
    name:"B",
    marks:32
  
  }, {
    name:"C",
    marks:62
  
  }, {
    name:"D",
    marks:72
  
  }
]
const found1=students.find((element)=>{
    return element.marks>50;
})
const found2=students.filter((element)=>{
    return element.marks>50;
})
console.log(found1)
console.log(found2)
