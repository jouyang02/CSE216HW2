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

// DEMONSTRATE ADDING VALUES TO THE BST, WHICH INCLUDES THE NEED TO MAKE THE BST BIGGER
addPersonToBST(new Student(tree.generateKey(), "George", "Harrison", 4.0), tree);
addPersonToBST(new Employee(tree.generateKey(), "Paul", "McCartney", 80000), tree);
addPersonToBST(new Employee(tree.generateKey(), "Ringo", "Starr", 40000), tree);
addPersonToBST(new Person(tree.generateKey(), "Chuck", "Berry"), tree);
addPersonToBST(new Student(tree.generateKey(), "Mick", "Jagger", 3.5), tree);
addPersonToBST(new Student(tree.generateKey(), "Jimi", "Hendrix", 3.6), tree);
addPersonToBST(new Person(tree.generateKey(), "Roger", "Waters"), tree);

// DEMONSTRATE MAKING KEYS AND ADDING VALUES TO THE BST    
let jlKey = tree.generateKey();
tree.putValue(jlKey, new Student(jlKey, "John", "Lennon", 3.8));
let cwKey = tree.generateKey();
tree.putValue(cwKey, new Student(cwKey, "Charlie", "Watts", 3.1));
let dgKey = tree.generateKey();
tree.putValue(dgKey, new Employee(dgKey, "David", "Gilmour", 120000));
printBST("\nAfter Changing 3 Items", tree);

// DEMONSTRATE GETTING VALUES FROM THE BST
let p = tree.getValue(jlKey);
console.log("\nget " + jlKey + ": " + p.toString() + "\n");
p = tree.getValue(cwKey);
console.log("\nget " + cwKey + ": " + p.toString() + "\n");
p = tree.getValue(dgKey);
console.log("\nget " + dgKey + ": " + p.toString() + "\n");
p = tree.getValue("AAAAAAAA");
console.log(p);

// NOW LET'S TRY REPLACING THE DATA IN THE ABOVE THREE
tree.putValue(jlKey, new Student(jlKey, "Otis", "Redding", 3.5));
tree.putValue(cwKey, new Student(cwKey, "Keith", "Richards", 3.1));
tree.putValue(dgKey, new Student(dgKey, "Bill", "Withers", 3.4));
printBST("\nAfter Changing 3 Items", tree);

// AND DEMONSTRATE REMOVING ITEMS FROM THE BST
tree.removeValue(jlKey);
printBST("\nAfter Removing Otis Redding", tree);

tree.removeValue(cwKey);
printBST("\nAfter Removing Keith Richards", tree);

tree.removeValue(dgKey);
printBST("\nAfter Removing Bill Withers", tree);

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

//GET VALUE TESTS
tree.root = null;
//Testing to retreive value when tree is empty
let test1 = tree.getValue(jwKey);
console.log(test1);
if (test1 === null) console.log(true);
//Testing to Retrieve data of a known key in the tree
tree.putValue(jwKey, new Person(jwKey, "John", "Wick"));
tree.putValue(jjKey, new Student(jjKey, "Johnathan", "Jin", 3.5));
tree.putValue(xzKey, new Student(xzKey, "Xiao", "Zheng", 3.7));
tree.putValue(mpKey, new Employee(mpKey, "Mom", "Parent", 75000));
tree.putValue(dpKey, new Employee(dpKey, "Dad", "Parent", 85000));
printBST("Current Binary Search Tree:", tree);
let test2 = tree.getValue(jjKey);
console.log("Expecting the data of Johnathan Jin with GPA of 3.5 to be retrieved");
console.log(test2.toString());
//Testing to Retrieve data of a known key that is not in the tree
console.log("Expecting null to be retrieved and print: 'Key Not Found!'");
let test3 = tree.getValue("ABCDEFGH");
console.log(test3);
//Testing to retrieve the root node of the tree
console.log("Expecting to Retrieve John Wick");
let test4 = tree.getValue(jwKey);
console.log(test4.toString());
//Testing to retrieve the last item added to tree
let test5 = tree.getValue(dpKey);
console.log(test5.toString());
//Ulitizing getValue to change the value of the data with a known Key. (Only works in JS due to access)
let a = tree.getValue(jjKey);
console.log(a);
a.gpa = 4.0;
printBST("Current Binary Search Tree:", tree);

//Remove Value Tests:
tree.root = null;
//Testing to remove a value when tree is empty
console.log("Expecting to print tree is empty and does nothing");
tree.removeValue(jjKey);

