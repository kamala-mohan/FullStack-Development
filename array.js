const cities = []; //empty array

let city = ['London','Mumbai','Chennai'];
city[0] = 'Delhi';     //over writes the value at 0th index
city[3] = ['karnataka' , 'bangalore'];  //nested arrays
//add element to the end of the array
city.push('Califonia');//push adds ele in the end
console.log(city); 
city.pop();
console.log(city);
console.log(city.length);
// for(let i =0;i<city.length;i++){
//     console.log(city);
// }
// console.log(city[5]); //doesnt throw an error it by default gives undefined

// city[9] = 'bangalore'; //we can directly put in any index
// console.log(city);    


//heterogeous values
// const data = ['kamala','is','working','google','123','true'];
// console.log(data);

//using new keyword
// const ele = new Array(5);
// ele[9] = 'hello';
// console.log(ele.length);   //gives 10 based on the index


//add element to the end of the array

 