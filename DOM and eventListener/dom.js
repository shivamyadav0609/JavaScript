      //  access box 1 using id(mostly in JS)
//const box1=document.getElementById('box-1')
// console.log(box1)



      // using div
//const divs=document.getElementsByTagName('div')
// console.log(divs) helps to access particular div
//console.log(divs[3])

    //    using class name
// const container=document.getElementsByClassName('box')
// console.log(container)

// const box3=document.querySelector('.container #box-3');
// console.log(box3);

// const multi=document.queryselectorAll('.container div');
// console.log(multi[1]);

//box1.innerHTML="<h1>This is box1</h1>"

// source added during run time attribute can be changed

//document.getElementById('myImg').src="https://via.placeholder.com/100"
//    add and remove a class to any element for adding make that class in HTML like here fancy is made20n609}
//box1.classList.add('fancy')

//box1.classList.remove('fancy')


// add everything during runtime

const container = document.getElementsByClassName('container');

for (let i = 0; i < 10; i++) {
      const boxElement = document.createElement('div');
      boxElement.classList.add('box');

      container[0].append(boxElement);


}