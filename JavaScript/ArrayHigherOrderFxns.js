//1.Map fxn
//HOF is a fxn that is passed as arg or a fxn is being returned
// var arr = [1,2,3];
// var output = arr.map(n => n*2)
// console.log(output);

// var arr = [1,2,3];
// var output = arr.map(function(num){
//     return num*2;
// });
// console.log(output); 

//use of the =>
// hello = () => "hello";
// console.log(hello())


//fxn inside another fxn
// function multiplyBy(num1){
//     return function(num2){
//         return num1*num2;
//     }
// }
// var multiplyByTwo = multiplyBy(2); //multiplyBy is a fxn that returns a fxn that is stored in multiplyByTwo
// var arr = [1,2,3];
// var arrDouble = arr.map(multiplyByTwo);
// console.log(arrDouble);



//2.Filter Function -> creates the new array based on certain condition
//original array remains same
// let nums = [1,2,3,4,5,6,7,8,9,10];
// function checkEven(num){
//     if(num%2 == 0) return true;
//     else return false;
// }

// let evenNums = nums.filter(checkEven);
// console.log(evenNums);

// const prices = [1000,2000,"thousnd",500,8000,900];
// function checkPrice(num){
//     return num>2000 && !Number.isNaN(num);
// }
// let filterPrice = prices.filter(checkPrice);
// console.log(filterPrice)



//Arrow fxn
// let y = function(x,y){
//     return x*y;
// }
// let x = (x,y) => x*y;

//let myfxn = (arg1,arg2,....arg n) =>{
    //statements....
//}

// let greet = x => console.log(x); //x is basically an arg
// greet("hello");



//3.Reduce function -> takes 2 args,"accumulator" that combines a string,"currentValue" goes thru all array values
//arr.reduce(function(accumulator,currentValue),initial value)
//initial value is optional

const message = ['Relevel' ,'is','fun'];
function joinStrings(accumulator,currentValue){
    return accumulator + currentValue;
}
let joinString = message.reduce(joinStrings);
console.log(joinString);


const num = [1,2,3,4,5,6]
let hello = num.reduce((accumulator,currentValue) => accumulator + currentValue);
console.log(hello)

const expenses = [1800,2000,3000,5000,500];
const salary = 15000; //15000-1800-2000.....
let remaining = expenses.reduce(
    (accumulator,currentValue) => accumulator - currentValue,salary
);
console.log(remaining);


//forEach -> calls a fxn and iterates over the ele of the array
// can be used on maps and sets

//arr.forEach(function(currentValue,index,arr)); 
//index-optional,arr-optional

// let students = ['Johan','Kamala','sara'];
// students.forEach(myFunction2);

// function myFunction(item){
//     console.log(item);
// }

// function myFunction2(item,index,arr){
//    arr[index] = 'Hello ' + item;
// }
// console.log(students);

// students.forEach(ele =>{console.log(ele);});


//Sort -> first all 1s come n then 2s n so on...its basically sorts in lexicographically

let number = [4,12,2,36,7,8,43];
number.sort();

let city = ['Delhi','America' ,'Bangalore','Chennai'];
city.sort();

function len_compare(a,b){ //sorts based on the length
    return a.length - b.length;
}
console.log(city.sort(len_compare));


//reverse
const nums = [9,8,7,6,5,4,3,2,1];
nums.reverse();