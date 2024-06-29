
const a=[1,2,3,4,5,6];
function filterNumbers(conditionFxn){
    const b=[];
    for(let i=0;i<a.length;i++)
        {
            if(conditionFxn(a[i]))
                {
                    b.push(a[i]);
                }
        }
        return b;

}
function isEven(num){
    return num%2==0;
} 
function isOdd(num){
    return num%2 !=0 
}

const even=filterNumbers(isEven);
console.log(even);
const odd=filterNumbers(isOdd);
const odd1=filterNumbers((num)=> {
    return num%3==0;
});
console.log(odd1)

