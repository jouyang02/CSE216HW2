import OpenAddressHashTable from "./OpenAddressHashTable.js";
import { Person, Employee, Student, Undergraduate } from "./People.js";

const NUM_BINS = 5;
const KEY_LENGTH = 8;

function printHashTable(header, hashTable) {
    let text = hashTable.toString();
    text = header + "\n" + text;
    console.log(text);
    let outputDisplay = document.getElementById("output-display");
    text = text.replaceAll(/(?:\r\n|\r|\n)/g, '<br>');
    text = text.replaceAll(" ", '&nbsp;');
    outputDisplay.innerHTML += text;
}

function addPersonToHashTable(person, hashTable) {
    hashTable.putValue(person.key, person);
    printHashTable("Current Hash Table:", hashTable);
}

let hashTable = new OpenAddressHashTable(NUM_BINS, KEY_LENGTH);

// let testKey = hashTable.generateKey();
// hashTable.removeValue(testKey);

// DEMONSTRATE ADDING VALUES TO THE HASH TABLE, WHICH INCLUDES THE NEED TO MAKE THE HASH TABLE BIGGER
addPersonToHashTable(new Student(hashTable.generateKey(), "George", "Harrison", 4.0), hashTable);
addPersonToHashTable(new Employee(hashTable.generateKey(), "Paul", "McCartney", 80000), hashTable);
addPersonToHashTable(new Employee(hashTable.generateKey(), "Ringo", "Starr", 40000), hashTable);
addPersonToHashTable(new Person(hashTable.generateKey(), "Chuck", "Berry"), hashTable);
addPersonToHashTable(new Student(hashTable.generateKey(), "Mick", "Jagger", 3.5), hashTable);
addPersonToHashTable(new Student(hashTable.generateKey(), "Jimi", "Hendrix", 3.6), hashTable);
addPersonToHashTable(new Person(hashTable.generateKey(), "Roger", "Waters"), hashTable);
// ADD UNDERGRADUATE STUDENTS TO HASH TABLE.
addPersonToHashTable(new Undergraduate(hashTable.generateKey(), "Johnathan", "Jin", 2.0, "U1"), hashTable);

// DEMONSTRATE MAKING KEYS AND ADDING VALUES TO THE HASH TABLE    
let jlKey = hashTable.generateKey();
hashTable.putValue(jlKey, new Student(jlKey, "John", "Lennon", 3.8));
let cwKey = hashTable.generateKey();
hashTable.putValue(cwKey, new Student(cwKey, "Charlie", "Watts", 3.1));
let dgKey = hashTable.generateKey();
hashTable.putValue(dgKey, new Employee(dgKey, "David", "Gilmour", 120000));
printHashTable("\nAfter Changing 3 Items", hashTable);

// DEMONSTRATE GETTING VALUES FROM THE HASH TABLE
let p = hashTable.getValue(jlKey);
console.log("\nget " + jlKey + ": " + p.toString() + "\n");
p = hashTable.getValue(cwKey);
console.log("\nget " + cwKey + ": " + p.toString() + "\n");
p = hashTable.getValue(dgKey);
console.log("\nget " + dgKey + ": " + p.toString() + "\n");

// NOW LET'S TRY REPLACING THE DATA IN THE ABOVE THREE
hashTable.putValue(jlKey, new Student(jlKey, "Otis", "Redding", 3.5));
hashTable.putValue(cwKey, new Student(cwKey, "Keith", "Richards", 3.1));
hashTable.putValue(dgKey, new Student(dgKey, "Bill", "Withers", 3.4));
printHashTable("\nAfter Changing 3 Items", hashTable);

// AND DEMONSTRATE REMOVING ITEMS FROM THE BST
hashTable.removeValue(jlKey);
printHashTable("\nAfter Removing Otis Redding", hashTable);

hashTable.removeValue(cwKey);
printHashTable("\nAfter Removing Keith Richards", hashTable);

hashTable.removeValue(dgKey);
printHashTable("\nAfter Removing Bill Withers", hashTable);

//Testing the new Undergraduate Class that is added.
addPersonToHashTable(new Undergraduate(hashTable.generateKey(), "Xiao", "Zheng", 1.0, "U4"), hashTable);

