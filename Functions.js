                                                             /! FUNCTION /


//! Nested function call
// let a = function(){
//     console.log("Hello a");
//     b();
//     }
// let b = function(){ //this will not be run because function a() calls infinite times
//    console.log("Hello b");
// }
// let c = function(){
//     console.log("Hello c");
//     a();
// }
// c();

/* 
? Hello c
? Hello a
? Hello b
*/





//! Direct recursion
// function a(n){
//     if(n<=5)
//     {
//         console.log(typeof n, typeof "Hello a");
//         a(n+1);
//     }
//     if(n<3){
//         b();
//     }
//     // for(let q=1, let w=1; q<a(), w=b(); q++, w++){

//     // }

// }
// function b(){ 
//    console.log("Hello b");
// }
// function c(){
//     console.log("Hello c");
//     a(1);
//     // b();
// }
// c(); 

/* Output:-
? Hello c
? 1 a
? 2 a
? 3 a
? 4 a
? 5 a
? Hello b
? Hello b
*/        



//! Nested function : Function within a function
// function a(n1,n2){
//     result = n1+n2;
//     console.log(`Sum = ${result}`);
//     function b(n1,n2){
//         result = n1-n2;
//         console.log(`Subtract = ${result}`);
//         function c(n1,n2){
//             result = n1*n2;
//             console.log(`Multiply = ${result}`);
//         }
//         c(n1,n2);
//     }
//     b(n1,n2);
// }
// a(3,2);  

/* Output:-
? Sum = 5
? Subtract = 1
? Multiply = 6
*/    




//! Indirect recursive call
// function k(n1){
//     if(n1>0)
//     {
//         console.log(n1);
//         b(n1-1);
//     }
// }
// function b(n2){
//     if(n2>0)
//     {
//         console.log(n2);
//         k(n2-3);
//     }
// }
// k(12); 

/*  output:-
? 12 
? 11
? 8
? 7
? 4
? 3 
 */ 




//! Simple function : Check for function scope
// let age = 10;
// if(age > 18){
//     isEligible();
//     function isEligible(){
//         console.log('Yes');
//     }
//     isEligible();
// } else {
//     isEligible();
//     function isEligible(){
//         console.log('No');
//     }
// }
// isEligible();

/* Output:-
! If age>18       
? Yes
? Yes
? Yes
! else
? No
? No
*/





//! Function without name : Check for function scope
// let age = 10;
// if(age > 18){
//     //M();    //! Cannot access before initialization
//     let M = function (){
//         console.log('Yes'); 
//     }
//     M();  //It will be print.
// } else {
//     // M();  //! Cannot access before initailization
//     let M = function (){
//         console.log('No');
//     }
//     M();   //It will be print.
// }
//M(); //! Not defined

/* Output:-
! If age>18       
? Yes
! else
? No
*/




//! Print natural number
// function natural(a){ 
//     for(i=1; i<=a; i++) //for loop using for printing natural number
//     {
//         console.log(i); //use for printing number
//     }
// }
// natural(parseInt(prompt("Enter number"))); //function calling
/* Output:- Example: Enter number 10
? 1
? 2
? 3
? 4
? 5
? 6
? 7
? 8
? 9
? 10
 */



//! Add natural number
// let sum = 0;
// function natural(n){ 
//     let i =1;
//     while(i<=n) //while loop using for iterating a loop till your choice
//     {
//         sum = sum + i;
//         i++ 
//     }
//     console.log(sum);//sum 10 natural number
// }
// natural(parseInt(prompt("Enter a number"))); //function calling
/* Output:- Example: Enter number 10
? 55
 */


//! Add natural number
// let sum = 0;
// function natural(n){ 
//     let i =1;
//     while(i<=n) //while loop using for iterating a loop till your choice
//     {
//         sum = sum + i;
//         i++ 
//     }
//     console.log(sum);//sum 10 natural number
// }
// natural(parseInt(prompt("Enter a number"))); //function calling
/* Output:- Example: Enter number 10
? 55
 */



//! Add natural number
// let sum = 0;
// function natural(n){ 
//     let i =1;
//     do //while loop using for iterating a loop till your choice
//     {
//         sum = sum + i;
//         i++ 
//     }while(i<=n)
//     console.log(sum);//sum 10 natural number
// }
// natural(parseInt(prompt("Enter a number"))); //function calling



//! Print factorial of a number

let choice = 0;
let c = parseInt(prompt("Enter No.🤔"));
let option = check(c);
let f = 1;

function  fact(n1){
    for(let i=1; i<=n1; i++){
    f = f * i;}
    alert(`Factorial of ${c} = ${f}🤓`);
}

function check(c){
    if(c<0){
        choice = 0;
    }
    else if(c == 0 || c == 1){
        choice = 1;
    }
    else{
        if(parseInt(c))
            choice = 2;
    }
    return choice;
}

switch(option){
    case 0:
            alert("Oops...🥺☹️"+"\n"+"Your number is less then 0 or anything😑") 
            alert("Your number is -ve while factorial work only for +ve number so choose such number which is greater then zero...Thank You!!😇");
            break;
    case 1:
            alert("Yeah...🥳💃🏻"+"\n"+"Your number is either 0 or 1🤗")
            alert(`Factorial of ${c} = 1🤓`);
            break;
    case 2:
            alert("Yeah...🥳💃🏻"+"\n"+"Your number is greater than 1🤗")
            fact(c);   
        }






