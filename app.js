let studentNames = [];


studentNames.push("Hania");
studentNames.push("Sarah");
studentNames.push("Umer");

console.log(studentNames);

let studentsNames = new  Array();
let newstudNames = [];
// studNames.push("manahil")
console.log(studentNames);

let stringArray = ["string1", "string2", "string3"];
let stringsArray = ["Hello","World", "JavaScript"];
console.log(stringsArray[2]);
stringsArray.push("New String"); 
console.log(stringsArray.length); 





let numbersArray = [1, 2, 3, 4, 5];
let numberArray = [10, 20, 30, 40, 50];
console.log(numbersArray[4]); 
numbersArray.push(40); 
console.log(numbersArray.length); 



let booleanarray = [true, false, true, false];
let booleanArray = [false, true, true];
console.log(booleanArray[7]); 
booleanArray.push(2); 
console.log(booleanArray.length); 


let mixedArray = [1, "two", true, [4, 5], { name: "Jayy", age: 25 }];
console.log(mixedArray[0]); 
console.log(mixedArray[3]); 
mixedArray.push("new element"); 

console.log(mixedArray.length); 



// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// function displayQualifications() {
//     let qualificationsList = document.getElementById("qualificationsList");

//     for (let i = 0; i <qualifications.length; i++) {
//         let listItem = document.createElement("li");
//         listItem.textContent = qualifications[i];
//         qualificationsList.appendChild(listItem);
//     }
// }

// displayQualifications(HSC);
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

console.log("Education Qualifications:");
for (let i = 0; i < qualifications.length; i++) {
  console.log(qualifications[i]);
}


let childNames = ["Hania", "Zainab", "David"];
let studentScores = [430, 380, 220];
let totalMarks = 500;

console.log("Students Scores:");
for (let i = 0; i < studentNames.length; i++) {
  let percentage = (studentScores[i] / totalMarks) * 100;
  console.log(`${studentNames[i]} - Score: ${studentScores[i]}, Percentage: ${percentage}%`);
}

let colors = ["Red", "Green", "Blue"];

console.log("Colors:", colors);

let colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);

console.log("Updated Array (After adding to the beginning):", colors);

let colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);

console.log("Updated Array (After adding to the end):", colors);

colors.unshift("Yellow", "Purple");

console.log("Updated Array (After adding two colors to the beginning):", colors);

colors.shift();

console.log("Updated Array (After deleting the first color):", colors);

colors.pop();

console.log("Updated Array (After deleting the last color):", colors);

let indexToAddColor = parseInt(prompt("Enter the index to add the color:"));
let colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAddColor, 0, colorToAdd);

console.log("Updated Array (After adding color at a specific position):", colors);


let indexToDeleteColors = parseInt(prompt("Enter the index to delete color(s):"));
let numColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDeleteColors, numColorsToDelete);

console.log("Updated Array (After deleting color(s) from a specific position):", colors);


let childrenScores = [85, 72, 93, 68, 77];

console.log("Student Scores (Before sorting):", studentScores);


studentScores.sort(function(a, b) {
  return a - b;
});

console.log("Student Scores (After sorting in ascending order):", studentScores);


let cities = ["Multan", "Gujar Khan", "Karachi", "lahore", "Mianwali"];
let selectedCities = [4];


selectedCities = cities.slice(0, 3);

console.log("Cities:", cities);
console.log("Selected Cities:", selectedCities);


var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");

console.log("Single String:", singleString);
console.log("var arr:","This", "is", "my", "cat" );



var fifoArray = [4];


fifoArray.push("Value 1");
fifoArray.push("Value 2");
fifoArray.push("Value 3");

console.log("Original Array:", fifoArray);
var value1 = fifoArray.shift(2);
var value2 = fifoArray.shift(3);
var value3 = fifoArray.shift(1);

console.log("Value 1:", value1);
console.log("Value 2:", value2);
console.log("Value 3:", value3);
console.log("Remaining Array:", fifoArray);




var lifoArray = [8];


lifoArray.push("Value 1");
lifoArray.push("Value 2");
lifoArray.push("Value 3");

console.log("Original Array:", lifoArray);


var value3 = lifoArray.pop();
var value2 = lifoArray.pop();
var value1 = lifoArray.pop();

console.log("Value 1:", value2);
console.log("Value 2:", value1);
console.log("Value 3:", value3);
console.log("Remaining Array:", lifoArray);


// va<option>" + phoneManufacturers[i] + "</option>");
// }

// document.write("</select>");r phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");

// for (var i = 0; i < phoneManufacturers.length; i++) {
//   document.write("

