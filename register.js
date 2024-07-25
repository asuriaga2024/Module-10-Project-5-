function checkForm() {
   // TODO: Perform input validation 
   const formErrors = document.getElementById('formError');
   const fullName = document.getElementById('fullName');
   const email = document.getElementById('email');
   const confirmPassword = document.getElementById('confirmPassword');
}

//something to display the errors
let errors = [];

//clear previous errors
fullName.classList.remove('error');
email.classList.remove('error');
password.classList.remove('error');
confirmPassword.classList.remove('error');

//checking if full name meets criteria
if (fullName.value.trim().length < 1) {
   errors.push("Missing full name.");
   fullName.classList.add('error');
}

//checking if email meets criteria
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,5}$/;
if (!email.value.match(emailPattern)) {
   errors.push("Invalid or mssing email address.");
   email.classList.add('error');
}

//checking if password length is good
if (password.value.length < 10 || password.value.length > 20) {
   errors.push("Password must be between 10 and 20 characters.")
   password.classList.add('error');
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});

