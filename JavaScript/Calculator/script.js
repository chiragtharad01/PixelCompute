
let userInput = document.getElementById("user-input");
const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const operators = ['+','-','*','/','%','Exp','^','×','÷']
let num1,num2,operator;
let displayedOutput = false;
window.addEventListener('keydown',(e)=>{
    handleLogic(e.key)
})
const handleLogic = (key) =>{
    if(displayedOutput){
        userInput.value = '0'
        displayedOutput = false;
    } 
    if(numbers.includes(key)){
        if(userInput.value == '0') userInput.value = ''
        userInput.value = userInput.value+key
    }
    else if(operators.includes(key)){
        num1 = Number(userInput.value);
        operator = key;
        userInput.value = '';
    }
    else if(key == '=' || key == 'Enter'){
        num2 = Number(userInput.value);
        switch(operator){
            case '+':
                userInput.value = num1+num2;
                break;
            case '-':
                userInput.value = num1-num2;
                break;
            case '*': case '×':
                userInput.value = num1*num2;
                break;
            case '/': case '÷':
                if(num1 == 0) return;
                userInput.value = num1/num2;
                break;
            case '%':
                userInput.value = num1%num2;
                break;
            case '^': case 'Exp':
                userInput.value = Math.pow(num1,num2);
                break;
            default:
                break;
        }
        num1 = 0;
        num2 = 0;
        displayedOutput = true;
    }
    else if(key == 'Backspace' || key == 'Del'){
        userInput.value = userInput.value.slice(0,-1);
        if(userInput.value == '') userInput.value = '0';
    }
    else if(key == "C"){
        userInput.value = '0';
    }
}
let inputContainer = document.querySelector('.input-container');
inputContainer.addEventListener('click',(event)=>{
    if(event.target.classList.contains('btn')){
        handleLogic(event.target.textContent);
    }
})