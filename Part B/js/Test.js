import BinarySearchTree from "./BinarySearchTree.js";
import { Person, Employee, Student } from "./People.js";

const NUM_BINS = 5;
const KEY_LENGTH = 8;

function printBST(header, tree) {
    let text = tree.toString() + "\n";
    console.log(header + "\n" + text);
    let outputDisplay = document.getElementById("output-display");
    text = text.replaceAll(/(?:\r\n|\r|\n)/g, '<br>');
    text = text.replaceAll(" ", '&nbsp;');
    outputDisplay.innerHTML += text;
}

function addPersonToBST(person, tree) {
    tree.putValue(person.key, person);
    printBST("Current Binary Search Tree:", tree);
}

let tree = new BinarySearchTree(KEY_LENGTH);

// // DEMONSTRATE ADDING VALUES TO THE BST, WHICH INCLUDES THE NEED TO MAKE THE BST BIGGER
// addPersonToBST(new Student(tree.generateKey(), "George", "Harrison", 4.0), tree);
// addPersonToBST(new Employee(tree.generateKey(), "Paul", "McCartney", 80000), tree);
// addPersonToBST(new Employee(tree.generateKey(), "Ringo", "Starr", 40000), tree);
// addPersonToBST(new Person(tree.generateKey(), "Chuck", "Berry"), tree);
// addPersonToBST(new Student(tree.generateKey(), "Mick", "Jagger", 3.5), tree);
// addPersonToBST(new Student(tree.generateKey(), "Jimi", "Hendrix", 3.6), tree);
// addPersonToBST(new Person(tree.generateKey(), "Roger", "Waters"), tree);

// // DEMONSTRATE MAKING KEYS AND ADDING VALUES TO THE BST    
// let jlKey = tree.generateKey();
// tree.putValue(jlKey, new Student(jlKey, "John", "Lennon", 3.8));
// let cwKey = tree.generateKey();
// tree.putValue(cwKey, new Student(cwKey, "Charlie", "Watts", 3.1));
// let dgKey = tree.generateKey();
// tree.putValue(dgKey, new Employee(dgKey, "David", "Gilmour", 120000));
// printBST("\nAfter Changing 3 Items", tree);

// // DEMONSTRATE GETTING VALUES FROM THE BST
// let p = tree.getValue(jlKey);
// console.log("\nget " + jlKey + ": " + p.toString() + "\n");
// p = tree.getValue(cwKey);
// console.log("\nget " + cwKey + ": " + p.toString() + "\n");
// p = tree.getValue(dgKey);
// console.log("\nget " + dgKey + ": " + p.toString() + "\n");
// p = tree.getValue("AAAAAAAA");
// console.log(p);

// // NOW LET'S TRY REPLACING THE DATA IN THE ABOVE THREE
// tree.putValue(jlKey, new Student(jlKey, "Otis", "Redding", 3.5));
// tree.putValue(cwKey, new Student(cwKey, "Keith", "Richards", 3.1));
// tree.putValue(dgKey, new Student(dgKey, "Bill", "Withers", 3.4));
// printBST("\nAfter Changing 3 Items", tree);

// // AND DEMONSTRATE REMOVING ITEMS FROM THE BST
// tree.removeValue(jlKey);
// printBST("\nAfter Removing Otis Redding", tree);

// tree.removeValue(cwKey);
// printBST("\nAfter Removing Keith Richards", tree);

// tree.removeValue(dgKey);
// printBST("\nAfter Removing Bill Withers", tree);

// My Test Cases:

let jwKey = tree.generateKey();
tree.putValue(jwKey, new Person(jwKey, "John", "Wick"));
let jjKey = tree.generateKey();
tree.putValue(jjKey, new Student(jjKey, "Johnathan", "Jin", 3.5));
let xzKey = tree.generateKey();
tree.putValue(xzKey, new Student(xzKey, "Xiao", "Zheng", 3.7));
let mpKey = tree.generateKey();
tree.putValue(mpKey, new Employee(mpKey, "Mom", "Parent", 75000));
let dpKey = tree.generateKey();
tree.putValue(dpKey, new Employee(dpKey, "Dad", "Parent", 85000));
printBST("Current Binary Search Tree:", tree);
//Replacing a value with known key. Replaced value is the same object as the removed value.
tree.putValue(mpKey, new Employee(mpKey, "Brother", "Sibling", 100000))
printBST("Current Binary Search Tree:", tree);
//Replacing a value with known key. Replaced value is different object as the removed value.
tree.putValue(jwKey, new Student(jwKey, "Johnny", "Ou", 3.8));
printBST("Current Binary Search Tree:", tree);
//Resetting the entire Binary Search tree, and a node to tree
tree.root = null;
tree.putValue(jwKey, new Person(jwKey, "John", "Wick"));
printBST("Current Binary Search Tree:", tree);
//Adding another value to the same tree
tree.putValue(jjKey, new Student(jjKey, "Johnathan", "Jin", 3.5));
printBST("Current Binary Search Tree:", tree);
//Reset the BST to empty, add a brand new object to tree
tree.root = null;
let swKey = tree.generateKey();
tree.putValue(swKey, new Employee(swKey, "Steven", "Wang", 120000));
printBST("Current Binary Search Tree:", tree);
//Testing insertion to Tree with known comparison values.
tree.root = null;
let aaKey = "AAAAAAAA"
let bbKey = "BBBBBBBB"
let ccKey = "CCCCCCCC"
let ddKey = "DDDDDDDD"
let eeKey = "EEEEEEEE"
let ffKey = "FFFFFFFF"
let ggKey = "GGGGGGGG"
tree.putValue(ddKey, new Person(ddKey, "D", "D"));
tree.putValue(bbKey, new Person(bbKey, "B", "B"));
tree.putValue(ffKey, new Person(ffKey, "F", "F"));
tree.putValue(aaKey, new Person(aaKey, "A", "A"));
tree.putValue(ccKey, new Person(ccKey, "C", "C"));
tree.putValue(eeKey, new Person(eeKey, "E", "E"));
tree.putValue(ggKey, new Person(ggKey, "G", "G"));
printBST("Current Binary Search Tree:", tree);

//Testing Insertion to Tree, expect all values to the right of tree.
tree.root = null;
tree.putValue(aaKey, new Person(aaKey, "A", "A"));
tree.putValue(bbKey, new Person(bbKey, "B", "B"));
tree.putValue(ccKey, new Person(ccKey, "C", "C"));
tree.putValue(ddKey, new Person(ddKey, "D", "D"));
tree.putValue(eeKey, new Person(eeKey, "E", "E"));
tree.putValue(ffKey, new Person(ffKey, "F", "F"));
tree.putValue(ggKey, new Person(ggKey, "G", "G"));
printBST("Current Binary Search Tree:", tree);

//Testing Insertion to the Tree, expecting all values to the left of tree.
tree.root = null;
tree.putValue(ggKey, new Person(ggKey, "G", "G"));
tree.putValue(ffKey, new Person(ffKey, "F", "F"));
tree.putValue(eeKey, new Person(eeKey, "E", "E"));
tree.putValue(ddKey, new Person(ddKey, "D", "D"));
tree.putValue(ccKey, new Person(ccKey, "C", "C"));
tree.putValue(bbKey, new Person(bbKey, "B", "B"));
tree.putValue(aaKey, new Person(aaKey, "A", "A"));
printBST("Current Binary Search Tree:", tree);

//Ulitizing getValue to change the value of the data with a known Key. (Only works in JS due to access)
// let a = tree.getValue(jjKey);
// console.log(a);
// a.gpa = 4.0;
// printBST("Current Binary Search Tree:", tree);

