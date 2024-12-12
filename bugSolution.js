function myFunc() {
  console.log(this);
}

// Solution 1: Binding 'this'
const boundMyFunc = myFunc.bind({ message: "Bound this" });
boundMyFunc();

// Solution 2: Using an arrow function
const arrowMyFunc = () => {
  console.log(this); // 'this' will inherit from its surrounding scope
};
arrowMyFunc();