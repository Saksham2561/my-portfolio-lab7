document.addEventListener("DOMContentLoaded", init);

function init() {
    const form = document.getElementById("registrationForm");

    attachEventListeners();
    form.addEventListener("submit", handleFormSubmission);
}

function attachEventListeners() {
    document.querySelectorAll("#firstName, #lastName, #email, #password").forEach(input => {
        input.addEventListener("focus", applyFocusStyle);
        input.addEventListener("blur", removeFocusStyle);
    });
}

function applyFocusStyle(event) {
    event.target.style.backgroundColor = "#ffecb3";
}

function removeFocusStyle(event) {
    event.target.style.backgroundColor = ""; 
}

function getFormData() {
    return {
        firstName: document.querySelector("#firstName").value.trim(),
        lastName: document.querySelector("#lastName").value.trim(),
        email: document.querySelector("#email").value.trim(),
        password: document.querySelector("#password").value.trim(),
        hobbies: [...document.querySelectorAll('input[name="hobbies"]:checked')].map(hobby => hobby.value)
    };
}

const firstNameRegex = /^[A-Za-z]+(?: [A-Za-z]+)?$/;
const lastNameRegex = /^[A-Za-z]+(?:[-'][A-Za-z]+)*$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

function isFormValid({ firstName, lastName, email, password }) {
    if (!firstNameRegex.test(firstName)) {
        alert("Invalid First Name! Only letters and a single optional space are allowed.");
        return false;
    }

    if (!lastNameRegex.test(lastName)) {
        alert("Invalid Last Name! Only letters, hyphens, and apostrophes are allowed.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid Email! Ensure it's in the correct format (e.g., example@domain.com).");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Invalid Password! Must contain at least one number, one uppercase letter, one lowercase letter, one special character, and be at least 12 characters long.");
        return false;
    }

    return true;
}

function storeUserData(userData) {
    console.log("User Data:", userData);

    const uniqueHobbies = new Set(userData.hobbies);
    console.log("Unique Hobbies:", [...uniqueHobbies]);

    const users = new Map();
    users.set(userData.email, userData);
    console.log("Users Map:", users);
}

function handleFormSubmission(event) {
    event.preventDefault();

    const userData = getFormData();

    if (!isFormValid(userData)) {
        return;
    }

    storeUserData(userData);
    alert("Registration successful!");

    document.getElementById("registrationForm").reset();
}
