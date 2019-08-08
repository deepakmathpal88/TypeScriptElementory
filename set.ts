let mySet = new Set();
mySet.add(1);
mySet.add(2);
console.log(mySet);
mySet.add(2);
mySet.add(3);
console.log(mySet);
//Check value is present or not
console.log(mySet.has(3));

//Size of Set
console.log('Size is ' + mySet.size);

//Delete a value from set
console.log(mySet.delete(6));              // true
 
//Clear whole Set
mySet.clear();                //Clear all entries
console.log(mySet);

let diceEntries = new Set();
 
diceEntries.add(1).add(2).add(3).add(4).add(5).add(6);

//Iterate over set entries
for(let currentNumber of diceEntries)
{
    console.log(" with forloop " +currentNumber);
}

//Iterate set entries with forEach
diceEntries.forEach(function (value)
{
console.log("with for each" + value);
})