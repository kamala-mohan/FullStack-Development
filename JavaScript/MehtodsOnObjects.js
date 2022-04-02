//freeze method does not allow to change the values nor add any new value

// const obj ={
//     prop : 'relevel'
// };

// Object.freeze(obj);
// obj.prop = 'relevels';
// delete obj.prop;         //cannot delete in freeze mode also 
// console.log(obj);


//seal() -> in this we cannot add new vals but we can change the existing porp values


// const obj ={
//     prop : 'relevel'
// };

// Object.seal(obj);
// obj.prop = 'relevels';  //we can rechange the existing the value
// console.log(obj);

//delete -> we cannot delete when sealed

//is ->for comparing 2 vals
Object.is('relevel','relevel') // returns true
Object.is('25',25) //->retuens false
Object.is([],[]);