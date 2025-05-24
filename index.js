const obj = {
  name: "Arrow vs Regular",
  arrowFunc: () => {
    console.log(this.name); // undefined
  },
  regularFunc() {
    console.log(this.name); // 'Arrow vs Regular'
  },
};
obj.arrowFunc();
obj.regularFunc();



//   nasim.person = function () {
//     console.log("persons");
//   };

//   nasim(5);

//   nasim.person();

// function hello() {
//   console.log("Hello world!");
// }

// function test() {
//   console.log("this test function");
// }

// function sayHello(func) {
//   return func;
// }
// let result = sayHello(test);

// console.log(result());

// let arr = [
//   ["Naim", "Dimla", 123], //-> class 6
//   ["Roki", "Domar", 342], //-> class 7
//   ["Shakib", "Rangpur", 223], //-> class 8
// ];

// arr[0] = ["Naim", "Dimla", 123];
// arr[1] = ["Roki", "Domar", 342];

// arr[0][0] = naim;
// arr[0][1] = Dimla;
// arr[0][2] = 123;
// arr[1][0] = Roki;
// row = 1 < 3;
// col = 0 < 3;

// for (let row = 0; row < arr.length; row++) {
//   for (let col = 0; col < arr[row].length; col++) {
//     console.log(arr[row][col]);
//   }
// }