//MY TEST CASES:

let hashTable2 = new OpenAddressHashTable(NUM_BINS, KEY_LENGTH);

//Testing putValue function
let jwKey = "AAAAAAAA"
console.log(hashTable2.hashCode(jwKey));
console.log("Expected the following to be inserted into index 0");
hashTable2.putValue(jwKey, new Person(jwKey, "John", "Wick"));
printHashTable("\nADDED John Wick to Hash Table", hashTable2);
//Inserting a key with the same hashCode index as the previous key
let jjKey = "CASDASEA";
console.log(hashTable2.hashCode(jjKey));
console.log("Expecting the following to be inserted into index 1");
hashTable2.putValue(jjKey, new Student(jjKey, "Johnathan", "Jin", 3.5));
printHashTable("\nADDED Johnathan Jin to Hash Table", hashTable2);
//Inserting a second key with the same hashCode index as the previous 2 keys
let xzKey = "BBBBBAAA";
console.log(hashTable2.hashCode(xzKey));
console.log("Expecting the following to be inserted into index 2");
hashTable2.putValue(xzKey, new Student(xzKey, "Xiao", "Zheng", 3.7));
printHashTable("\nADDED Xiao Zheng to Hash Table", hashTable2);
//Inserting a key with hashCode index of 1, since there is an item in index 1 & index 2; this goes to index 3.
let mpKey = "BBBBBBAA";
console.log(hashTable2.hashCode(mpKey));
console.log("Expecting the following to be inserted into index 3");
hashTable2.putValue(mpKey, new Employee(mpKey, "Mom", "Parent", 75000));
printHashTable("\nADDED Mom Parent to Hash Table", hashTable2);

let dpKey = "BBBBAAAA";
console.log(hashTable2.hashCode(dpKey));
console.log("Expecting the following to be inserted into index 4");
hashTable2.putValue(dpKey, new Employee(dpKey, "Dad", "Parent", 85000));
printHashTable("\nADDED Dad Parent to Hash Table", hashTable2);

let ssKey = hashTable2.generateKey();
console.log(hashTable2.hashCode(ssKey));
hashTable2.putValue(ssKey, new Undergraduate(ssKey, "Sister", "Sibling", 4.0, "U4"));
printHashTable("\nADDED Sister Sibling to Hash Table", hashTable2);

//Testing getValue Function

let hashTable3 = new OpenAddressHashTable(NUM_BINS, KEY_LENGTH);

console.log(hashTable3.hashCode(jwKey));
console.log("Expected the following to be inserted into index 0");
hashTable3.putValue(jwKey, new Person(jwKey, "John", "Wick"));
printHashTable("\nADDED John Wick to Hash Table", hashTable3);

console.log(hashTable3.hashCode(jjKey));
console.log("Expecting the following to be inserted into index 1");
hashTable3.putValue(jjKey, new Student(jjKey, "Johnathan", "Jin", 3.5));
printHashTable("\nADDED Johnathan Jin to Hash Table", hashTable3);

console.log(hashTable3.hashCode(xzKey));
console.log("Expecting the following to be inserted into index 2");
hashTable3.putValue(xzKey, new Student(xzKey, "Xiao", "Zheng", 3.7));
printHashTable("\nADDED Xiao Zheng to Hash Table", hashTable3);

console.log(hashTable3.hashCode(mpKey));
console.log("Expecting the following to be inserted into index 3");
hashTable3.putValue(mpKey, new Employee(mpKey, "Mom", "Parent", 75000));
printHashTable("\nADDED Mom Parent to Hash Table", hashTable3);

console.log(hashTable3.hashCode(dpKey));
console.log("Expecting the following to be inserted into index 4");
hashTable3.putValue(dpKey, new Employee(dpKey, "Dad", "Parent", 85000));
printHashTable("\nADDED Dad Parent to Hash Table", hashTable3);

let test1 = hashTable3.getValue("IIIIIIII");
if (test1 === null) console.log(true);

//Testing retrieving object that is it natural index
let test2 = hashTable3.getValue(dpKey);
console.log(test2.toString());

//Testing retrieving object that is not it natural index
let test3 = hashTable3.getValue(mpKey);
console.log(test3.toString());



