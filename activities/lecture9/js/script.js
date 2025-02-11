document.addEventListener("DOMContentLoaded", init);

function init() {
    const form = document.getElementById("registrationForm");

    attachEventListeners();
    form.addEventListener("submit", handleFormSubmission);
}


function attachEventListeners() {
    document.querySelectorAll("#firstName, #lastName, #email").forEach(input => {
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
        hobbies: [...document.querySelectorAll('input[name="hobbies"]:checked')].map(hobby => hobby.value)
    };
}

function isFormValid({ firstName, lastName, email }) {
    return firstName !== "" && lastName !== "" && email !== "";
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
        alert("Please fill in all required fields.");
        return;
    }

    storeUserData(userData);
    alert("Registration successful!");

    document.getElementById("registrationForm").reset();
}
