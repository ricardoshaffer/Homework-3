document.addEventListener("DOMContentLoaded", function (event) {
let varyingCase = document.querySelector("#upper-lower-case");
let inclCharacters = document.querySelector("#special-characters");
let incNumbers = document.querySelector("#include-numbers");
let generateBtn = document.querySelector("#generate-button");
let redBox =document.getElementById("redBox");
redBox.children[0].style.display = "none";
selectionWarning.children[0].style.display = "none";
let includeLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let includeCharacters;
let includeNumbers;
let lettersYes = false;
let charactersYes =false;
let numbersYes =false;
let variableTest = false;
let lengthTest = false;
let computerChoicesLength;
let secretKey ='';
let computerChoices;
let lockGen = true;
let passwordLength = 0;

//display error if none of three are selected DATA VALIDATION


// RECORD DATA ACTIVITY FROM interaction on page


// EVENT LISTENERS FOR UPPER/LOWERCASE LETTERS
varyingCase.addEventListener("change", function(event) {
    event.preventDefault();
    let lettersIncluded = event.varyingCase || event.srcElement;
    if (lettersIncluded.checked){
        lettersYes = true;
        includeLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        console.log("varying case has been selected" + lettersYes + includeLetters);
    }
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
        includeCharacters = null;
    }
    console.log("varying characters has been selected" + charactersYes +includeCharacters.length + " " + includeCharacters);
  });
  //EVENT LISTENER FOR INCLUDE NUMBERS
  incNumbers.addEventListener("change", function(event) {
    event.preventDefault();
    let numbersIncluded = event.incNumbers || event.srcElement;
    if (numbersIncluded.checked){
    numbersYes = true;
    includeNumbers = ["1","2","3","4","5","6","7","8","9","0"];
    } else {
        numbersYes = false;
        includeNumbers = null;
    }
    console.log("varying numbers has been selected" + numbersYes + includeNumbers);
  });


  
  // THE SUBMIT BUTTON FUNCTION TO WAIT FOR ALL DATA

  
generateBtn.addEventListener("click", function(event) {
    event.preventDefault();
if (lockGen != false){
// COMBINING ALL STRING VALUES INTO ONE.
if (includeNumbers != null && includeCharacters != null){
    computerChoices = includeNumbers.concat(includeCharacters);
    computerChoices = computerChoices.concat(includeLetters);
} else if(includeNumbers == null && includeCharacters != null){
    computerChoices = includeCharacters.concat(includeLetters);
} else if(includeNumbers != null && includeCharacters == null){
    computerChoices = includeNumbers.concat(includeLetters);
} else if(includeNumbers == null && includeCharacters == null){
    computerChoices = includeLetters;
}
    computerChoicesLength = computerChoices.length;
    passwordLength = document.querySelector("#password-length").value;
    reqPasswordLength = parseInt(passwordLength);
    if (numbersYes == false && charactersYes == false && lettersYes == false) {
        $(".list-group-item:nth-child(n+2)").css({"background-color": "rgba(255,0,0,0.3)","border-color": "red"});
        selectionWarning.children[0].style.display = "inline-block";
        document.getElementById("selector-warning").innerHTML = "You must pick at least one option";   
      console.log("error, must pick at least one");
    } else {variableTest = true;
        console.log("it verified at least 1 of 3");
    }
    if (reqPasswordLength < 8 || reqPasswordLength > 128  || reqPasswordLength === NaN){
        redBox.children[0].style.display = "inline-block";
        document.getElementById("warningMsg").innerHTML = "you must select 8-128 characters";
    } else {
        lengthTest = true;
    }
    
    if (variableTest == true && lengthTest == true){
        for ( i =0; i < reqPasswordLength; i++){
            randomizedLetters = (Math.floor(Math.random()*computerChoicesLength));
            secretKey += computerChoices[randomizedLetters];
}
$("#password-appear p").text(secretKey);
console.log("secret key: " + secretKey + ". length of options: " + computerChoicesLength + ". selected password Length: " + reqPasswordLength + ". Characters Randomized: " + computerChoices);
lockGen = false;


}

};
})
});
