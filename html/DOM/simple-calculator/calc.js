var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var operators = ['+', '-', '*', '/', "."];

/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 */
function calculate(mathExp) {
  try {
    return eval(mathExp)
  } catch (e) {
    return NaN
  }
}

//New utilitarian function
function checkKeyKind(target) {
  elementText = target.innerText;
  if (operators.includes(elementText)) { return "oper" }
  if (numbers.includes(elementText)) { return "num" }
  return "unknown";
}

function togglePosNeg(display) {
  if (display.innerText[0] !== "-") {
    display.innerText = "-" + display.innerText;
  } else {
    display.innerText = display.innerText.slice(1);
  }
}


document.addEventListener('DOMContentLoaded', function () {
  var outputDiv = document.getElementById('output');
  var withResult = false;

  document.addEventListener('click', function (event) {
    var keyContent = event.target.innerText;
    var lastChar = outputDiv.innerText[outputDiv.innerText.length - 1]
    var currentKey = checkKeyKind(event.target);

    //Check that we have clicked a valid key (is either a num or an operator)
    //and that whatever we have is outputDiv is no more than 6 char long
    if ((currentKey === "num" || currentKey === "oper") && outputDiv.innerText.length < 6) {
      
      //If we receive and operator check that the last char was not and operator as well
      if (currentKey === "oper" && !operators.includes(lastChar)) {
        outputDiv.innerText += keyContent;
        withResult = false;
      }

      else if (currentKey === "num") {
        //If we have a result and the user presses a num then
        //reset outputDiv and put whatever num was pressed
        if (withResult) {
          outputDiv.innerText = "";
          outputDiv.innerText += keyContent;
          withResult = false;
        } 
        //if we dont have a result yet
        else {
          outputDiv.innerText += keyContent
          withResult = false;
        }
      }
    }

    else if (keyContent === "=" && outputDiv.innerText.length > 0) {
      //if last character is an operator then remove it from outputDiv.innerText
      if (operators.includes(lastChar)) {
        outputDiv.innerText = outputDiv.innerText.slice(0, -1);
      }
      var result = calculate(outputDiv.innerText);
      outputDiv.innerText = result;
      console.log(outputDiv.innerText);
      withResult = true;

    }

    else if (keyContent === "C") {
      outputDiv.innerText = "";
      withResult = false;
    }

    else if (keyContent === "+/-") {
      togglePosNeg(outputDiv);
    }

    else if(keyContent === "%" && outputDiv.innerText.length > 0 ){
      outputDiv.innerText = calculate(outputDiv.innerText) / 100;
      withResult = true;
    }

    else if(keyContent === "⇦" && !withResult){
      outputDiv.innerText = outputDiv.innerText.slice(0, -1);
    }

  })

})
