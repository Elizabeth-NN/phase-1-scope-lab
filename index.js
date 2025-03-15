// Write your solution in this file!
var customerName='bob'
function upperCaseCustomerName(){
   customerName = customerName.toUpperCase()
    
}

console.log(customerName); // Output: 'bob'
upperCaseCustomerName()
console.log(customerName); // Output: 'BOB'
// setBestCustomer

function setBestCustomer(){
  return bestCustomer = 'not bob'
}

setBestCustomer();

console.log(bestCustomer); // Output: 'not bob'

// overwriteBestCustomer
function overwriteBestCustomer(){
    bestCustomer='maybe bob'
}
overwriteBestCustomer()
console.log(bestCustomer); // Output: 'mabe bob'\


const leastFavoriteCustomer='definitely bob'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer='i dont know'
}
changeLeastFavoriteCustomer()
console.log(leastFavoriteCustomer)
