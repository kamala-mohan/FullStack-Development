//METHOD1

function removeDuplicates(arr){
    let obj = {};
    for(let i =0;i<arr.length;i++){
        if(obj[arr[i]]){  //checking
            obj[arr[i]] += 1;
        }
        else{
            obj[arr[i]] = 1;
        }

    }
    console.log(obj);
    return Object.keys(obj);
}
arr = ['a','b','c','a','d','a','b'];

console.log(removeDuplicates(arr));




//METHOD 2

// function removeDuplicates(arr){
//     let obj = {};
//     for(let i =0;i<arr.length;i++){
//          obj[arr[i]] = 1;
        
//     }
//     return Object.keys(obj);
// }
// arr = ['a','b','c','a','d','a','b'];
// console.log(removeDuplicates(arr));