tree.putValue(jwKey, new Person(jwKey, "John", "Wick"));
tree.putValue(jjKey, new Student(jjKey, "Johnathan", "Jin", 3.5));
tree.putValue(xzKey, new Student(xzKey, "Xiao", "Zheng", 3.7));
tree.putValue(mpKey, new Employee(mpKey, "Mom", "Parent", 75000));
tree.putValue(dpKey, new Employee(dpKey, "Dad", "Parent", 85000));
printBST("Current Binary Search Tree:", tree);
//Testing to remove a key that does not exist in the BST
tree.removeValue(aaKey);
console.log("Expected the printed BST to maintain the same as the original tree")
printBST("Current Binary Search Tree:", tree);
// Testing to remove a key that exist in the BST
tree.removeValue(xzKey);
console.log("Expecting Xiao Zheng GPA 3.7 to be removed");
printBST("Current Binary Search Tree:", tree);
// Reset Tree
tree.root = null;
tree.putValue(jwKey, new Person(jwKey, "John", "Wick"));
tree.putValue(jjKey, new Student(jjKey, "Johnathan", "Jin", 3.5));
tree.putValue(xzKey, new Student(xzKey, "Xiao", "Zheng", 3.7));
tree.putValue(mpKey, new Employee(mpKey, "Mom", "Parent", 75000));
tree.putValue(dpKey, new Employee(dpKey, "Dad", "Parent", 85000));
printBST("Current Binary Search Tree:", tree);
// Removing a leaf node of the BST (No left or Right child)
tree.removeValue(dpKey);
printBST("Current Binary Search Tree:", tree);
//Rebuilding a new tree
let tree2 = new BinarySearchTree(KEY_LENGTH);
tree2.putValue(ddKey, new Person(ddKey, "D", "D"));
tree2.putValue(bbKey, new Person(bbKey, "B", "B"));
tree2.putValue(ffKey, new Person(ffKey, "F", "F"));
tree2.putValue(aaKey, new Person(aaKey, "A", "A"));
tree2.putValue(ccKey, new Person(ccKey, "C", "C"));
tree2.putValue(eeKey, new Person(eeKey, "E", "E"));
tree2.putValue(ggKey, new Person(ggKey, "G", "G"));
printBST("Current Binary Search Tree:", tree2);
//Removing a child node of the BST
tree2.removeValue(ggKey);
console.log("Expecting the right node of key 'FFFFFFFF' to be removed");
printBST("Current Binary Search Tree:", tree2);
//Removing a parent node of the BST with 1 child
tree2.removeValue(ffKey);
console.log("Expecting node with key 'FFFFFFFF' to be removed and key 'EEEEEEEE' become the new node to right of D");
printBST("Current Binary Search Tree:", tree2);
//Removing a parent node of the BST with 2 children node of the left subtree
tree2.removeValue(bbKey);
console.log("Expecting node with key 'BBBBBBBB' to be removed and 'AAAAAAAA' to be the new node with right child of 'CCCCCCCC'");
printBST("Current Binary Search Tree:", tree2);
//RESET TREE
tree2.root = null;
tree2.putValue(ddKey, new Person(ddKey, "D", "D"));
tree2.putValue(bbKey, new Person(bbKey, "B", "B"));
tree2.putValue(ffKey, new Person(ffKey, "F", "F"));
tree2.putValue(aaKey, new Person(aaKey, "A", "A"));
tree2.putValue(ccKey, new Person(ccKey, "C", "C"));
tree2.putValue(eeKey, new Person(eeKey, "E", "E"));
tree2.putValue(ggKey, new Person(ggKey, "G", "G"));
printBST("Current Binary Search Tree:", tree2);
//Removing a parent node of the BST with 2 children node of the right subtree
tree2.removeValue(ffKey);
console.log("Remove 'FFFFFFFF' with 'EEEEEEEE' and right child of 'GGGGGGGG'");
printBST("Current Binary Search Tree:", tree2);
//RESET TREE
tree2.root = null;
tree2.putValue(ddKey, new Person(ddKey, "D", "D"));
tree2.putValue(bbKey, new Person(bbKey, "B", "B"));
tree2.putValue(ffKey, new Person(ffKey, "F", "F"));
tree2.putValue(aaKey, new Person(aaKey, "A", "A"));
tree2.putValue(ccKey, new Person(ccKey, "C", "C"));
tree2.putValue(eeKey, new Person(eeKey, "E", "E"));
tree2.putValue(ggKey, new Person(ggKey, "G", "G"));
printBST("Current Binary Search Tree:", tree2);
//REMOVING THE root node
tree2.removeValue(ddKey);
console.log("Expecting root node to be removed and replaced with the largest node of the sub left tree");
printBST("Current Binary Search Tree:", tree2);
//Removing the right sub tree after root is removed
tree2.removeValue(ffKey);
console.log("Expecting the node to be removed and replaced with the left root");
printBST("Current Binary Search Tree:", tree2);



