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
            break;
    

        case '-':
        result = subtractNums(firstVariable, secondVariable);
            break;
    
        case '*':
        result = multiplyNums(firstVariable, secondVariable);
            break;

        case '/':
        result = divideNums(firstVariable, secondVariable);
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
