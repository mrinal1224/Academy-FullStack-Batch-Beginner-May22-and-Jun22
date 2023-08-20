// starting at 9:10 Sharp

// JS OOPS

// 1.remove all undefined and null properties from a given Object
// const obj1 = {
//     a: 1,
//     b: null,
//     c: undefined,
//     d: 'Hello',
//     e : null,
//     f : 12345,
//     g : undefined
// }
// // solution 
// function removeNullUndefined(obj){

//     for(let key in obj ){
//         if(obj.hasOwnProperty(key)){
//             if(obj[key]=== null || obj[key]===undefined){
//                 delete obj[key]
//             }
//         }
//     }

//     return obj

// }


// console.log(removeNullUndefined(obj1))



//2 . Merge two sorted Arrays in Ascending Order and Remove Duplicates

// let arr1 = [1, 4, 6, 8]
// let arr2 = [2, 4, 6, 6, 8]

// let arr3 = [...arr1 , ...arr2]
// arr3.sort((a ,b) => a-b)
// arr3 = [...new Set(arr3)]
// console.log(arr3)



//3 


// const user = {
//     firstName: 'Mrinal',
//     getName : function() {
//       const firstName = 'Stevee!!';
//       return this.firstName;
//     }
//   };
//   console.log(user.getName()); // What is logged?


//   4 . 

//   function makeUser() {
//     return {
//       name: "John",
//       ref:function(){
//         return (this.name)
//       }
//     };
//   }

//   let user = makeUser();

//   console.log( user.ref()); // What's the result?


// 5.

// let user = {
//     name: 'Stevee',
//     logMessage: function () { console.log(this.name); }
// }


// setTimeout(() => { user.logMessage() }, 1000);



// 6.  // AWS , Navi , Razorpay

// Problem Statement -- This Question was asked in AWS , 2YOE

//input - 
// piping

// const val = { salary: 10000 };
// const getSalary = (person) => person.salary
// const addBonus = (netSalary) => netSalary + 1000; // 11000
// const deductTax = (grossSalary) => grossSalary - (grossSalary * .3); // 7700

// create the pipe method which will execute all the functions 

// rest operator
// const pipe = (...fns) => {
//     return (val) => {
//         fns.forEach((fn) => {
//             val = fn(val)
//         })
//         return val
//     }

// }

// const result = pipe(
//     getSalary,
//     addBonus,
//     deductTax,

// )(val);

// console.log(result);


// navi(flipkart) // 4YOE - SDE2



// output = 143545000


// function computeAmount() {
//     let temp = {
//         total: 0,

//         lacs: function (val) {
//             this.total += val * Math.pow(10, 5)
//             return this
//         },
//         crore: function (val) {
//             this.total += val * Math.pow(10, 7)
//             return this
//         },
//         thousand: function (val) {
//             this.total += val * Math.pow(10, 3)
//             return this
//         },

//         value : function(){
//                 return this.total
//         }

//     }

//     return temp
// }

// const total = computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();

// console.log(total)


// Razorpay , 5YOE (SDE2 , SDE3)

// create this get method which will take an object and a key will be passed in form of a stirng






function get(obj , path ){
    path = path.replaceAll('[' , '.')
    path = path.replaceAll(']' , '')

    // .1.1

    const keys = path.split('.').filter(Boolean)
    //console.log(keys) // ['1' , '1']

    let current = obj

    for(let key of keys){
        current = current[key]

        if(current===undefined){
            return undefined
        }
    }

    return current
}

console.log(get([{ developer: "Tom" } , [0, null] ] , "[1][1]"));


console.log(get({ developer: "Software Engineer" }, "developer"));
console.log(get({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName"));
console.log(get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]"));
console.log(get([{ developer: "Tom" }, [0, null]], "[1][3]"));



















// Output:
// 'Software Engineer'
// 'Cruz'
// '0'
// null
// undefined































































