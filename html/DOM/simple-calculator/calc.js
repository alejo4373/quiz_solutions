var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var operators = ['+', '-', '*', '/', "=", "."];

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


document.addEventListener('DOMContentLoaded', function () {
  var outputDiv = document.getElementById('output');
  var withResult = false;

  document.addEventListener('click', function (event) {
    var elementText = event.target.innerText;
    var lastChar = outputDiv.innerText[outputDiv.innerText.length - 1]

    //Check that we have clicked a valid key (is either a num or an operator)
    if ((operators.includes(elementText) || numbers.includes(elementText)) && outputDiv.innerText.length < 6) {
      if (elementText === "=" && outputDiv.innerText.length > 0) {
        //if last character is an operator then remove it from outputDiv.innerText
        if (operators.includes(lastChar)) {
          outputDiv.innerText = outputDiv.innerText.slice(0, -1);
        }
        var result = calculate(outputDiv.innerText);
        outputDiv.innerText = result;
        console.log(outputDiv.innerText);
        withResult = true;

      }
      //check that elementText is a character and that the lastChar is not an operator
      else if (operators.includes(elementText) && !operators.includes(lastChar)) {
        outputDiv.innerText += elementText;
        withResult = false;

      } else if (numbers.includes(elementText) && !withResult) {
        outputDiv.innerText += elementText
        withResult = false;
        console.log("hello")

      }
    }

    else if (elementText === "C") {
      outputDiv.innerText = "";
      withResult = false;
    }
  })


})
