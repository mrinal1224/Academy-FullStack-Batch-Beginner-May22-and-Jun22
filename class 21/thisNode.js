// console.log(this) -> {}

// this inside a function

// function test(){
//     console.log(this)
// }

// test() // global object

// this keyword from a function inside an object

// let obj = {
//     name : 'Adam',
//     age : 23,

//     getThis : function(){
//         console.log(this.name)
//     },

//     gender : "male"
// }

//  obj.getThis()// object itself


//  console.log(obj.child.childName)

// this keyword from a function that is inside a function inside an object
// let obj2 = {
//   name: "Steve",
//   age: 22,

//   testFunction: function f() {
//     function g() {
//       console.log(this);
//     }
//     g();
//   },
// };

// obj2.testFunction();
