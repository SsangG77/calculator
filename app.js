const buttons = document.querySelector(".pad");
const operators = document.querySelector(".operator_unit");
const input = document.querySelector(".input");

let firstNum = "";
let lastNum = "";
let operator = "";
let lastNumKey = "";



function calculator(n1, ope, n2) {
    let result = "0";
    if(ope === "+") {
        result = Number(n1) + Number(n2);
    }
    else if(ope === "-") {
        result = Number(n1) - Number(n2);
    }
    else if(ope === "×") {
        result = Number(n1) * Number(n2);
    }
    else if(ope === "÷") {
        result = Number(n1) / Number(n2);
    }
    return String(result);
}



function clickBtn(event) {
    const btn = event.target;
    const btnClass = btn.classList[0];
    const btnText = btn.innerText;

    if(btn.matches("button")) {
        if(btnClass === "number_btn") {
            if(input.textContent ===  "0" && operator === "") {
                input.textContent = btnText;
                firstNum = input.textContent;
            }
            else if(input.textContent !== "0" && operator === "") {
                input.textContent = input.textContent + btnText;
                firstNum = input.textContent;
            }
            else if(input.textContent !== "0" && operator !== "") {
                if(lastNumKey === operator) {
                    input.textContent = btnText;
                    lastNum = input.textContent;
                    lastNumKey = input.textContent;
                }
                else if(lastNumKey !== operator) {
                    input.textContent = input.textContent + btnText;
                    lastNum = input.textContent;
                }
            }
        }
        else if(btnClass === "operator_unit") {
            operator = btnText;
            lastNumKey = operator;
        }
        else if(btnClass === "clear") {
            firstNum = "";
            lastNum = "";
            operator = "";
            lastNumKey = "";
            input.textContent = "0";
        }
        else if(btnClass === "calculate") {
            if(firstNum !== "" && operator === "") {
                input.textContent = firstNum;
            }
            else if(firstNum !== "" && lastNum === "") {
                input.textContent = calculator(input.textContent, operator, input.textContent)
            }
            else if(lastNumKey === input.textContent) {
                input.textContent = calculator(firstNum, operator, lastNum)
            }
            else if(lastNumKey !== input.textContent && lastNum !== "") {
                input.textContent = calculator(firstNum, operator, lastNum)
            }
            else if(lastNumKey !== input.textContent && lastNum === "") {
                input.textContent = firstNum;
            }
        }
    }
}





buttons.addEventListener("click", clickBtn);