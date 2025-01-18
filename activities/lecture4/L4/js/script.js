
let name = "Ana"; // name
let age = 30; // age
let isStudent = true; // enrolment status

// checks if Ana is a student or not
let studentStatus = isStudent ? "is a student" : "is not a student"; 


// age in 8 years
let ageInEightYears = age + 8;

// calculating ana's age in 8 years
let message = `${name} is ${age} years old, in 8 years they will be ${ageInEightYears}.`;
document.getElementById('message').textContent = message;
