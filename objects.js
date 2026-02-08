let farmInfo = {
    name: "Coco hub",
    ownerName: "Kavin",
    contactMobile: "0987654321",
    mail: "cocohub@gmail.com",
    getOwnerContact: function() {
        return this.ownerName + ' is the founder of ' + this.name; 
    }
}

console.log(farmInfo.getOwnerContact); //[Function: getOwnerContact]
console.log(farmInfo.getOwnerContact()); //Kavin is the founder of Coco hub

//Constructive function

function Person(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName

    this.getFullName = function() {
        return firstName + ' ' + lastName;
    }

}

let person = new Person('Kavin', 'Manudheeran');

console.log(person); // returns full object
console.log(person.getFullName()); //Kavin Manudheeran


let withoutNew = Person('Sibi', 'Kavin');
console.log(withoutNew.firstName); //TypeError: Cannot read properties of undefined (reading 'firstName')


// For - In

Array.prototype.foo = 100;

const items = [10, 20, 30];
let total = 0;

for (var prop in items) {
  console.log({ prop, value: items[prop] });
  total += items[prop];
}
console.log(total);