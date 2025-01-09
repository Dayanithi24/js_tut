/*
  new space - newly created objects, smaller compared to old space, short life time
  | => 1. from space - minor gc/ scavenger, minor objects
       2. to space - intermediate objects 
            |
            v
  old space - old objects that survived 2 minor gc's, large space compared to new space, longer life span, 
  | => 1. old pointer space - contains objects that has pointer to other objects
       2. old data space - contains objects that has no pointers   major gc/ mark sweep

  large object space - contains objects that has size > threshold, mark sweep

  code space - contains the executable code converted from js code

  cell space - holds cell objects of fixed size, storing small data                                     |
                                                                                                        |
  property cell space - property objects, stores property metadata for js objects, fixed size           |   -> uniform 
                                                                                                        |       size
  map space - map objects, stores shape of js objects, includes prototype chain & property attributes   |
*/

// Stack memory

// function findArea(length, breadth){
//     const area = length * breadth;
//     return area;
// }

// const l = 10;
// const b = 20;

// const area = findArea(l, b);

// function setInterest(interest){
//     return function depositAmount(principal){
//       return function calculateInterest(time){
//         return principal * interest * time / 100;
//       }
//     }
//   }

//   const interest = setInterest(10);
//   const deposit = interest(10000);
//   const simpleInterest = deposit(1);

//   console.log(simpleInterest);

// polyfill
Array.prototype.getAllIndexOf = function (element) {
  if (element === undefined) return [];
  const arr = [];
  if (element instanceof Array){
    
  }
  for (let i = 0; i < this.length; i++) {
    if (this[i] === element) {
      arr.push(i);
    }
  }
  return arr;
};
Array.prototype.getAllLastIndexOf = function (element) {
  if (element === undefined) return [];
  const arr = [];
  for (let i = this.length-1; i >= 0; i--) {
    if (this[i] === element) {
      arr.push(i);
    }
  }
  return arr;
};

const arr = [1, 2, 1, 3, 1, 4, 5, 1];
console.log(arr.getAllIndexOf());
console.log(arr.getAllLastIndexOf());
// console.log(Array.prototype.getAllIndexOf)
