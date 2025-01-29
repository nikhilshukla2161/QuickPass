// Character sets for password generation
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Uppercase letters
const lowerSet = "abcdefghijklmnopqrstuvwxyz"; // Lowercase letters
const numberSet = "1234567890"; // Numbers
const symbolSet = "~!@#$%^&*()_+/"; // Special characters

// Selecting required DOM elements
const passBox = document.getElementById("pass-box"); // Password display area
const totalChar = document.getElementById("total-char"); // Password length input
const upperInput = document.getElementById("upper-case"); // Uppercase checkbox
const lowerInput = document.getElementById("lower-case"); // Lowercase checkbox
const numberInput = document.getElementById("numbers"); // Numbers checkbox
const symbolInput = document.getElementById("symbols"); // Symbols checkbox
const copy = document.getElementById("copy"); // Copy button
const btn = document.getElementById("btn"); // Generate button

// Function to get a random character from a given character set
const getRandomChar = (set) => set[Math.floor(Math.random() * set.length)];

// Function to generate a random password
const generatePassword = () => {
  let password = "";
  let allChars = ""; // Stores all selected character types

  // Add character sets based on checked checkboxes
  if (upperInput.checked) allChars += upperSet;
  if (lowerInput.checked) allChars += lowerSet;
  if (numberInput.checked) allChars += numberSet;
  if (symbolInput.checked) allChars += symbolSet;

  // If no option is selected, display a warning message
  if (allChars === "") {
    passBox.innerText = "Select at least one option!";
    return;
  }

  // Generate password of the specified length
  for (let i = 0; i < totalChar.value; i++) {
    password += getRandomChar(allChars);
  }

  passBox.innerText = password; // Display generated password
};

// Event listener for copy button
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(passBox.innerText); // Copy password to clipboard
  copy.title = "Copied!"; // Show tooltip message
});

// Event listener for generate button
btn.addEventListener("click", generatePassword);

// Generate an initial password on page load
generatePassword();
