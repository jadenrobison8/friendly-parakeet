// Assignment code here

//variables
var lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var specialcharArr = ['!','"','#','$','%','&','(',')','*','+',',','-','.',':',';','<','>','?','@','[',']','/',']','^','_','{','}','|','~'];

var numberArr = ['1','2,','3,','4','5','6','7','8','9','0'];

// Define characters
var getCharacters = function() {
  
  //get password length
  passlength = prompt("How long do you want your password to be?");
  passlength = parseInt(passlength);
  if(passlength < 8 || passlength > 128) {
    alert("Please select a number greater than 8 and less than 128.");
    return getCharacters ();
  }

  //get lowercase letters
  lowerchar = confirm("Do you want to use lowercase letters in your password?");
  if(lowerchar) {
    possibilities = possibilities.concat(lowercaseArr);
  }

  //get upper case letters
  upperchar = confirm("Do you want to use upper case letters in your password?");
  if(upperchar) {
    possibilities = possibilities.concat(uppercaseArr);
  }

  //get numbers
  numbers = confirm("Do you want to use numbers in your password?");
  if(numbers) {
    possibilities = possibilities.concat(numberArr);
  }

  //get special characters
  specchar = confirm("Do you want to use special characters in your password?");
  if(specchar) {
    possibilities = possibilities.concat(specialcharArr);
  }

}//end Get char function



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

