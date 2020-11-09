// Code your solution here
// 3 functions: 
// 1. Write findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. 
//    The function should be case insensitive.
// 2. Write fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers 
//    whose names begin with the provided letters.
// 3. Write matchName - This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array 
//    is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.
const testArr = ["Vedran", "Ogi", "Jelena", 'Erma', 'Emir', 'ogi'];
const testObj = [
    {name: "Vedran",
     age: 41},
    {name: "Ogi",
     age: 35},
    {name: "Jelena", 
     age: 70}
];
const testStr = "ogi"

// 1. findMatching 

function findMatching(arr, string) {
    let result = arr.filter(element => {
        return element.toLowerCase() === string.toLowerCase();
      });
    return result;
};

// 2. fuzzyMatch

function fuzzyMatch(arr, string) {
    let result = arr.filter(function(val){
        return val.toLowerCase().startsWith(string.toLowerCase());
      });
    return result;
};

// 3. matchName

function matchName(arr, string) {
    let result = arr.filter(function(obj){
        return obj.name.toLowerCase().startsWith(string.toLowerCase());
      });
    return result;
}



