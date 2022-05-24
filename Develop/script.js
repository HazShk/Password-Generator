//function to get the Number of Characters
function getNumberOfCharacters() {
  var response = window.prompt("Enter a number between 8 and 128");
  intresponse = parseInt(response);
  if (
    response === "" ||
    response === null ||
    response < 8 ||
    response > 128 ||
    isNaN(response)
  ) {
    window.alert("Please provide a valid response");
    getNumberOfCharacters();
  }
  return response;
}

//function to get the password string
function getPasswordCharacterString() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = lowerCase.toUpperCase();
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var numeric = "1234567890";

  var isLowerCase = window.confirm(
    "Select 'OK' if you want your password to contain lowercase characters.  Otherwise select 'Cancel'"
  );
  var isUpperCase = window.confirm(
    "Select 'OK' if you want your password to contain uppercase characters.  Otherwise select 'Cancel'"
  );
  var isSpecialCharacter = window.confirm(
    "Select 'OK' if you want your password to contain special characters.  Otherwise select 'Cancel'"
  );
  var isNumeric =
    "Select 'OK' if you want your password to contain numeric characters.  Otherwise select 'Cancel'";

  var passwordString = "";

  if (!(isLowerCase || isUpperCase || isSpecialCharacter || isNumeric)) {
    window.alert("Provide a valid response");
    getPasswordCharacterString();
  } else {
    if (isLowerCase) {
      passwordString += lowerCase;
    }
    if (isUpperCase) {
      passwordString += upperCase;
    }
    if (isSpecialCharacter) {
      passwordString += specialCharacters;
    }
    if (isNumeric) {
      passwordString += numeric;
    }
    console.log(passwordString);
  }
  return passwordString;
}

//main code to generate password
function generatePassword() {
  var numberOfCharacters = getNumberOfCharacters();
  console.log(numberOfCharacters);
  var passwordCharacterString = getPasswordCharacterString();
  var passwordCharacterArray = passwordCharacterString.split("");
  console.log(passwordCharacterArray);
  var response = "";

  for (var i = 0; i < numberOfCharacters; i++) {
    var index = Math.floor(Math.random() * passwordCharacterArray.length);
    console.log(index);
    response += passwordCharacterArray[index];
    console.log(response);
  }
  return response;
}

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
