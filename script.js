let displayNums = []
let firstVariable;
let secondVariable;
let operatorVariable;
let result;

function addNums (x,y){
return x + y;
}

function subtractNums (x,y){
    return x - y;
}

function multiplyNums (x,y){
    return x * y;
}

function divideNums (x,y){
    return x / y;
}

function convertToDecimal(num){
   return num / 100;
}

function convertToNegative(num){
    return num * -1;
}

function evaluate(string){
    switch(string){
        case '+':
        result = addNums(firstVariable, secondVariable);
        operatorVariable = '';
            break;
    

        case '-':
        result = subtractNums(firstVariable, secondVariable);
        operatorVariable = '';
            break;
    
        case '*':
        result = multiplyNums(firstVariable, secondVariable);
        operatorVariable = '';
            break;

        case '/':
        result = divideNums(firstVariable, secondVariable);
        operatorVariable = '';
            break;
    }

}
const buttonInput =  document.querySelector('button');
buttonInput.addEventListener("click", (event) => {
    const buttonValue = event.target.innerText;
    switch(buttonValue) {
        case 'AC':
        displayNums = []
        firstVariable = 0;
        secondVariable = 0;
        operatorVariable = 0;
        result = 0;
            //code
            break;
        
        case '+/-':
            if(displayNums[0] == '-'){
                displayNums.shift();
            }
            else {
                displayNums.unshift('-');
            }
            //code
            break;
        
         case '%':
            //code
            break;
        
        case '/':
            if(operatorVariable != ''){
                if(displayNums[0] == '-'){
                    displayNums.shift()
                    secondVariableVariable = convertToNegative(parseFloat(displayNums.join('')));
                    displayNums  = []
                    evaluate(operatorVariable);
                }   
                else {
                    secondVariable = parseFloat(displayNums.join(''));
                    displayNums = []
                    evaluate(operatorVariable);
                }
            }
            operatorVariable = '/';
            if(displayNums[0] == '-'){
                displayNums.shift()
                firstVariable = convertToNegative(parseFloat(displayNums.join('')));
                displayNums = []
            }
            else {
                firstVariable = parseFloat(displayNums.join(''));
                displayNums = []
            }
            
            //code
            break;
        
        case '*':
            if(operatorVariable != ''){
                if(displayNums[0] == '-'){
                    displayNums.shift()
                    secondVariableVariable = convertToNegative(parseFloat(displayNums.join('')));
                    displayNums  = []
                    evaluate(operatorVariable);
                }   
                else {
                    secondVariable = parseFloat(displayNums.join(''));
                    displayNums = []
                    evaluate(operatorVariable);
                }
            }
            operatorVariable = '*';
            if(displayNums[0] == '-'){
                displayNums.shift()
                firstVariable = convertToNegative(parseFloat(displayNums.join('')));
                displayNums = []
            }
            else {
                firstVariable = parseFloat(displayNums.join(''));
                displayNums = []
            }
            //code
            break;
        
        case '-':
            if(operatorVariable != ''){
                if(displayNums[0] == '-'){
                    displayNums.shift()
                    secondVariableVariable = convertToNegative(parseFloat(displayNums.join('')));
                    displayNums  = []
                    evaluate(operatorVariable);
                }   
                else {
                    secondVariable = parseFloat(displayNums.join(''));
                    displayNums = []
                    evaluate(operatorVariable);
                }
            }
            operatorVariable = '-';
            if(displayNums[0] == '-'){
                displayNums.shift()
                firstVariable = convertToNegative(parseFloat(displayNums.join('')));
                displayNums = []
            }
            else {
                firstVariable = parseFloat(displayNums.join(''));
                displayNums = []
            }
            //code
            break;
        
        case '+':
            if(operatorVariable != ''){
                if(displayNums[0] == '-'){
                    displayNums.shift()
                    secondVariableVariable = convertToNegative(parseFloat(displayNums.join('')));
                    displayNums  = []
                    evaluate(operatorVariable);
                }   
                else {
                    secondVariable = parseFloat(displayNums.join(''));
                    displayNums = []
                    evaluate(operatorVariable);
                }
            }
            operatorVariable = '+';
            if(displayNums[0] == '-'){
                displayNums.shift()
                firstVariable = convertToNegative(parseFloat(displayNums.join('')));
                displayNums = []
            }
            else {
                firstVariable = parseFloat(displayNums.join(''));
                displayNums = []
            }
            //code
            break;
        
        case '=':
            //code
            break;
        
        case '.':
            //code
            break;
        
         case '0-9':
            //code
            break;
        
    }
});
