// var option;
// function ageCategory(age){
//     if(0< age <=15){
//         console.log(`Your age is one ${age}`);
//         option = 1;
//         console.log(typeof option);
//     }
//     else if(15< age <=40){
//         console.log(`Your age is two ${age}`);
//         option = 2;
//     }
//     else{
//         console.log(`Your age is three ${age}`);
//         option = 3;
//     }
//     return option;
// }

// var value;
// console.log(typeof value);
// b = confirm("Do your know your category?");
// if(b == true){
//     alert("yeah...🥳");
//     ss = parseInt(prompt("Enter your age"));
//     value = ageCategory(ss);
// }
// else{
//     alert("Oops");
// }

// switch(value){
//     case 1:
//         console.log("This is a case 1");
//         alert("Child👶");
//         break;
//     case 2:
//         console.log("This is a case 2");
//         alert("Adult🧒");
//         break;
//     case 3:
//         console.log("This is a case 3");
//         alert("Old🧓");
//         break;
//     default:
//         console.log("Oops, You don't know your category!!");
//         alert("Have a nice day!!😇");
// }





// var a= prompt('what is your age');
// var b= confirm('do you want to know your catagory?');
// function doIt(x){
//     let y=0;
//     if(0<x && x<=10){
//         y=1;
//     }
//     if(10<x && x<=18){
//         y=2;
//     }
//     if(18<x && x<=30){
//         y=3;
//     }
//     if(30<x && x<=50){
//         y=4;
//     }
//     if(x>50){
//         y=5;
//     }
//     switch (y) { 
//     case 0:
//     alert('born');
//     break;
//     case 1:
//     alert('kid');
//     break;
//     case 2:
//     alert('teen');
//     break;
//     case 3:
//     alert('adult');
//     break;
//     case 4:
//     alert('settle');
//     break;   
//     case 5:
//     alert('old');
//     break;                   
//     default:
//     alert('old');
//     break;
//     }
// }
// if(b==true){
//     (doIt(a));
// }
// else{
//     alert('have a nice day');
// }

//! search() function
// let text="Hello Javascript";
// let n = text.search(/O/i);
// console.log(n);

//! replace() function
let text="Hello Javascript \n yli \n llo \n pol";
let n = text.replace(/(a|l)/g, "p");
console.log(n);
