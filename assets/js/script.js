// Acceptance Criteria: 
// when password is clicked, it needs to generate a password
// prompts to select password criteria 
// password length needs to be between 8 and 128 characters long and there needs to be prompts when it is outside those character lengths to reset and ask again
// password criteria includes lowercase, uppercase, numeric, and/or special characters
// input needs to be validated and at least one character type should be selected
// when all prompts are answered, a password is generated that matches the criteria
// password should be written in an alert or written to the page

// generatePassword(); function
function generatePassword(){
// ask user how long they want their password to be
  // answer must be betweet 8 and 128, so we need to validate
    var userLength = window.prompt("How long do you want your password to be?");

    var passwordLength = parseInt(userLength)
        if (isNaN(passwordLength)) {
          window.alert("That is not a number! Try again.");
          generatePassword();
        } else {

        }

// ask user if they want to include capital letters
// ask user if they want to include numbers
// ask user if they want to include special characters
    };

  // input validation

  // generate password

  // display generated password
  // return generatePassword;
  //addEventListner("click", generatePassword);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
