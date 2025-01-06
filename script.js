let displayNums = []
let firstVariable;
let secondVariable;
let operatorVariable;
let result;
const display1 = document.querySelector('#display');
function updateDisplay(){
    display1.textContent = displayNums.join('');}

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
        firstVariable = undefined;
        secondVariable = undefined;
        displayNums = result.toString().split("");
        updateDisplay();
            break;
    

        case '-':
        result = subtractNums(firstVariable, secondVariable);
        operatorVariable = '';
        firstVariable = undefined;
        secondVariable = undefined;
        displayNums = result.toString().split("");
        updateDisplay();
            break;
    
        case '*':
        result = multiplyNums(firstVariable, secondVariable);
        operatorVariable = '';
        firstVariable = undefined;
        secondVariable = undefined;
        displayNums = result.toString().split("");
        updateDisplay();
            break;

        case '/':
        result = divideNums(firstVariable, secondVariable);
        operatorVariable = '';
        firstVariable = undefined;
        secondVariable = undefined;
        displayNums = result.toString().split("");
        updateDisplay()
            break;
    }

}
const buttonInput =  document.querySelectorAll('button');
buttonInput.forEach((button) => {


button.addEventListener("click", (event) => {
    const buttonValue = event.target.innerText;
    if(/^[0-9]$/.test(buttonValue)){
        displayNums.push(buttonValue);
        console.log('button is pushed')
        updateDisplay()
    }
    switch(buttonValue) {
        case 'AC':
        displayNums = []
        firstVariable = undefined;
        secondVariable = undefined;
        operatorVariable = '';
        result = 0;
        updateDisplay()
            //code
            break;
        
        case '+/-':
            if(displayNums[0] == '-'){
                displayNums.shift();
            }
            else {
                displayNums.unshift('-');
            }
            updateDisplay()
            //code
            break;
        
         case '%':
            if(operatorVariable != ''){
                if(displayNums[0] == '-'){
                    displayNums.shift()
                    secondVariable = convertToNegative(parseFloat(displayNums.join('')));
                    displayNums  = []
                    evaluate(operatorVariable);
                }   
                else {
                    firstVariable = parseFloat(displayNums.join(''));
                    result = firstVariable / 100;
                    displayNums = result.toString().split("");
                    updateDisplay()
                    
                    
                }
                
            }
            //code
            updateDisplay()
            break;
        
        case '/':
            if(operatorVariable != ''){
                if(displayNums[0] == '-'){
                    displayNums.shift()
                    secondVariable = convertToNegative(parseFloat(displayNums.join('')));
                    displayNums  = []
                    evaluate(operatorVariable);
                    updateDisplay()
                }   
                else {
                    secondVariable = parseFloat(displayNums.join(''));
                    displayNums = []
                    evaluate(operatorVariable);
                    updateDisplay()
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
                    secondVariable = convertToNegative(parseFloat(displayNums.join('')));
                    displayNums  = []
                    evaluate(operatorVariable);
                    updateDisplay()
                }   
                else {
                    secondVariable = parseFloat(displayNums.join(''));
                    displayNums = []
                    evaluate(operatorVariable);
                    updateDisplay()
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
                    secondVariable = convertToNegative(parseFloat(displayNums.join('')));
                    displayNums  = []
                    evaluate(operatorVariable);
                    updateDisplay()
                }   
                else {
                    secondVariable = parseFloat(displayNums.join(''));
                    displayNums = []
                    evaluate(operatorVariable);
                    updateDisplay()
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
                    secondVariable = convertToNegative(parseFloat(displayNums.join('')));
                    displayNums  = []
                    evaluate(operatorVariable);
                    updateDisplay()
                }   
                else {
                    secondVariable = parseFloat(displayNums.join(''));
                    displayNums = []
                    evaluate(operatorVariable);
                    updateDisplay()
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
            if(firstVariable != undefined && displayNums.length != 0 ){
                if(displayNums.length == 1 && displayNums[0] == '-'){
                    break;
                }
                if(displayNums[0] == '-'){
                    displayNums.shift()
                    secondVariable = convertToNegative(parseFloat(displayNums.join('')));
                    displayNums  = []
                    evaluate(operatorVariable);
                }   
                else {
                    secondVariable = parseFloat(displayNums.join(''));
                    displayNums = []
                    evaluate(operatorVariable);
                }
            }
            if(firstVariable != undefined && secondVariable != undefined && operatorVariable != ''){
                evaluate(operatorVariable);
            }
            //code
            updateDisplay()
            break;
        
        case '.':
            if(displayNums.includes('.')){
                break;
            }
            else {
                displayNums.push('.');
            }
            //code
            updateDisplay()
            break;
        
        
        
    }
    
});
});
