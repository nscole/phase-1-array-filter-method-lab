// // Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']


function findMatching(drivers, firstname){
    let array = drivers.filter(function (driver){
        return driver.toLowerCase() === firstname.toLowerCase();
    })  
    console.log(array);
     return array;
}

function fuzzyMatch(drivers, letters) {
    let array = drivers.filter(function (driver){
        return driver.startsWith(letters);
    })
    console.log(array);
    return array;
}

function matchName(drivers, title){
    let array = drivers.filter(function(driver){    
        return driver.name === title;
    })
    console.log(array);
    return array;
}



// * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
//   as arguments for querying the array, and returns all drivers whose names begin
//   with the provided letters.


// 1) returns a driver if beginning provided letters match
// 2) does not return drivers if only middle or ending letters match
// 3) does not return drivers if only middle or ending letters match