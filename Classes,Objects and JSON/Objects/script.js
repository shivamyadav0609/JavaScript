console.log('hi');
const y={
    name:"Shivam",
    age:25,
    hobbies: ['coding','eating'],
    // nested
    foods:{
        sunday:"Pizza",
        monday:"Mango"

        
    },
    walk:function(){
        console.log("person is walking")
    }
}
// y='hello' this cannot be done
   // add boolean or anything  as below
y.isHuman=true;
const foodkey="foods";

console.log(y.name)
//no need to apply foodkey as string but needed in foods as former one is a variable
console.log(y["foods"])
//console.log(y[foodkey]);
for(const key in y)  {
        console.log(y[key]);
    }


    function getVehicle() {

        return {
            type:"car",
            wheels:4
        }

    }
    const myVehicle1=getVehicle();
    const myVehicle2=getVehicle();

    console.log(myVehicle1)
    myVehicle2.wheels=3

    console.log(myVehicle2)
    console.log(typeof myVehicle1)
    console.log(typeof getVehicle)


    // desturcturing objects
    console.log(y)


    // const myage=y.age;
    // console.log(myage)
    // const {age:myAge}=y;
    // console.log(myAge)
    
    // const {age:myAge,isHuman:myIsHuman}=y;
    // console.log(myAge,myIsHuman);
    // // these variables are of type const


   // console.log(y)
 talking(()=>{
    console.log("I am shouting")
 })
 function talking(shouting)
 {  console.log("I am talking")
    shouting();
 }


 