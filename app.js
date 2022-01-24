const number_btn = document.querySelectorAll(".number_btn");
const operator_btn = document.querySelectorAll(".operator_unit");  
const input = document.querySelector(".input");

let n1 = "";
let n2 = "";
let ope ="";

function addNumber(event) {
    
    if(ope === "") {
        let n1 = event.target.innerText;
        input.value += n1;
        n1 = input.value;
        console.log(n1);
    } else if(ope === true) {
        n2 = event.target.innerText - n1;
        
        function oper_value(event) {
            ope = event.target.innerText;
        
            function result(n1, n2) {
                console.log(operator(n1, n2));
            };
        
            result(n1, n2);
        };
        
        
        Array.from(operator_btn).forEach(oper_btn => oper_btn.addEventListener("click", oper_value));


        console.log(n2);
        if(ope === "+") {
            result =  Number(n1) + Number(n2);
        } 
        else if(ope === "-") {
            result =  Number(n1) - Number(n2);
        } 
        else if(ope === "×") {
            result =  Number(n1) * Number(n2);
        } 
        else if(ope === "÷") {
            result =  Number(n1) / Number(n2);
        }
        return result;
    }
}


Array.from(number_btn).forEach(num => num.addEventListener("click", addNumber));

