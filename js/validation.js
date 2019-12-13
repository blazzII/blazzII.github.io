// Validation Functions

// OLD - Letters and Numbers Only
function LettersAndNumbersOnly(key) {
  // get key code ASCII window.event.keyCode
  if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key > 47 && key < 58 || key > 31 && key < 33)
    return; // OK
  else
    window.event.returnValue = null; // otherwise, discard character
}

function alphaNumericOnly(e) {
  (e.value.match(/^[0-9a-zA-Z]/)) ? return 1 : return 0);
}