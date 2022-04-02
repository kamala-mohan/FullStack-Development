//object in Js
       //js considers all the keys as strings by default
// const student = {
//     firstName : 'ram',
//     class : 10
// };
//firstName,class are KEYS and ram,10 are VALUES
// console.log(typeof student);

//asscessing the values
// console.log(student.firstName);
// console.log(student["class"]);

//objects inside objects
const student = {
    firstName : 'ram',
    class : 10,
    marks :{
        science:70,math:74
    }
};
console.log(student);
// console.log(student.marks);
// console.log(student.marks.math);

//we can also have fxns
// const person = {
//     name:'John',
//     age:21,
//     greet:function(){
//         console.log("Hello");
//     }
// };
// person.greet();
// console.log(person.name,person.age);


//loop thru an object
// const person = {
//     name:'John',
//     age:21,
//     greet:function(){
//         console.log("Hello");
//     }
// };
// for(const key in person){
//     console.log(key);
//     console.log(person[key]);
// }

//another way to get keys
// const keys1 = Object.keys(person);
// const keys2 = Object.values(person);
// console.log(keys1,keys2)


//object entries -> gives both keyt and value
// const animals = {lion:1,giraffe :2};
// console.log(Object.entries(animals)[1]);

 //use of assign -> basically merges 2 objs
//  const target = {a:1,b:2};
//  const source = {c:3,d:4};
//  let obj = Object.assign(target,source);
// console.log(obj);