//! Print factorial of a number

let choice = 0;
let c = Number(prompt("Enter No.🤔"));
let option = check(c);
let f = 1;

function  fact(n1){
    for(let i=2; i<=n1; i++){
    f = f * i;}
    alert(`Factorial of ${c} is ${f}🤓`);
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
            alert("Oops...☹️"+"\n"+"Your number is less then 0 or anything😟") 
            alert("Your number is not a natural number🤦🏻‍♀️ " + " Factorial calculated only for +ve number😶 "+"So, Please choose such number which is greater then zero...Thank You!!😇");
            break;
    case 1:
            alert("Yeah...💃🏻"+"\n"+"Your number is either 0 or 1🤗")
            alert(`Factorial of ${c} is 1🤓`);
            break;
    case 2:
            alert("Yeah...💃🏻"+"\n"+"Your number is greater than 1🤗")
            fact(c);   
        }
