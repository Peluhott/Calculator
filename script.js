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
    if(buttonValue == "="){
        evaluate(buttonValue);
    }
});
