const form = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const submitButton = document.getElementById("submitButton");

const namePattern = /^[a-zA-Z ]{3,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phonePattern = /^\d{10}$/;


const nameError = document.getElementById("fullNameError");
const emailValidation = document.getElementById("emailValidation");
const passwordStrength = document.getElementById("passwordStrength");
const phoneError = document.getElementById("phoneError");


const tooltip = document.createElement("span");
tooltip.textContent = "Please fill out all fields correctly.";
tooltip.classList.add("tooltip");
tooltip.style.display = "none";
submitButton.parentElement.appendChild(tooltip);


fullName.addEventListener("keyup", () => {
  nameError.textContent = namePattern.test(fullName.value) ? "" : "Invalid name.";
});

email.addEventListener("keyup", () => {
  emailValidation.textContent = emailPattern.test(email.value) ? "Valid email" : "Invalid email";
  emailValidation.style.color = emailPattern.test(email.value) ? "green" : "red";
});

password.addEventListener("keyup", () => {
  const value = password.value;
  if (!value) {
    passwordStrength.textContent = "";
  } else if (value.length < 8 || !passwordPattern.test(value)) {
    passwordStrength.textContent = "Weak";
    passwordStrength.style.color = "red";
  } else if (value.length >= 8) {
    passwordStrength.textContent = "Strong";
    passwordStrength.style.color = "green";
  }
});

phone.addEventListener("keyup", () => {
  phoneError.textContent = phonePattern.test(phone.value) ? "" : "Invalid phone number.";
});


submitButton.addEventListener("mouseover", (e) => {
  if (!isValidForm()) {
    tooltip.style.display = "block";
    tooltip.style.left = `${e.pageX - 50}px`;
    tooltip.style.top = `${e.pageY + 20}px`;
  } else {
    tooltip.style.display = "none";
  }
  submitButton.style.backgroundColor = "green"; 
});

submitButton.addEventListener("mouseout", () => {
  tooltip.style.display = "none"; 
  submitButton.style.backgroundColor = "#007bff"; 
});


form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isValidForm()) {
    alert("Form submitted successfully!");
  }
});

function isValidForm() {
  return (
    namePattern.test(fullName.value) &&
    emailPattern.test(email.value) &&
    passwordPattern.test(password.value) &&
    phonePattern.test(phone.value)
  );
}
