const num = [ 1, 2, 3, 4, 5];
const result = num.map((n) => n*2);
console.log(result);


const filterValue = [1,2,3,4,5];
const filterResult = filterValue.filter((n) => (n >= 4));
console.log(filterResult);


const forEachValue = [1,2,3,4,5];
const forEachResult = forEachValue.forEach((n) => n*2);
console.log(forEachResult);
