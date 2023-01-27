// Get input elements

const lengthInput = document.getElementById("length-input");
const lowercaseCheckbox = document.getElementById("lowercase-checkbox");
const uppercaseCheckbox = document.getElementById("uppercase-checkbox");
const numbersCheckbox = document.getElementById("numbers-checkbox");
const specialCheckbox = document.getElementById("special-checkbox");

// Get button and password container elements

const generateButton = document.getElementById("generate-button");
const passwordContainer = document.getElementById("password-container");

// Add event listener for button click

generateButton.addEventListener("click", generatePassword);

// Function to generate random password

function generatePassword() {
  // Get selected options

  const length = lengthInput.value;
  const includeLowercase = lowercaseCheckbox.checked;
  const includeUppercase = uppercaseCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSpecial = specialCheckbox.checked;

  // Create arrays for each type of character

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const numberChars = "0123456789".split("");
  const specialChars = "!@#$%^&*()".split("");

  // Create empty array to store selected characters

  let selectedChars = [];

  // Add selected character types to selectedChars array

  if (includeLowercase) selectedChars = selectedChars.concat(lowercaseChars);
  if (includeUppercase) selectedChars = selectedChars.concat(uppercaseChars);
  if (includeNumbers) selectedChars = selectedChars.concat(numberChars);
  if (includeSpecial) selectedChars = selectedChars.concat(specialChars);

  // Initialize empty password string

  let password = "";

  // Loop to generate random password of desired length

  for (let i = 0; i < length; i++) {
    // Generate random index within selectedChars array

    const randomIndex = Math.floor(Math.random() * selectedChars.length);

    // Add character at randomIndex to password

    password += selectedChars[randomIndex];
  }

  // Display password in password container

  passwordContainer.innerHTML = password;
}

passwordContainer.addEventListener("click", copypass);

function copypass() {
  navigator.clipboard.writeText(passwordContainer.textContent);
  alert(passwordContainer.textContent + " 😉 " + "Copied to the clipboard");
}
