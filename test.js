const buttons = document.querySelector(".pad");
const operator = document.querySelector(".operator_unit");
const input = document.querySelector(".input");


let firstNum = "";
let operatorForAdvanced = "";
let previousKey = "";
let previousNum = "";


function calculator(n1, ope, n2) {
    let result = 0;
    if(ope === "+") {
        result = Number(n1) + Number(n2);
    } else if(ope === "-") {
        result = Number(n1) - Number(n2);
    } else if(ope === "×") {
        result = Number(n1) * Number(n2);
    } else if(ope === "÷") {
        result = Number(n1) / Number(n2);
    }
    return result;
}




function clickBtn(event) {
    const btn = event.target;
    const btnClass = event.target.classList[0];
    const btnText = event.target.innerText;

    
    if(btn.matches("button")) {
        if(btnClass === "number_btn") {
            if(input.textContent === "0" && operatorForAdvanced === "") {
                input.textContent = btnText;
                firstNum = input.textContent;
            }
            else if(input.textContent !== "0" && operatorForAdvanced === "") {
                input.textContent = input.textContent + btnText;
                firstNum = input.textContent;
            }
            else if(input.textContent !== "0" && operatorForAdvanced !== "") {
                if(previousKey === operatorForAdvanced) {
                    input.textContent = btnText;
                    previousKey = input.textContent;
                    previousNum = input.textContent;
                }
                else if(previousKey !== operatorForAdvanced) {
                    input.textContent = input.textContent + btnText;
                    previousNum = input.textContent;
                }
            }
        }
        if(btnClass === "operator_unit") {
            operatorForAdvanced = btnText;
            previousKey = operatorForAdvanced;
        }
        if(btnClass === "clear") {
            firstNum = "";
            operatorForAdvanced = "";
            previousKey = "";
            previousNum = "";
            input.textContent = "0";
        }
        if(btnClass === "calculate") {
            if(firstNum !== "" && operatorForAdvanced === "") {
                input.textContent = firstNum;
            }
            else if(firstNum !== "" && previousNum === "") {
                input.textContent = calculator(input.textContent, operatorForAdvanced, input.textContent)
            }
            else if(previousKey === input.textContent) {
                input.textContent = calculator(firstNum, operatorForAdvanced, previousNum)
            }
            else if(previousKey !== input.textContent && previousNum !== '') {
                input.textContent = calculator(input.textContent, operatorForAdvanced, previousNum);
            }
            else if(previousKey !== input.textContent && previousNum === "") {
                input.textContent = firstNum;
            }
        }
    }
}


buttons.addEventListener("click", clickBtn);