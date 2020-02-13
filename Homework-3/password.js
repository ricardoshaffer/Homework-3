let varyingCase = document.querySelector("#upper-lower-case");
let inclCharacters = document.querySelector("#special-characters");
let incNumbers = document.querySelector("#include-numbers");
let generateBtn = document.querySelector("#generate-button");
let redBox =document.getElementById("redBox");
redBox.children[0].style.display = "none";
let includeLetters;
let includeCharacters;
let includeNumbers;
let lettersYes = false;
let charactersYes =false;
let numbersYes =false;
let variableTest = false;
let lengthTest = false;
let secretKey;

//display error if none of three are selected DATA VALIDATION


// RECORD DATA ACTIVITY FROM interaction on page



// EVENT LISTENERS FOR UPPER/LOWERCASE LETTERS
varyingCase.addEventListener("change", function(event) {
    event.preventDefault();
    let lettersIncluded = event.varyingCase || event.srcElement;
    if (lettersIncluded.checked){
        lettersYes = true;
        includeLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    }
    else {
        lettersYes = false;
        includeLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    }
    console.log("varying case has been selected" + lettersYes + includeLetters);
  });

  //EVENT LISTENER FOR INCLUDE CHARACTERS
  inclCharacters.addEventListener("change", function(event) {
    event.preventDefault();
    let charactersIncluded = event.inclCharacters || event.srcElement;
    if (charactersIncluded.checked){
        charactersYes = true;
        includeCharacters = ["!","@","#","$","%","&","*","?"];
    
    } else {
        charactersYes = false;
        includeCharacters = [''];
    }
    console.log("varying characters has been selected" + charactersYes +includeCharacters.length + " " + includeCharacters);
  });

  //EVENT LISTENER FOR INCLUDE NUMBERS
  incNumbers.addEventListener("change", function(event) {
    event.preventDefault();
    let numbersIncluded = event.incNumbers || event.srcElement;
    if (numbersIncluded.checked){
    numbersYes = true;
    includeNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    } else {
        numbersYes = false;
        includeNumbers = [''];
    }
    console.log("varying numbers has been selected" + numbersYes + includeNumbers);
  });

  // COMBINING ALL STRING VALUES INTO ONE.
  
  // THE SUBMIT BUTTON FUNCTION TO WAIT FOR ALL DATA

generateBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (numbersYes == false && charactersYes == false && lettersYes == false) {
      console.log("error, must pick at least one");
    } else {
        console.log("it verified at least 1 of 3");
        variableTest = true;
    };
    let passwordLength = document.querySelector("#password-length").value;
        reqPasswordLength = parseInt(passwordLength);
    if (reqPasswordLength < 8 || reqPasswordLength > 128){
        redBox.children[0].style.display = "inline-block";
        document.getElementById("warningMsg").innerHTML = "you must select 8-128 characters";
    } else {
        lengthTest = true;
    };
    if (variableTest == true && lengthTest == true){
        computerChoices = [].concat(includeLetters, includeCharacters, includeNumbers);
        computerChoicesLength= computerChoices.length;
        function randomStr(reqPasswordLength, computerChoices) { 
            for (var i =1; i < reqPasswordLength; i--) { 
            secretKey +=  computerChoices[Math.floor(Math.random() * computerChoicesLength)]; 
            console.log("secret key: " + secretKey + ". length of options: " + computerChoicesLength + ". selected password Length: " + reqPasswordLength + ". Characters Randomized: " + computerChoices);    
        }
            return secretKey;
            
            
    }
   
}
randomStr();

});
