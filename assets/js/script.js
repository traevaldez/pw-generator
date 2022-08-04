// Acceptance Criteria: 
// when password is clicked, it needs to generate a password
// prompts to select password criteria 
// password length needs to be between 8 and 128 characters long and there needs to be prompts when it is outside those character lengths to reset and ask again
// password criteria includes lowercase, uppercase, numeric, and/or special characters
// input needs to be validated and at least one character type should be selected
// when all prompts are answered, a password is generated that matches the criteria
// password should be written in an alert or written to the page

// random function
function randomness(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min );
}

function randomItem(list) {
  return list[randomness(0, list.length - 1)]
}
// generatePassword(); function
function generatePassword(){
  
// ask user how long they want their password to be
  // answer must be betweet 8 and 128, so we need to validate
    var userLength = window.prompt("How long do you want your password to be?");
   
    var passwordLength = parseInt(userLength)
    // if user doesn't use a number
        if (isNaN(passwordLength)) {
          window.alert("That is not a number! Try again.");
          generatePassword();
          return;
        }
    // if user uses a length of less than 8 or more than 128
        if (passwordLength < 8 || passwordLength > 128){
          window.alert("Password length must be between 8 and 128 characters.");
          generatePassword;
          return;
        }

    // number, symbol, lower and uppercase lists
    var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var specialList = ["!", "@", "#", "$", "%", "^", "&", "*"]
    var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var upperCaseList = []
    
    var optionsList = []
    
    // ask user if they want to include numbers
    var numConfirm = window.confirm("Would you like to use numbers in your password?");
    if (numConfirm === true) {
      optionsList.push(numberList)
    }

    // ask user if they want to include special characters
    var specialConfirm = window.confirm("Would you like to use special characters in your password?");
    if (specialConfirm === true) {
      optionsList.push(specialList)
    }

    // ask user if they want to include uppercase letters
    var upperConfirm = window.confirm("Would you like to use uppercase letters in your password?");
    if (upperConfirm === true) {
      optionsList.push(upperCaseList)
    }
    // for upperCaseList 
    for (var i = 0; i < lowerCaseList.length; i++) {
      upperCaseList[i] = lowerCaseList[i].toUpperCase()
    }

    // ask user if they want to include lower case letter
    var lowerConfirm = window.confirm("Would you like to use lowercase letters in your password?");
    if (lowerConfirm === true) {
      optionsList.push(lowerCaseList)
    }

    // if user chooses none of the options
    if (optionsList === 0) {
      optionsList.push(lowerCaseList)
    }

    var generatedPassword = ""

    for (var i =0; i < passwordLength; i++){
      var randomlist = randomItem(optionsList)
      var randomChar = randomItem(randomlist)
      generatedPassword += randomChar
    }
// will return generated password to box
    return generatedPassword
  };


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
