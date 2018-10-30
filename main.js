// // object with function attribute
// function Person2(name, age) {
//     this.name = name;
//     this.age = age;
//     this.speak = function(greeting) {
//         console.log('Hi, I am ' + this.name + ' and I am ' + this.age + '. ' + greeting);
//     }
// }
//
// // pass to variable, lost context
// var p1 = new Person2('richard', 20);
// var f = p1.speak;


//
// var a = 1;
// function fun1() {
//     var b = 2;
//     function func2(param) {
//         var c = 3;
//         console.log(param + a);
//     }
//     func2(10);
// }
// fun1();

//
// function abc() {
//     for (var i = 0; i < 10; i++) {
//         console.log("setTimeout " + i);
//         setTimeout(function () {
//             console.log("call with " + i);
//             console.log(i);
//         }, 3000);
//     }
//     console.log("setTimeout Finished with " + i);
//
// }
// abc();


// function abc() {
//     for (var i = 0; i < 10; i++) {
//         (function(e) {
//             setTimeout(function () {
//                 console.log(e);
//             }, 1000);
//         })(i);
//     }
//     console.log("setTimeout finished with " + i);
// }
//
// abc();


// var add = (function () {
//     var counter = 0;
//     return function () {
//         return counter += 1;
//     }
// })();
//
// add();

// function ex1_var() {
//     if (true) {
//         var a = 2;
//     }
//     console.log(a); // 2
// }
// ex1_var();


let a, b, rest;
[a, , b] = [1,2,3];
console.log(a); // 1
console.log(b); // 3


[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]





