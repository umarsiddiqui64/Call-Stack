let age = 25;

function displayAge() {
    console.log("The current value of age is:", age);
}

function changeAge(newAge) {
    age = newAge; 
    console.log("The updated value of age is:", age);
}

console.log("Before calling functions:");
displayAge();

console.log("\nAfter calling changeAge:");
changeAge(30);
displayAge();
